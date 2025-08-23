"use client";
"use client";
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import activities from '../data/activities';

export default function ActivityHero() {
  const activity = activities[0]; // Örnek olarak ilk faaliyet
  return (
    <Box sx={{ mb: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image="/activity.jpg" // Placeholder görsel
          alt={activity.title}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>{activity.title}</Typography>
          <Typography variant="body1">{activity.description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
