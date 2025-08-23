"use client";
import { useState } from 'react';
import { Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function CustomForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', my: 4 }}>
      <TextField label="Ad" name="name" value={form.name} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <Button type="submit" variant="contained" color="primary">Gönder</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form Gönderildi</DialogTitle>
        <DialogContent>
          Bilgileriniz başarıyla gönderildi.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Kapat</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
