"use client";
import { useState } from "react";
import { Box, Typography, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import activities from "../../data/activities";
import Image from "next/image";

export default function GaleryPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (activity) => {
    setSelected(activity);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 6, textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
        Galery
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
          gap: 3,
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {activities.map((activity) => (
          <Box
            key={activity.id}
            sx={{
              position: "relative",
              width: 240,
              height: 180,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 2,
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.04)" },
            }}
            onClick={() => handleOpen(activity)}
          >
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 100vw, 240px"
            />
          </Box>
        ))}
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Box sx={{ position: "relative", p: 2, textAlign: "center" }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}
            aria-label="Kapat"
          >
            <CloseIcon />
          </IconButton>
          {selected && open && (
            <>
              <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", mb: 2 }}>
                <Image
                  src={selected?.image}
                  alt={selected?.title}
                  width={600}
                  height={400}
                  style={{ objectFit: "contain", borderRadius: 8 }}
                />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                {selected?.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
                {selected?.description}
              </Typography>
            </>
          )}
        </Box>
      </Dialog>
    </Box>
  );
}