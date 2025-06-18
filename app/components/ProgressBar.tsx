'use client';
import { Box, LinearProgress } from '@mui/material';

interface ProgressBarProps {
  progress: number;
  total: number;
}

export default function ProgressBar({ progress, total }: ProgressBarProps) {
  const progressPercentage = (progress / total) * 100;
  
  return (
    <Box sx={{ px: 2, pb: 3 }}>
      <LinearProgress
        variant="determinate"
        value={progressPercentage}
        sx={{
          backgroundColor: 'rgba(33, 150, 243, 0.2)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'primary.main',
          },
        }}
      />
    </Box>
  );
}