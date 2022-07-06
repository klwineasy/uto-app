import React, { createContext, useContext, useState } from 'react';
import { Modal } from '@mui/material';

type CallbackHandler = () => Promise<void>;

interface PromptContextProps {
  title?: string;
  setPromptTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  confirmLabel?: string;
  setPromptConfirmLabel: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  cancelLabel?: string;
  setPromptCancelLabel: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  content?: JSX.Element;
  setPromptContent: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
  promptEnabled: boolean;
  setPromptEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  showPrompt: () => void;
  hidePrompt: () => void;
}

export interface PromptProviderProps {
  children: React.ReactElement;
}

export const PromptContext = createContext({} as PromptContextProps);

export const PromptProvider = (props: PromptProviderProps) => {
  const { children } = props;
  const [title, setPromptTitle] = useState<string>();
  const [confirmLabel, setPromptConfirmLabel] = useState<string>();
  const [cancelLabel, setPromptCancelLabel] = useState<string>();
  const [content, setPromptContent] = useState<JSX.Element>();
  const [promptEnabled, setPromptEnabled] = useState<boolean>(false);

  const context: PromptContextProps = {
    title,
    setPromptTitle,
    confirmLabel,
    setPromptConfirmLabel,
    cancelLabel,
    setPromptCancelLabel,
    content,
    setPromptContent,
    promptEnabled,
    setPromptEnabled,
    showPrompt: () => {
      setPromptEnabled(true);
    },
    hidePrompt: () => {
      setPromptEnabled(false);
    },
  };

  return (
    <PromptContext.Provider value={context}>{children}</PromptContext.Provider>
  );
};

export const usePrompt = () => {
  const context = useContext(PromptContext);

  if (context === undefined) {
    throw new Error('usePrompt must be used within a PromptProvider');
  }

  return {
    ...context,
  };
};
