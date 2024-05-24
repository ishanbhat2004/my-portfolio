const Stars = () => {
    const stars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100),
      animationDelay: Math.floor(Math.random() * 3000),
      animationDuration: Math.floor(Math.random() * 3000) + 2000,
    }));
  
    return (
      <div className="absolute inset-0 overflow-hidden">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              width: 2,
              height: 2,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationName: 'twinkle',
              animationDelay: `${star.animationDelay}ms`,
              animationDuration: `${star.animationDuration}ms`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
            }}
          />
        ))}
        <style jsx global>{`
          @keyframes twinkle {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}</style>
      </div>
    );
  };

export default Stars;