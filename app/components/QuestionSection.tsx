'use client';
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

interface QuestionSectionProps {
  question: string;
  hasAudio?: boolean;
  onPlayAudio?: () => void;
}

export default function QuestionSection({ 
  question, 
  hasAudio = true, 
  onPlayAudio 
}: QuestionSectionProps) {
  return (
    <Box sx={{ px: 2, mb: 3 }}>
      <Card
        elevation={0}
        sx={{
          backgroundColor: 'secondary.main',
          color: 'white',
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 2,
            }}
          >
            {hasAudio && (
              <IconButton
                onClick={onPlayAudio}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                <VolumeUpIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="h2">
              {question}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}