import { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, useTheme } from "@mui/material"
import FormLogin from "../FormLogin";

const DefaultModal = (props) => {
  const theme = useTheme();

  const { open, title, content, actionFirstButton, textFirstButton, actionSecondButton, textSecondButton } = props

  return (
    <>
      <Dialog open={open} fullWidth maxWidth={'sm'}>
        <DialogTitle sx={{ backgroundColor: theme.palette.primary.main, mb: 2 }}><Typography sx={{ color: 'white' }}>{title}</Typography></DialogTitle>
        <DialogContent sx={{ mb: 0, pb: 0 }}>
          <DialogContentText>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, mb: 2, mt: 3 }}>
          <Button variant="outlined" onClick={actionFirstButton}>{textFirstButton}</Button>
          <Button variant="contained" onClick={actionSecondButton}>{textSecondButton}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DefaultModal