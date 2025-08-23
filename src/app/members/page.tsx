
import Link from 'next/link';
import members from '../../data/members';

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
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

function SectionDivider({ label }: { label: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
      <Box sx={{ flex: 1, height: 2, bgcolor: 'primary.main', opacity: 0.2, borderRadius: 2 }} />
      <Typography sx={{ mx: 2, fontWeight: 600, color: 'primary.main', letterSpacing: 1 }}>{label}</Typography>
      <Box sx={{ flex: 1, height: 2, bgcolor: 'primary.main', opacity: 0.2, borderRadius: 2 }} />
    </Box>
  );
}

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
        maxWidth: 600,
        mx: 'auto',
        justifyItems: 'center',
        alignItems: 'center',
        minHeight: '60vh',
      }}
    >
      {items.map(renderCard)}
    </Box>
  );
}

export default function MembersPage() {
  return (
    <main>
      <Box sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
        <Typography variant="h3" sx={{ color: '#222', fontWeight: 700, letterSpacing: 1 }}>
          Über uns
        </Typography>
      </Box>
      <ResponsiveGrid
        items={members}
        desktop={1}
        tablet={1}
        mobile={1}
        renderCard={(member: any) => {
          const slug = slugify(member.name);
          const fullDesc = `${member.name} ist ein ${member.role}. ${'Lorem ipsum '.repeat(20)}`.slice(0, 200);
          const shortDesc = fullDesc.length > 100 ? fullDesc.slice(0, fullDesc.lastIndexOf(' ', 100)) + '...' : fullDesc;
          return (
            <Link key={member.id} href={`/members/${slug}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ minWidth: 320, maxWidth: 600, height: 160, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', cursor: 'pointer', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 6 }, p: 2 }}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ width: 120, height: 120, objectFit: 'cover', borderRadius: '50%', mr: 3 }}
                />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', p: 0 }}>
                  <Typography variant="h6" sx={{ color: '#222', fontWeight: 700, mb: 0.5 }}>{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{member.role}</Typography>
                  <Typography variant="body2" sx={{ color: '#555', fontSize: 14 }}>{shortDesc}</Typography>
                </CardContent>
              </Card>
            </Link>
          );
        }}
      />
    </main>
  );
}
