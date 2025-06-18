'use client';
import { useState } from 'react';
import { Container, Box } from '@mui/material';
import QuizHeader from './components/QuizHeader';
import ProgressBar from './components/ProgressBar';
import QuestionSection from './components/QuestionSection';
import AnswerOptions from './components/AnswerOptions';
import ValidateButton from './components/ValidateButton';

const mockAnswers = [
  {
    id: 'a',
    label: 'Answer A',
    text: 'This is the first possible answer option for the question.'
  },
  {
    id: 'b',
    label: 'Answer B',
    text: 'This is the second possible answer option for the question.'
  },
  {
    id: 'c',
    label: 'Answer C',
    text: 'This is the third possible answer option for the question.'
  }
];

const mockQuestion = {
  text: "Which of the following is a fruit?",
  type: "audio",
  content: "https://8babe53e-cd1f-4e7e-a7be-583f2a598d3b.mdnplay.dev/shared-assets/audio/t-rex-roar.mp3"
};

export default function Home() {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [currentQuestion] = useState(1);
  const [totalQuestions] = useState(10);

  const handleClose = () => {
    console.log('Quiz closed');
  };

  const handleSkip = () => {
    console.log('Question skipped');
    setSelectedAnswer('');
  };

  const handlePlayAudio = () => {
    console.log('Playing audio');
  };

  const handleAnswerChange = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleValidate = () => {
    if (selectedAnswer) {
      console.log('Answer validated:', selectedAnswer);
      // Here you would typically move to the next question
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <QuizHeader onClose={handleClose} onSkip={handleSkip} />
      
      <ProgressBar progress={currentQuestion} total={totalQuestions} />
      
      <Container 
        maxWidth="sm" 
        sx={{ 
          flex: 1, 
          pb: 10, // Space for fixed button
          px: { xs: 0, sm: 2 },
        }}
      >
        <QuestionSection
          text={mockQuestion.text}
          type={mockQuestion.type as "audio" | "text"}
          content={mockQuestion.content}
        />
        
        <AnswerOptions
          answers={mockAnswers}
          selectedAnswer={selectedAnswer}
          onAnswerChange={handleAnswerChange}
        />
      </Container>

      <ValidateButton
        onValidate={handleValidate}
        disabled={!selectedAnswer}
      />
    </Box>
  );
}