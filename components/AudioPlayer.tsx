// components/AudioPlayer.tsx
"use client"; // This must be a Client Component

import { useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted.current) {
        hasInteracted.current = true;
        // Try to play audio
        audioRef.current?.play().catch(e => console.log("Autoplay prevented:", e));
        
        // Remove event listeners after first interaction
        window.removeEventListener('scroll', handleUserInteraction);
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
      }
    };

    // Add event listeners for various types of user interactions
    window.addEventListener('scroll', handleUserInteraction, { passive: true });
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <audio 
      ref={audioRef} 
      src="/web_load_sound.mp3" 
      loop 
      preload="auto"
      style={{ display: 'none' }}
    />
  );
}