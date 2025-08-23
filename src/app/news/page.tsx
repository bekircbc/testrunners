import activities from '../../data/activities';
import Link from 'next/link';

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
import { Card, CardMedia, Typography, Box } from '@mui/material';

function ResponsiveGrid({ items, renderCard, desktop, tablet, mobile }: any) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: `repeat(${mobile}, 1fr)`,
          sm: `repeat(${tablet}, 1fr)`,
          md: `repeat(${desktop}, 1fr)`
        },
        gap: 3,
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
      }}
    >
      {items.map(renderCard)}
    </Box>
  );
}

export default function NewsPage() {
  return (
    <main>
      <Box sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
        <Typography variant="h3" sx={{ color: '#222', fontWeight: 700, letterSpacing: 1 }}>
          News
        </Typography>
      </Box>
      <ResponsiveGrid
        items={activities}
        desktop={3}
        tablet={2}
        mobile={1}
        renderCard={(activity: any) => {
          const slug = slugify(activity.title);
          return (
            <Link key={activity.id} href={`/news/${slug}`} style={{ textDecoration: 'none' }}>
              <Card sx={{
                minWidth: 260,
                maxWidth: 400,
                height: 220,
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.2s',
                p: 0,
                m: 0,
                boxSizing: 'border-box',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.05)',
                },
              }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={activity.image}
                  alt={activity.title}
                  sx={{ width: '100%', height: 220, objectFit: 'cover', m: 0, p: 0, borderRadius: 2 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 220,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.65) 100%)',
                    color: '#fff',
                    px: 2,
                    pb: 2,
                    gap: 0,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 22 }}>{activity.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 0, mb: 0 }}>{activity.description}</Typography>
                </Box>
              </Card>
            </Link>
          );
        }}
      />
    </main>
  );
}
