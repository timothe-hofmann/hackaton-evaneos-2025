"use client";
import { useState } from "react";
import { Container, Box } from "@mui/material";
import PhoneFrame from "./components/PhoneFrame";
import QuizHeader from "./components/QuizHeader";
import ProgressBar from "./components/ProgressBar";
import QuestionSection from "./components/QuestionSection";
import AnswerOptions from "./components/AnswerOptions";
import ValidateButton from "./components/ValidateButton";
import EndScreen from "./components/EndScreen";
import StartScreen from "./components/StartScreen";
import LinaChat from "./components/LinaChat";
import ExplainButton from "./components/ExplainButton";

// Quiz questions JSON
const questions = [
  {
    text: "Identify this animal sound",
    type: "audio",
    content:
      "https://8babe53e-cd1f-4e7e-a7be-583f2a598d3b.mdnplay.dev/shared-assets/audio/t-rex-roar.mp3",
    answers: [
      { id: "a", label: "A", text: "Lion" },
      { id: "b", label: "B", text: "Elephant" },
      { id: "c", label: "C", text: "Dog" },
    ],
    correctAnswerId: "a",
  },
  {
    text: "Quelle est la capitale de la France ?",
    type: "text",
    content: "",
    answers: [
      { id: "a", label: "A", text: "Marseille" },
      { id: "b", label: "B", text: "Paris" },
      { id: "c", label: "C", text: "Lyon" },
    ],
    correctAnswerId: "b",
  },
  {
    text: "Quelle couleur obtient-on en mélangeant du rouge et du bleu ?",
    type: "text",
    content: "",
    answers: [
      { id: "a", label: "A", text: "Violet" },
      { id: "b", label: "B", text: "Vert" },
      { id: "c", label: "C", text: "Orange" },
    ],
    correctAnswerId: "a",
  },
];

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [validated, setValidated] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [linaChatStarted, setLinaChatStarted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleClose = () => {
    setQuizStarted(false);
  };

  const handleStart = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setValidated(false);
    setQuizFinished(false);
  };

  const handleSkip = () => {
    setSelectedAnswer("");
    setValidated(false);
    handleNextQuestion();
  };

  const handleAnswerChange = (answerId: string) => {
    setSelectedAnswer(answerId);
    setValidated(false);
  };

  const handleValidate = () => {
    if (!selectedAnswer) return;
    setValidated(true);
  };

  const handleExplain = () => {
    setLinaChatStarted(true);
  };

  const handleNextQuestion = () => {
    setLinaChatStarted(false);
    if (currentQuestionIndex === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setValidated(false);
    }
  };

  if (!quizStarted) {
    return (
      <PhoneFrame>
        <StartScreen onStart={handleStart} />
      </PhoneFrame>
    );
  }

  if (quizFinished) {
    return (
      <PhoneFrame>
        <EndScreen />
      </PhoneFrame>
    );
  }

  if (linaChatStarted) {
    return (
      <PhoneFrame>
        <LinaChat
          currentQuestionIndex={currentQuestionIndex}
          questions={questions}
          onClose={handleClose}
          onSkip={handleSkip}
          onNextClicked={handleNextQuestion}
        />
      </PhoneFrame>
    );
  }

  return (
    <PhoneFrame>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <QuizHeader
          onClose={handleClose}
          onSkip={handleSkip}
          isValidated={validated}
        />

        <ProgressBar
          progress={currentQuestionIndex + 1}
          total={questions.length}
        />

        <Container
          maxWidth="sm"
          sx={{
            flex: 1,
            pb: 10,
            px: { xs: 0, sm: 2 },
          }}
        >
          <QuestionSection
            text={currentQuestion.text}
            type={currentQuestion.type as "audio" | "text"}
            content={currentQuestion.content}
          />

          <AnswerOptions
            answers={currentQuestion.answers}
            selectedAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
            validated={validated}
            correctAnswerId={currentQuestion.correctAnswerId}
          />
        </Container>

        {validated ? (
          <ExplainButton onExplain={handleExplain} />
        ) : (
          <ValidateButton
            onValidate={handleValidate}
            disabled={!selectedAnswer}
          />
        )}
      </Box>
    </PhoneFrame>
  );
}
