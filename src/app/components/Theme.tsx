'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useContext } from 'react';
import getLPTheme from '@/app/etc/getLPTheme';
import { Modal, Box, Typography, Button } from '@mui/material';
import { Context } from '@/app/context/provider';

export default function Theme(props: { children: any; }) {
  const ctx: any = useContext(Context);

  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(ctx.mode));
  const defaultTheme = createTheme({ palette: { mode: ctx.mode } });

  const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <Modal
        open={ctx.openModal}
        onClose={() => ctx.setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            { ctx.openModal }
          </Typography>
          <Button variant='contained' color='primary' fullWidth onClick={() => ctx.setOpenModal(false)}>OK</Button>
        </Box>
      </Modal>
      {props.children}
    </ThemeProvider>
  )
}