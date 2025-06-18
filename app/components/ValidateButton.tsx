'use client';

import { Button, Box } from "@mui/material";

interface ValidateButtonProps {
  onValidate: () => void;
  disabled?: boolean;
}

export default function ValidateButton({ 
  onValidate, 
  disabled = false 
}: ValidateButtonProps) {
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
        onClick={onValidate}
        disabled={disabled}
      >
        Validate
      </Button>
    </Box>
  );
}