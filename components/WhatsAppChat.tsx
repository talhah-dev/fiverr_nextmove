'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Conversation } from '@elevenlabs/client';
import Image from 'next/image';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface VoiceVisualizerProps {
  isActive: boolean;
  bars?: number;
}

function VoiceVisualizer({ isActive, bars = 25 }: VoiceVisualizerProps) {
  return (
    <div className="flex items-center justify-center gap-1 h-12 px-6">
      {[...Array(bars)].map((_, i) => (
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-500 ease-out ${
            isActive
              ? 'bg-gradient-to-t from-[#ff8040] via-[#ff5500] to-[#ffaa00] shadow-lg shadow-[#ff5500]/50'
              : 'bg-white/20 h-3'
          }`}
          style={
            isActive
              ? {
                  height: `${25 + Math.sin(Date.now() * 0.01 + i * 0.5) * 20}px`,
                  animationDelay: `${i * 0.05}s`,
                  filter: 'drop-shadow(0 0 6px rgba(255, 85, 0, 0.6))',
                }
              : undefined
          }
        />
      ))}
    </div>
  );
}

function MessageLoading() {
  return (
    <div className="flex space-x-2">
      <div className="w-2 h-2 bg-gradient-to-r from-[#ff8040] to-[#ff5500] rounded-full animate-bounce shadow-lg shadow-[#ff5500]/50"></div>
      <div className="w-2 h-2 bg-gradient-to-r from-[#ff8040] to-[#ff5500] rounded-full animate-bounce shadow-lg shadow-[#ff5500]/50" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-gradient-to-r from-[#ff8040] to-[#ff5500] rounded-full animate-bounce shadow-lg shadow-[#ff5500]/50" style={{ animationDelay: '0.2s' }}></div>
    </div>
  );
}



interface ChatBubbleProps {
  message: Message;
}

function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex items-start gap-3 mb-4 ${isUser && 'flex-row-reverse'} animate-fade-in-up`}>
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff8040] via-[#ff5500] to-[#ff3300] flex items-center justify-center shadow-lg shadow-[#ff5500]/30 border border-white/20">
            <span className="text-white text-sm font-bold">S</span>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 shadow-lg shadow-black/20">
            <Image
              src="/assistent.webp"
              alt="NextMove AI Assistent"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <div
        className={`rounded-2xl px-4 py-3 max-w-[80%] backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] ${
          isUser
            ? 'bg-gradient-to-br from-[#ff8040] via-[#ff5500] to-[#ff3300] text-white shadow-xl shadow-[#ff5500]/30 border-white/20'
            : 'bg-gradient-to-br from-white/15 to-white/5 text-white shadow-xl shadow-black/20 border-white/20'
        }`}
      >
        <span className="text-white/90 text-sm leading-relaxed">{message.content}</span>
      </div>
    </div>
  );
}

export default function LiveSpeakingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hallo! 👋 Willkommen bei NextMove Digital. Falls Sie offene Fragen zu Immobilienprojekten oder digitalen Strategien haben, sprechen Sie einfach oder klicken Sie unten auf das Mikrofon. Ich höre Ihnen gerne zu!',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'connecting' | 'disconnected'>('disconnected');
  const [recordingTime, setRecordingTime] = useState(0);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recordingIntervalRef = useRef<NodeJS.Timeout>();
  const conversationRef = useRef<any>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isSpeaking, isLoading, scrollToBottom]);

  useEffect(() => {
    if (isListening) {
      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } else {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
      setRecordingTime(0);
    }

    return () => {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    };
  }, [isListening]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartListening = useCallback(async () => {
    try {
      setIsListening(true);
      setConnectionStatus('connecting');
      
      // Mikrofon-Berechtigung anfordern
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // ElevenLabs Conversation starten
      const conversation = await Conversation.startSession({
        agentId: 'agent_01jxb4kys3fyvs4e88rhhc9pmc',
        onConnect: () => {
          setConnectionStatus('connected');
          console.log('ElevenLabs connected');
        },
        onDisconnect: () => {
          setConnectionStatus('disconnected');
          setIsListening(false);
          console.log('ElevenLabs disconnected');
        },
        onError: (error) => {
          console.error('ElevenLabs Error:', error);
          setConnectionStatus('disconnected');
          setIsListening(false);
        },
        onMessage: (message) => {
          console.log('ElevenLabs Message:', message);
          if (message.source === 'user' && message.message) {
            // Benutzer-Nachricht hinzufügen
            const userMessage: Message = {
              id: Date.now().toString(),
              content: message.message,
              sender: 'user',
              timestamp: new Date(),
            };
            setMessages(prev => [...prev, userMessage]);
          } else if (message.source === 'ai' && message.message) {
            // AI-Antwort hinzufügen
            const aiMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: message.message,
              sender: 'ai',
              timestamp: new Date(),
            };
            setMessages(prev => [...prev, aiMessage]);
            setIsLoading(false);
          }
        },
        onModeChange: (mode) => {
          console.log('Mode changed:', mode);
          setIsSpeaking(mode.mode === 'speaking');
        },
      });

      conversationRef.current = conversation;
      
    } catch (error) {
      console.error('Failed to start conversation:', error);
      setConnectionStatus('disconnected');
      setIsListening(false);
    }
  }, [setMessages, setIsListening, setConnectionStatus, setIsLoading, setIsSpeaking]);

  const handleStopListening = useCallback(async () => {
    setIsListening(false);
    if (conversationRef.current) {
      await conversationRef.current.endSession();
      conversationRef.current = null;
    }
    setConnectionStatus('disconnected');
  }, [setIsListening, setConnectionStatus]);

  const toggleMute = () => {
    setIsSpeaking(!isSpeaking);
  };

  return (
    <>
      {/* Premium Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl hover:shadow-[#ff5500]/50 transition-all duration-500 z-50 group hover:scale-110 border-2 border-[#ff5500] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #ff8040 0%, #ff5500 50%, #ff3300 100%)',
          boxShadow: '0 16px 32px rgba(255, 85, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)',
        }}
      >
        <Image
          src="/assistent.webp"
          alt="NextMove AI Assistent"
          width={64}
          height={64}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </button>

      {/* Premium Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-28 right-8 w-[420px] h-[600px] rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden border border-white/20"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,20,0.98) 50%, rgba(0,0,0,0.95) 100%)',
            backdropFilter: 'blur(40px)',
            boxShadow: '0 32px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Premium Header */}
          <div 
            className="p-4 flex items-center justify-between relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #ff8040 0%, #ff5500 50%, #ff3300 100%)',
            }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full -translate-x-12 -translate-y-12 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-full translate-x-10 translate-y-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30 shadow-xl overflow-hidden">
                <Image
                  src="/assistent.webp"
                  alt="NextMove AI Assistent"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-lg">NextMove AI</h3>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full shadow-lg ${
                      connectionStatus === 'connected' ? 'bg-green-400 shadow-green-400/50' : 
                      connectionStatus === 'connecting' ? 'bg-yellow-400 animate-pulse shadow-yellow-400/50' : 
                      'bg-red-400 shadow-red-400/50'
                    }`} />
                    <span className="opacity-90 font-medium capitalize">{connectionStatus}</span>
                  </div>
                  {isSpeaking && (
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full backdrop-blur-xl">
                      <Sparkles className="w-3 h-3" />
                      <span className="text-xs font-medium">Spricht...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 relative z-10">
              <button
                onClick={toggleMute}
                className="text-white/80 hover:text-white transition-all duration-300 p-2 rounded-xl hover:bg-white/10 backdrop-blur-xl"
              >
                {isSpeaking ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-all duration-300 p-2 rounded-xl hover:bg-white/10 backdrop-blur-xl"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Premium Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                message={message}
              />
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-3 mb-4 animate-fade-in-up">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 shadow-lg shadow-black/20">
                  <Image
                    src="/assistent.webp"
                    alt="NextMove AI Assistent"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl px-4 py-3 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl shadow-xl shadow-black/20 border border-white/20">
                  <MessageLoading />
                </div>
              </div>
            )}

            {/* Integrierte Voice Visualizer im Chat */}
            {(isListening || connectionStatus === 'connecting') && (
              <div className="flex justify-center mb-4 animate-fade-in-up">
                <div className="rounded-2xl px-6 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-xl shadow-black/20 border border-white/20 flex flex-col items-center gap-3">
                  <VoiceVisualizer isActive={isListening} />
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="text-white/70 font-mono text-xs bg-white/10 px-2 py-1 rounded backdrop-blur-xl border border-white/20">
                      {formatTime(recordingTime)}
                    </div>
                    <span className="text-xs">
                      {isListening ? 'Hört zu...' : 'Verbindet...'}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Kompakte Voice Control Bar */}
          <div className="p-3 border-t border-white/10 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              {/* Status Text */}
              <div className="flex-1 text-center">
                <p className="text-white/90 font-medium text-sm">
                  {isListening 
                    ? 'Sprechen Sie jetzt...' 
                    : isLoading 
                    ? 'Verarbeitet...' 
                    : connectionStatus === 'connecting'
                    ? 'Verbindet...'
                    : 'Klicken Sie zum Sprechen'
                  }
                </p>
              </div>
              
              {/* Voice Button */}
              <button
                onClick={isListening ? handleStopListening : handleStartListening}
                disabled={isLoading || connectionStatus === 'connecting'}
                className={`w-14 h-14 rounded-full transition-all duration-500 shadow-xl relative group ${
                  isListening
                    ? 'bg-gradient-to-br from-red-500 to-red-600 shadow-red-500/50 animate-pulse scale-110'
                    : 'bg-gradient-to-br from-[#ff8040] via-[#ff5500] to-[#ff3300] shadow-[#ff5500]/50 hover:scale-110'
                } disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white/30`}
                style={{
                  boxShadow: isListening 
                    ? '0 12px 24px rgba(239, 68, 68, 0.6), 0 0 0 3px rgba(239, 68, 68, 0.2)'
                    : '0 12px 24px rgba(255, 85, 0, 0.6), 0 0 0 3px rgba(255, 85, 0, 0.2)'
                }}
              >
                <div className="relative">
                  {isListening ? (
                    <MicOff className="w-5 h-5 text-white mx-auto drop-shadow-lg" />
                  ) : (
                    <Mic className="w-5 h-5 text-white mx-auto drop-shadow-lg" />
                  )}
                  {/* Pulse Ring */}
                  {isListening && (
                    <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"></div>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ff8040, #ff5500);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ff5500, #ff3300);
        }
      `}</style>
    </>
  );
} 