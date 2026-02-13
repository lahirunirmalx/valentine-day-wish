'use client';

import { useEffect, useState } from 'react';

const valentineWishes = [
  "You are my sunshine, my only sunshine. You make me happy when skies are gray.",
  "Every moment with you is a gift. Happy Valentine's Day, my love!",
  "You stole my heart, and I never want it back. I love you more than words can say.",
  "In your eyes, I found my home. In your heart, I found my love. Happy Valentine's Day!",
  "You are the reason I believe in love. Thank you for being you.",
  "My heart belongs to you, today and forever. Happy Valentine's Day, beautiful!",
  "You make every day feel like Valentine's Day. I'm so lucky to have you.",
  "With you, every day is a celebration of love. Happy Valentine's Day, my darling!",
  "You are my today and all of my tomorrows. I love you endlessly.",
  "Being with you is my favorite thing. Happy Valentine's Day, my sweetheart!",
  "You are my heart, my soul, my everything. Happy Valentine's Day!",
  "I fall in love with you more every single day. Happy Valentine's Day, my love!",
  "You are the most beautiful person I know, inside and out. Happy Valentine's Day!",
  "My love for you grows stronger with each passing day. Happy Valentine's Day!",
  "You are my dream come true. Happy Valentine's Day, my beautiful partner!",
];

interface HeartPosition {
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

interface FloatingElement {
  id: number;
  emoji: string;
  left: number;
  startDelay: number;
  duration: number;
  size: number;
}

function playChimeSound() {
  if (typeof window === 'undefined') return;
  
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 523.25; // C5 note
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);

    setTimeout(() => {
      const osc2 = audioContext.createOscillator();
      const gain2 = audioContext.createGain();
      osc2.connect(gain2);
      gain2.connect(audioContext.destination);
      osc2.frequency.value = 659.25; // E5 note
      osc2.type = 'sine';
      gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      osc2.start(audioContext.currentTime + 0.2);
      osc2.stop(audioContext.currentTime + 0.7);
    }, 100);

    setTimeout(() => {
      const osc3 = audioContext.createOscillator();
      const gain3 = audioContext.createGain();
      osc3.connect(gain3);
      gain3.connect(audioContext.destination);
      osc3.frequency.value = 783.99; // G5 note
      osc3.type = 'sine';
      gain3.gain.setValueAtTime(0.3, audioContext.currentTime);
      gain3.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      osc3.start(audioContext.currentTime + 0.4);
      osc3.stop(audioContext.currentTime + 0.9);
    }, 200);
  } catch (error) {
    // Silently fail if audio context is not available
  }
}

function playHeartBeatSound() {
  if (typeof window === 'undefined') return;
  
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 200;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);

    setTimeout(() => {
      const osc2 = audioContext.createOscillator();
      const gain2 = audioContext.createGain();
      osc2.connect(gain2);
      gain2.connect(audioContext.destination);
      osc2.frequency.value = 200;
      osc2.type = 'sine';
      gain2.gain.setValueAtTime(0.2, audioContext.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      osc2.start(audioContext.currentTime + 0.15);
      osc2.stop(audioContext.currentTime + 0.25);
    }, 50);
  } catch (error) {
    // Silently fail if audio context is not available
  }
}

const floatingEmojis = ['❤️', '💖', '💕', '💗', '💓', '💞', '💝', '😘', '💋', '🌹', '🌷', '🌺', '🌸', '💐'];

export default function Home() {
  const [wish, setWish] = useState('');
  const [hearts, setHearts] = useState<HeartPosition[]>([]);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [soundPlayed, setSoundPlayed] = useState(false);

  useEffect(() => {
    const randomWish = valentineWishes[Math.floor(Math.random() * valentineWishes.length)];
    setWish(randomWish);

    const heartPositions: HeartPosition[] = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 2,
    }));
    setHearts(heartPositions);

    const floating: FloatingElement[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      emoji: floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)],
      left: Math.random() * 100,
      startDelay: Math.random() * 5,
      duration: 8 + Math.random() * 7,
      size: 20 + Math.random() * 30,
    }));
    setFloatingElements(floating);

    if (!soundPlayed) {
      playChimeSound();
      setTimeout(() => playHeartBeatSound(), 800);
      setSoundPlayed(true);
    }
  }, [soundPlayed]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-500 via-pink-500 to-rose-400">
      {/* Animated hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((heart, i) => (
          <div
            key={i}
            className="absolute text-white/20 text-4xl md:text-6xl animate-pulse"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.animationDelay}s`,
              animationDuration: `${heart.animationDuration}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Floating hearts, kisses, and roses */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute floating-animation"
            style={{
              left: `${element.left}%`,
              bottom: '-50px',
              fontSize: `${element.size}px`,
              animationDelay: `${element.startDelay}s`,
              animationDuration: `${element.duration}s`,
              opacity: 0.7,
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      {/* Main content */}
      <main className="relative z-10 w-full max-w-4xl px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-center">
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 mb-4">
              Happy Valentine's Day
            </h1>
            <div className="text-3xl sm:text-4xl md:text-5xl mb-4">💕</div>
          </div>
          
          {wish && (
            <div className="mt-8 md:mt-12">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-medium px-2">
                {wish}
              </p>
            </div>
          )}

          <div className="mt-8 md:mt-12 text-2xl sm:text-3xl md:text-4xl">
            ❤️ 💖 💕 🌹 💝
          </div>
        </div>
      </main>
    </div>
  );
}
