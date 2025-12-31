export function EyeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* SVG Pattern for Eye Theme */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Iris Pattern */}
          <pattern id="irisPattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            {/* Outer eye circle */}
            <circle cx="200" cy="200" r="80" fill="none" stroke="#92400e" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="200" cy="200" r="60" fill="none" stroke="#b45309" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="200" cy="200" r="40" fill="none" stroke="#d97706" strokeWidth="0.5" opacity="0.2"/>
            {/* Iris lines */}
            <g opacity="0.15">
              <line x1="200" y1="120" x2="200" y2="160" stroke="#92400e" strokeWidth="0.5"/>
              <line x1="200" y1="240" x2="200" y2="280" stroke="#92400e" strokeWidth="0.5"/>
              <line x1="120" y1="200" x2="160" y2="200" stroke="#92400e" strokeWidth="0.5"/>
              <line x1="240" y1="200" x2="280" y2="200" stroke="#92400e" strokeWidth="0.5"/>
              <line x1="156" y1="156" x2="176" y2="176" stroke="#92400e" strokeWidth="0.5"/>
              <line x1="224" y1="224" x2="244" y2="244" stroke="#92400e" strokeWidth="0.5"/>
              <line x1="244" y1="156" x2="224" y2="176" stroke="#92400e" strokeWidth="0.5"/>
              <line x1="176" y1="224" x2="156" y2="244" stroke="#92400e" strokeWidth="0.5"/>
            </g>
            {/* Pupil */}
            <circle cx="200" cy="200" r="20" fill="#78350f" opacity="0.1"/>
            {/* Highlight */}
            <circle cx="210" cy="190" r="8" fill="#fef3c7" opacity="0.3"/>
          </pattern>

          {/* Retina Pattern */}
          <pattern id="retinaPattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
            <path d="M 150 50 Q 100 150 150 250" fill="none" stroke="#d97706" strokeWidth="0.3" opacity="0.2"/>
            <path d="M 150 50 Q 200 150 150 250" fill="none" stroke="#d97706" strokeWidth="0.3" opacity="0.2"/>
            <path d="M 50 150 Q 150 100 250 150" fill="none" stroke="#d97706" strokeWidth="0.3" opacity="0.2"/>
            <path d="M 50 150 Q 150 200 250 150" fill="none" stroke="#d97706" strokeWidth="0.3" opacity="0.2"/>
            <circle cx="150" cy="150" r="3" fill="#b45309" opacity="0.3"/>
          </pattern>

          {/* Eye Shape Pattern */}
          <pattern id="eyeShapePattern" x="0" y="0" width="600" height="400" patternUnits="userSpaceOnUse">
            {/* Eye outline */}
            <ellipse cx="300" cy="200" rx="150" ry="80" fill="none" stroke="#92400e" strokeWidth="0.5" opacity="0.15"/>
            {/* Upper eyelid curve */}
            <path d="M 150 200 Q 300 120 450 200" fill="none" stroke="#92400e" strokeWidth="0.5" opacity="0.15"/>
            {/* Lower eyelid curve */}
            <path d="M 150 200 Q 300 280 450 200" fill="none" stroke="#92400e" strokeWidth="0.5" opacity="0.15"/>
            {/* Iris */}
            <circle cx="300" cy="200" r="50" fill="none" stroke="#b45309" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="300" cy="200" r="35" fill="none" stroke="#d97706" strokeWidth="0.5" opacity="0.25"/>
            {/* Pupil */}
            <circle cx="300" cy="200" r="20" fill="#78350f" opacity="0.08"/>
            {/* Highlight */}
            <circle cx="310" cy="190" r="10" fill="#fef3c7" opacity="0.2"/>
          </pattern>

          {/* Gradient overlay */}
          <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#fcd34d" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05"/>
          </radialGradient>
        </defs>

        {/* Apply patterns */}
        <rect width="100%" height="100%" fill="url(#eyeShapePattern)"/>
        <rect width="100%" height="100%" fill="url(#irisPattern)"/>
        <rect width="100%" height="100%" fill="url(#retinaPattern)"/>
        
        {/* Overlay gradient circles for depth */}
        <circle cx="20%" cy="30%" r="300" fill="url(#eyeGradient)"/>
        <circle cx="80%" cy="70%" r="350" fill="url(#eyeGradient)"/>
        <circle cx="50%" cy="50%" r="400" fill="url(#eyeGradient)"/>
      </svg>

      {/* Additional floating decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-amber-300/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full border border-amber-400/15 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full border border-orange-300/20 animate-pulse" style={{ animationDuration: '5s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-28 h-28 rounded-full border border-amber-300/25 animate-pulse" style={{ animationDuration: '7s' }}></div>
    </div>
  );
}
