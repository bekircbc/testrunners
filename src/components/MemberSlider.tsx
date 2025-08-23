"use client";
import { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Slider from '@mui/material/Slider';
import members from '../data/members';
import { useRouter } from 'next/navigation';

export default function MemberSlider() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % members.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    router.push(`/members/${members[index].id}`);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', my: 4 }}>
      <Card onClick={handleClick} sx={{ cursor: 'pointer' }}>
        <CardContent>
          <Typography variant="h6">{members[index].name}</Typography>
          <Typography variant="body2">{members[index].role}</Typography>
        </CardContent>
      </Card>
      <Slider
        value={index}
        min={0}
        max={members.length - 1}
        onChange={(_, value) => setIndex(Number(value))}
        sx={{ mt: 2 }}
      />
    </Box>
  );
}
