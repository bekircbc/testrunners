"use client";

import { Card, CardMedia, Typography, IconButton, Box } from '@mui/material';
import members from '../data/members';
import { useState, useEffect } from 'react';

export default function MemberCards() {
  const [current, setCurrent] = useState(0);

  // Responsive: 1 card (xs), 2 card (sm), 3 card (md+)
  let cardsToShow = 1;
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    if (width >= 900) cardsToShow = 3;
    else if (width >= 600) cardsToShow = 2;
  }

  // Slider logic
  const maxIndex = Math.max(0, members.length - cardsToShow);
  const handlePrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  // Otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  // Noktalar
  const dots = [];
  for (let i = 0; i <= maxIndex; i++) {
    dots.push(
      <span
        key={i}
        style={{
          display: 'inline-block',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: i === current ? '#1976d2' : '#ccc',
          margin: '0 4px',
        }}
      />
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', position: 'relative', padding: '32px 0' }}>
      {/* Slider */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
        {members.slice(current, current + cardsToShow).map((member) => (
          <Card
            key={member.id}
            sx={{
              minWidth: 220,
              maxWidth: 220,
              height: 220,
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 3,
              transition: 'transform 0.3s',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.08)',
              },
              '&:hover .member-card-overlay': {
                opacity: 1,
                pointerEvents: 'auto',
              },
            }}
          >
            <CardMedia
              component="img"
              image={member.image}
              alt={member.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 3,
                transition: 'transform 0.3s',
              }}
            />
            {/* Overlay sadece yazı, background yok */}
            <Box
              className="member-card-overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                pb: '5px',
                opacity: 0,
                color: '#fff',
                transition: 'opacity 0.3s',
                pointerEvents: 'none',
                zIndex: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>{member.name}</Typography>
              <Typography variant="body2" sx={{ mt: 0.5, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>{member.role}</Typography>
            </Box>
          </Card>
        ))}
      </div>
      {/* Butonlar ve noktalar slider dışında */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 24 }}>
        <IconButton onClick={handlePrev} disabled={current === 0} aria-label="Zurück">
          <span style={{ fontSize: 24 }}>&lt;</span>
        </IconButton>
        <div>{dots}</div>
        <IconButton onClick={handleNext} disabled={current === maxIndex} aria-label="Weiter">
          <span style={{ fontSize: 24 }}>&gt;</span>
        </IconButton>
      </div>
    </div>
  );
}
