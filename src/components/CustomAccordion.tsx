"use client";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CustomAccordion() {
  return (
    <Accordion sx={{ maxWidth: 400, mx: 'auto', my: 4 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion Başlığı</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Accordion içeriği buraya gelecek.</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
