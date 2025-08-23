import members from '../../../data/members';
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

export default function MemberDetail({ params }: { params: { slug: string } }) {
  const member = members.find(m => slugify(m.name) === params.slug);
  if (!member) return notFound();

  return (
    <main>
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 6 }}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={member.image}
            alt={member.name}
          />
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>{member.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">{member.role}</Typography>
            <Typography variant="body2" sx={{ mt: 2, color: '#555', fontSize: 15 }}>
              {`${member.name} ist ein ${member.role}. ${'Lorem ipsum '.repeat(20)}`.slice(0, 200)}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </main>
  );
}
