import { Box, Button, Divider, Popover, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../reducer/loginSlice";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AccountMenu = (props) => {
  const [infos, setInfos] = useState();
  
  let userData = useSelector(state => state.login);
  const navigate = useNavigate();

  const getInfos = () => {
    setInfos(userData)
  }

  const { open, onClose, clearLogin } = props;

  const dispatch = useDispatch();

  const handleLogout = () => {
    clearLogin()
    dispatch(reset())
    onClose()
    navigate("/");
  }

  useEffect(() => {
    setInfos(userData)
  }, [])

  return (
    <Box sx={{ p: 2 }}>
      <Typography>Olá, <strong>{infos?.nome}</strong></Typography>
      <Divider sx={{ my: 1 }} />
      <Button>Editar Conta</Button>
      <Divider sx={{ my: 1 }} />
      <Button>Meus Pedidos</Button>
      <Divider sx={{ my: 1 }} />
      <Button onClick={handleLogout}>Sair</Button>
    </Box>
  )
}

export default AccountMenu;