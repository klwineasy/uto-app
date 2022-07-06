import React from 'react';
import { usePrompt } from './PromptContext';
import { Dialog, IconButton, DialogContent, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {};

export const Prompt = (props: Props) => {
  const { title, content, hidePrompt, promptEnabled } = usePrompt();

  return (
    <>
      <Dialog open={promptEnabled} onClose={hidePrompt}>
        <DialogTitle>
          {promptEnabled ? (
            <IconButton
              aria-label='close'
              onClick={hidePrompt}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}>
              <CloseIcon />
            </IconButton>
          ) : null}
          {title}
        </DialogTitle>
        <DialogContent>{content}</DialogContent>
      </Dialog>
    </>
  );
};
