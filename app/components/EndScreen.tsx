'use client';
import { Box, Typography } from '@mui/material';

export default function EndScreen() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Quiz terminé !
      </Typography>
      <Typography variant="body1">Merci d&apos;avoir participé.</Typography>
    </Box>
  );
}
