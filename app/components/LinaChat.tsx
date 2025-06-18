"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import QuizHeader from "./QuizHeader";
import ProgressBar from "./ProgressBar";

interface LinaChatProps {
  currentQuestionIndex: number;
  questions: any[];
  onClose: () => void;
  onSkip: () => void;
  onNextClicked: () => void;
}

export default function LinaChat({
  currentQuestionIndex,
  questions,
  onClose,
  onSkip,
  onNextClicked,
}: LinaChatProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <QuizHeader onClose={onClose} onSkip={onSkip} isValidated={true} />

      <Container
        maxWidth="sm"
        sx={{
          flex: 1,
          pb: 10,
          px: { xs: 0, sm: 2 },
        }}
      >
        <Typography>LinaChat</Typography>
      </Container>

      <ProgressBar
        progress={currentQuestionIndex + 1}
        total={questions.length}
      />

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
          onClick={onNextClicked}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
