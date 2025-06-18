'use client';

import { Box, Button, Typography } from "@mui/material";

interface LinaChatProps {
  onNextClicked: () => void;
}

export default function LinaChat({ onNextClicked }: LinaChatProps) {
  return (
    <Box>
      <Typography>LinaChat</Typography>
      <Button onClick={onNextClicked}>Next</Button>
    </Box>
  );
}