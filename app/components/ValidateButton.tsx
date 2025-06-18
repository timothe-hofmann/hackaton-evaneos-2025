'use client';
import { Button, Box } from '@mui/material';

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
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        backgroundColor: 'background.default',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={onValidate}
        disabled={disabled}
        sx={{
          py: 1.5,
          fontSize: '1.1rem',
          fontWeight: 500,
          boxShadow: '0px 3px 6px rgba(33, 150, 243, 0.2), 0px 6px 10px rgba(33, 150, 243, 0.14), 0px 1px 18px rgba(33, 150, 243, 0.12)',
        }}
      >
        Validate
      </Button>
    </Box>
  );
}