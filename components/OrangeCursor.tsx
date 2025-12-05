"use client";
import React, { useEffect } from "react";

const OrangeCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById("orange-cursor");
    if (!cursor) return;
    let mouseX = 0, mouseY = 0;
    let raf: number;
    function animate() {
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX - 16}px,${mouseY - 16}px,0)`;
      }
      raf = window.requestAnimationFrame(animate);
    }
    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    function onTouchStart() {
      if (cursor) {
        cursor.style.display = "none";
      }
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchstart", onTouchStart, { once: true });
    animate();
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  return (
    <div
      id="orange-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "32px",
        height: "32px",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ display: "block" }}>
        <circle cx="16" cy="16" r="10" fill="#ff5500" fillOpacity="0.18" />
        <circle cx="16" cy="16" r="5" fill="#ff5500" fillOpacity="0.7" />
      </svg>
    </div>
  );
};

export default OrangeCursor; 