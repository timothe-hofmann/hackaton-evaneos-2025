'use client';

import { Button, Box } from "@mui/material";

interface NextButtonProps {
  onNext: () => void;
}

export default function NextButton({ 
  onNext, 
}: NextButtonProps) {
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
        onClick={onNext}
      >
        Next question
      </Button>
    </Box>
  );
}