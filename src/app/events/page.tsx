"use client";
import activities from '../../data/activities';
import { useState, useEffect } from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const sliderActivities = activities.slice(0, 5);

export default function EventsPage() {
  const [index, setIndex] = useState(0);
  const max = sliderActivities.length - 1;

  // Otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === max ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [max]);

  const goPrev = () => setIndex((prev) => (prev === 0 ? max : prev - 1));
  const goNext = () => setIndex((prev) => (prev === max ? 0 : prev + 1));

  const current = sliderActivities[index];

  return (
    <main>
      <Box sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
        <Typography variant="h3" sx={{ color: '#222', fontWeight: 700, letterSpacing: 1 }}>
          Events
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 700, height: 360, mx: 'auto', borderRadius: 4, overflow: 'hidden', boxShadow: 3, background: '#222', mb: 2, mt: 4 }}>
        <Image
          src={current.image}
          alt={current.title}
          fill
          style={{ objectFit: 'cover', zIndex: 0, opacity: 0.35 }}
          sizes="(max-width: 700px) 100vw, 700px"
          priority
        />
        <IconButton
          onClick={goPrev}
          aria-label="Zurück"
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            background: 'transparent',
            borderRadius: '50%',
            width: 40,
            height: 40,
            boxShadow: 1,
            '&:hover': {
              background: '#eee',
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ color: '#666' }} />
        </IconButton>
        <IconButton
          onClick={goNext}
          aria-label="Weiter"
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            background: 'transparent',
            borderRadius: '50%',
            width: 40,
            height: 40,
            boxShadow: 1,
            '&:hover': {
              background: '#eee',
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ color: '#666' }} />
        </IconButton>
        <Box sx={{ position: 'absolute', left: 0, bottom: 0, width: '100%', p: 3, zIndex: 1, color: '#fff', background: 'rgba(0,0,0,0.3)' }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>{current.title}</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>{current.description}</Typography>
        </Box>
        {/* Noktalar */}
        <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1, zIndex: 2 }}>
          {sliderActivities.map((_, i) => (
            <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: i === index ? '#1976d2' : '#ccc', display: 'inline-block' }} />
          ))}
        </Box>
      </Box>
    </main>
  );
}
