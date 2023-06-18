import { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography, useTheme } from "@mui/material"
import FormLogin from "../FormLogin";
import { Close } from "@mui/icons-material";

const DefaultModal = (props) => {
  const theme = useTheme();

  const { open, title, content, onClose } = props;

  return (
    <>
      <Dialog open={open} fullWidth maxWidth={'sm'}>
        <DialogTitle onClick={onClose} sx={{ backgroundColor: theme.palette.primary.main, mb: 2, display:'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ color: 'white' }}>{title}</Typography>
          <IconButton><Close /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ mb: 0, pb: 0 }}>
          <DialogContentText>
            {content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DefaultModal