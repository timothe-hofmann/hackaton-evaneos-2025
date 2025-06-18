'use client';

import { Button, Box } from "@mui/material";

interface ExplainButtonProps {
  onExplain: () => void;
}

export default function ExplainButton({ 
  onExplain, 
}: ExplainButtonProps) {
  return (
    <Box
      sx={{ 
        p: 2,
      }}
    >
      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        onClick={onExplain}
      >
        Explain response
      </Button>
    </Box>
  );
}