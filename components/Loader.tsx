"use client";

import React, { useEffect, useState } from "react";

export default function Loader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide after 1 second (1000ms)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="bg-black h-screen w-full fixed top-0 left-0 z-[200] flex items-center justify-center">
            <div className="flex w-full items-center justify-center flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-[#ff5500] animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-[#ff5500] animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-[#ff5500] animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </div>
    );
}
