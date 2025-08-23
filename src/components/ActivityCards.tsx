"use client";
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import activities from '../data/activities';

export default function ActivityCards() {
  return (
    <Grid container spacing={3} columns={12} sx={{ mt: 2 }}>
      {activities.map((activity) => (
        <Grid key={activity.id} sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={activity.image}
              alt={activity.title}
            />
            <CardContent>
              <Typography variant="h6">{activity.title}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{activity.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
