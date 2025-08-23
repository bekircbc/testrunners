import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
  py: 2,
  pb: '15px',
  textAlign: 'center',
        bgcolor: '#f5f5f5',
        color: '#222',
        boxShadow: 4,
        borderTop: '1px solid #e0e0e0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <Typography variant="body2" sx={{ color: '#222', fontWeight: 500 }}>
        &copy; {new Date().getFullYear()} Testrunners &ndash; Alle Rechte vorbehalten.
      </Typography>
    </Box>
  );
}
