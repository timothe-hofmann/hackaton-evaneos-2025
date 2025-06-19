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
  validated?: boolean;
  correctAnswerId?: string;
}

export default function AnswerOptions({
  answers,
  selectedAnswer,
  onAnswerChange,
  validated = false,
  correctAnswerId = '',
}: AnswerOptionsProps) {
  return (
    <Box sx={{ px: 2, mb: 4 }}>
      <FormControl component="fieldset" sx={{ width: '100%' }}>
        <RadioGroup
          value={selectedAnswer}
          onChange={(e) => onAnswerChange(e.target.value)}
        >
          {answers.map((answer) => {
            let borderColor = '1px solid rgba(0, 0, 0, 0.12)';
            let backgroundColor = 'transparent';
            let isDisabled = false;
            
            if (validated) {
              if (answer.id === correctAnswerId) {
                borderColor = '2px solid #4caf50';
                backgroundColor = 'rgba(76, 175, 80, 0.08)';
              } else if (answer.id === selectedAnswer) {
                borderColor = '2px solid #f44336';
                backgroundColor = 'rgba(244, 67, 54, 0.08)';
              } else {
                borderColor = '1px solid rgba(0, 0, 0, 0.12)';
                backgroundColor = 'transparent';
                isDisabled = true;
              }
            } else if (selectedAnswer === answer.id) {
              borderColor = '2px solid #2196F3';
              backgroundColor = 'rgba(33, 150, 243, 0.04)';
            }
            
            return (
              <FormControlLabel
                key={answer.id}
                value={answer.id}
                disabled={isDisabled}
                control={
                  <Radio
                    sx={{
                      color: 'text.secondary',
                      '&.Mui-checked': {
                        color: !validated ? 'primary.main' : (answer.id === correctAnswerId ? '#4caf50' : '#f44336'),
                      },
                    }}
                    disabled={validated}
                  />
                }
                label={
                  <Box>
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{ fontWeight: 500, mr: 1, color: isDisabled ? 'text.secondary' : 'text.primary' }}
                    >
                      {answer.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{ color: isDisabled ? 'text.secondary' : 'text.primary' }}
                    >
                      {answer.text}
                    </Typography>
                  </Box>
                }
                sx={{
                  border: borderColor,
                  backgroundColor: backgroundColor,
                  borderRadius: 1,
                  mb: 1,
                  mx: 0,
                  width: '100%',
                  '& .MuiFormControlLabel-label': {
                    width: '100%',
                    py: 1,
                  },
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}