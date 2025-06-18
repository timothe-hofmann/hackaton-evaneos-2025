"use client";

import { Box, Typography, Button } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useEffect } from "react";

interface QuestionSectionProps {
  text: string;
  type: "audio" | "text";
  content: string;
}

export default function QuestionSection({
  text,
  type,
  content,
}: QuestionSectionProps) {
  return (
    <Box sx={{ px: 2, mb: 3 }}>
      <Typography variant="h5" component="h2">
        {text}
      </Typography>
      {type === "audio" && (
        <Box sx={{ my: 3 }}>
          <AudioButton content={content} />
        </Box>
      )}
    </Box>
  );
}

function AudioButton({ content }: { content: string }) {
  const audio = new Audio(content);

  useEffect(() => {
    audio.load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const handlePlayAudio = () => {
    audio.play();
  };

  return (
    <Button
      fullWidth
      variant="contained"
      color="secondary"
      size="large"
      onClick={handlePlayAudio}
    >
      <VolumeUpIcon />
      Play sound
    </Button>
  );
}
