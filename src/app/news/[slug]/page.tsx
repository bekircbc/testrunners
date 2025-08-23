import activities from '../../../data/activities';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const activity = activities.find(a => slugify(a.title) === params.slug);
  if (!activity) return notFound();

  return (
    <main>
      <Box sx={{ maxWidth: 900, mx: 'auto', mt: 6 }}>
        <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2, minHeight: 280 }}>
          <CardMedia
            component="img"
            image={activity.image}
            alt={activity.title}
            sx={{ width: 280, height: 280, objectFit: 'cover', borderRadius: '16px', mr: 4 }}
          />
          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', p: 0, pt: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>{activity.title}</Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: 20 }}>{activity.description}</Typography>
            <Typography variant="body2" sx={{ color: '#555', fontSize: 17 }}>
              {/* Dummy detay metni */}
              Weitere Informationen zu {activity.title} ...
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </main>
  );
}
