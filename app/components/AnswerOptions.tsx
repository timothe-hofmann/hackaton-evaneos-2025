'use client';
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

interface Answer {
  id: string;
  label: string;
  text: string;
}

interface AnswerOptionsProps {
  answers: Answer[];
  selectedAnswer: string;
  onAnswerChange: (answerId: string) => void;
}

export default function AnswerOptions({
  answers,
  selectedAnswer,
  onAnswerChange,
}: AnswerOptionsProps) {
  return (
    <Box sx={{ px: 2, mb: 4 }}>
      <FormControl component="fieldset" sx={{ width: '100%' }}>
        <RadioGroup
          value={selectedAnswer}
          onChange={(e) => onAnswerChange(e.target.value)}
        >
          {answers.map((answer) => (
            <FormControlLabel
              key={answer.id}
              value={answer.id}
              control={
                <Radio
                  sx={{
                    color: 'text.secondary',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }}
                />
              }
              label={
                <Box>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ fontWeight: 500, mr: 1 }}
                  >
                    {answer.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ color: 'text.primary' }}
                  >
                    {answer.text}
                  </Typography>
                </Box>
              }
              sx={{
                border: selectedAnswer === answer.id 
                  ? '2px solid #2196F3' 
                  : '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: selectedAnswer === answer.id 
                  ? 'rgba(33, 150, 243, 0.04)' 
                  : 'transparent',
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}