"use client";
import { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Slider from '@mui/material/Slider';
import activities from '../data/activities';
import { useRouter } from 'next/navigation';

export default function ActivitySlider() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    router.push(`/activities/${activities[index].id}`);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', my: 4 }}>
      <Card onClick={handleClick} sx={{ cursor: 'pointer' }}>
        <CardContent>
          <Typography variant="h6">{activities[index].title}</Typography>
          <Typography variant="body2">{activities[index].description}</Typography>
        </CardContent>
      </Card>
      <Slider
        value={index}
        min={0}
        max={activities.length - 1}
        onChange={(_, value) => setIndex(Number(value))}
        sx={{ mt: 2 }}
      />
    </Box>
  );
}
