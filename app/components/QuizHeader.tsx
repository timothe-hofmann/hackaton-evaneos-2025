'use client';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface QuizHeaderProps {
  onClose?: () => void;
  onSkip?: () => void;
  isValidated?: boolean;
}

export default function QuizHeader({ onClose, onSkip, isValidated }: QuizHeaderProps) {
  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0}
      sx={{ 
        backgroundColor: 'background.default',
        borderBottom: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <IconButton
          edge="start"
          onClick={onClose}
          aria-label="close"
          sx={{ 
            color: 'text.secondary',
            p: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        
        {!isValidated && (
          <Typography
          variant="body1"
          sx={{ 
            color: 'primary.main',
            fontWeight: 500,
            cursor: 'pointer',
          }}
          onClick={onSkip}
          >
            Skip
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
}