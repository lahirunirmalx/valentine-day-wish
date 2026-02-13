import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 50%, #f43f5e 100%)',
          borderRadius: '6px',
          fontSize: '24px',
        }}
      >
        ❤️
      </div>
    ),
    {
      ...size,
    }
  );
}