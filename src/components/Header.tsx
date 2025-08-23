"use client";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Über uns', href: '/members' },
  { label: 'Events', href: '/events' },
  { label: 'Kontakt', href: '/contact' },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <AppBar position="static" sx={{ background: '#f5f5f5', color: '#222' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', height: 40 }}>
          <Link href="/" style={{ display: 'block' }}>
            <Image src="/logo.svg" alt="Testrunners Logo" height={40} width={120} style={{ display: 'block', cursor: 'pointer' }} priority />
          </Link>
        </Box>
        {!isMobile ? (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                href={link.href}
                sx={{
                  background: pathname === link.href ? '#1976d2' : 'transparent',
                  color: pathname === link.href ? '#fff' : '#222',
                  '&:hover': {
                    background: pathname === link.href ? '#1565c0' : '#e3f2fd',
                    color: pathname === link.href ? '#fff' : '#1976d2',
                  },
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  fontWeight: 600,
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        ) : (
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      {/* Mobilde dialog ile linkler ve X kapatma butonu */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2, pb: 2, position: 'relative' }}>
          <Link href="/" style={{ display: 'block' }}>
            <Image src="/logo.svg" alt="Testrunners Logo" height={40} width={120} style={{ marginBottom: 16, cursor: 'pointer' }} priority />
          </Link>
          <IconButton onClick={() => setOpen(false)} sx={{ position: 'absolute', right: 16, top: 8 }}>
            <CloseIcon />
          </IconButton>
          <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding sx={{ width: '100%', justifyContent: 'center' }}>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  selected={pathname === link.href}
                  sx={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    background: pathname === link.href ? '#1976d2' : 'transparent',
                    color: pathname === link.href ? '#fff' : '#222',
                    '&:hover': {
                      background: pathname === link.href ? '#1565c0' : '#e3f2fd',
                      color: pathname === link.href ? '#fff' : '#1976d2',
                    },
                    borderRadius: 2,
                    fontWeight: 600,
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  <ListItemText primary={link.label} sx={{ textAlign: 'center' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>
    </AppBar>
  );
}
