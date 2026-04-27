/**
 * WaterEffects — Animated bubbles and water particles for the hero section.
 * Pure CSS animations for performance. No JS timers or RAF loops.
 */

const bubbles = [
  { size: 8,  left: 5,   delay: 0,    duration: 12 },
  { size: 12, left: 15,  delay: 2,    duration: 15 },
  { size: 6,  left: 25,  delay: 4,    duration: 10 },
  { size: 14, left: 35,  delay: 1,    duration: 18 },
  { size: 10, left: 45,  delay: 3,    duration: 14 },
  { size: 7,  left: 55,  delay: 5,    duration: 11 },
  { size: 16, left: 65,  delay: 2.5,  duration: 16 },
  { size: 9,  left: 75,  delay: 0.5,  duration: 13 },
  { size: 11, left: 85,  delay: 3.5,  duration: 17 },
  { size: 5,  left: 92,  delay: 1.5,  duration: 9  },
  { size: 13, left: 10,  delay: 6,    duration: 14 },
  { size: 8,  left: 50,  delay: 7,    duration: 12 },
  { size: 6,  left: 70,  delay: 4.5,  duration: 10 },
  { size: 10, left: 30,  delay: 5.5,  duration: 15 },
  { size: 7,  left: 80,  delay: 8,    duration: 11 },
]

const droplets = [
  { left: 12, delay: 0,   duration: 6 },
  { left: 28, delay: 2,   duration: 5 },
  { left: 42, delay: 1,   duration: 7 },
  { left: 58, delay: 3,   duration: 5.5 },
  { left: 73, delay: 1.5, duration: 6.5 },
  { left: 88, delay: 4,   duration: 5 },
]

export default function WaterEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Floating bubbles */}
      {bubbles.map((b, i) => (
        <div
          key={`bubble-${i}`}
          className="water-bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}

      {/* Falling water droplets */}
      {droplets.map((d, i) => (
        <div
          key={`drop-${i}`}
          className="water-droplet"
          style={{
            left: `${d.left}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}

      {/* Animated water surface shimmer */}
      <div className="water-surface" />
    </div>
  )
}
