"use client";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import activities from '../data/activities';

export default function NewsSlider() {
  const [index, setIndex] = useState(0);
  const max = activities.length - 1;

  // Otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === max ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [max]);

  const goPrev = () => setIndex((prev) => (prev === 0 ? max : prev - 1));
  const goNext = () => setIndex((prev) => (prev === max ? 0 : prev + 1));

  const current = activities[index];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 700,
        height: 360,
        mx: 'auto',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: 3,
        background: '#222',
        mb: 2,
      }}
    >
      {/* Arka plan görseli */}
      <img
        src={current.image}
        alt={current.title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '360px',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.35,
        }}
      />
      {/* Sol buton */}
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
      {/* Sağ buton */}
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
      {/* Başlık ve açıklama orta alt kısımda */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 32,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#fff',
          textShadow: '0 2px 8px #222',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>{current.title}</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 500 }}>{current.description}</Typography>
        {/* Nokta şeklinde progressbar */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
          {activities.map((_, i) => (
            <Box key={i} sx={{ width: 12, height: 12, borderRadius: '50%', background: i === index ? '#1976d2' : '#fff', opacity: i === index ? 1 : 0.5, border: '1px solid #1976d2', transition: 'background 0.2s' }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
