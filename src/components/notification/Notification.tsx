import * as React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useNotification } from './NotificationContext';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  }
);

export const Notification = () => {
  const {
    notificationMessage,
    notificationSeverity,
    notificationEnabled,
    setNotificationEnabled,
  } = useNotification();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationEnabled(false);
  };

  return (
    <Snackbar
      open={notificationEnabled}
      autoHideDuration={6000}
      onClose={handleClose}>
      {notificationSeverity === 'success' ? (
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      ) : notificationSeverity === 'error' ? (
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      ) : notificationSeverity === 'warning' ? (
        <Alert onClose={handleClose} severity='warning' sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      ) : (
        <Alert onClose={handleClose} severity='info' sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      )}
    </Snackbar>
  );
};
