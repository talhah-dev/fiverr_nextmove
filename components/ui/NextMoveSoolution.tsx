import { GradientCard } from './gradient-card';
import { BorderBeam } from './border-beam';

const features = [
    { 
        title: 'Next Move',
        description: 'Discover your next career move with personalized insights and expert advice.',
        icon: '🚀',
        color: 'bg-orange-500/20',
        borderColor: 'border-orange-500/20',
        gradient: 'from-orange-500/20 to-orange-600/20',
        shadow: 'shadow-orange-500/10',
        beamColorFrom: '#ff5500',
        beamColorTo: '#ff8040',
    },
    { 
        title: 'Career Path',
        description: 'Explore different career paths and identify your ideal role.',
        icon: '📈',
        color: 'bg-blue-500/20',
        borderColor: 'border-blue-500/20',
        gradient: 'from-blue-500/20 to-blue-600/20',
        shadow: 'shadow-blue-500/10',
        beamColorFrom: '#4f46e5',
        beamColorTo: '#6366f1',
    },
    { 
        title: 'Skills',
        description: 'Enhance your skills and stay ahead in your field.',
        icon: '⚙️',
        color: 'bg-purple-500/20',
        borderColor: 'border-purple-500/20',
        gradient: 'from-purple-500/20 to-purple-600/20',
        shadow: 'shadow-purple-500/10',
        beamColorFrom: '#9333ea',
        beamColorTo: '#d946ef',
    },
];

export const NextMoveSolution = () => {
    return (
        <div className="relative rounded-2xl border border-orange-500/20 bg-gray-900/50 p-4 md:p-6 shadow-2xl shadow-orange-500/10">
            <BorderBeam colorFrom="#ff5500" colorTo="#ff8040" />
            <div className="aspect-video relative rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t z-1 from-black/50 via-transparent to-black/20"></div>
                <img 
                    src="https://images.unsplash.com/photo-1517486803460-639689795187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Next Move" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Next Move</h3>
                <p className="text-lg text-gray-300 mb-4">
                    Discover your next career move with personalized insights and expert advice.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Learn More
                </button>
            </div>
        </div>
    );
}; 