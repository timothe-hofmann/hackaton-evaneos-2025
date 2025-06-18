'use client';

import { Box, Button, Typography } from '@mui/material';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
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
        Quiz démarré !
      </Typography>
      <Typography variant="body1">
        Vous pouvez commencer le quiz en appuyant sur le bouton ci-dessous.
      </Typography>
      <Button variant="contained" color="primary" onClick={onStart}>
        Commencer
      </Button>
    </Box>
  );
}
