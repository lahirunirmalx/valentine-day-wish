import { ImageResponse } from 'next/og';

export const alt = "Happy Valentine's Day 💕";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 50%, #f43f5e 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative hearts */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            fontSize: 80,
            opacity: 0.3,
          }}
        >
          ❤️
        </div>
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            fontSize: 60,
            opacity: 0.3,
          }}
        >
          💕
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '20%',
            fontSize: 70,
            opacity: 0.3,
          }}
        >
          💖
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            fontSize: 65,
            opacity: 0.3,
          }}
        >
          🌹
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            fontSize: 55,
            opacity: 0.3,
          }}
        >
          😘
        </div>
        <div
          style={{
            position: 'absolute',
            top: '60%',
            right: '5%',
            fontSize: 50,
            opacity: 0.3,
          }}
        >
          💋
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 40,
            padding: '60px 80px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 120,
              marginBottom: 30,
            }}
          >
            💕
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 50%, #f43f5e 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            Happy Valentine&apos;s Day
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#666',
              textAlign: 'center',
              maxWidth: 800,
            }}
          >
            A special Valentine&apos;s Day wish for my beautiful partner
          </div>
          <div
            style={{
              fontSize: 40,
              marginTop: 30,
            }}
          >
            ❤️ 💖 💕 🌹 💝
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}