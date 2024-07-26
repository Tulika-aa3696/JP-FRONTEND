import { Box, Modal } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loginform from "../Auth/Loginform.jsx";
import Regform from "../Auth/Regform.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: '90%', // 90% width for extra-small screens
    sm: '80%', // 80% width for small screens
    md: 500    // Fixed width for medium screens and up
  },
  maxWidth: '90vw', // Max width of 90% of the viewport width
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 2 // Rounded corners for aesthetics
};

const AuthModel = ({ handleClose, open,modalType }) => {
  const location = useLocation();
  const [modalType1, setmodalType1] = React.useState(modalType);
  console.log(modalType1)
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('login')) {
      setmodalType1('login');
    } else if (path.includes('register')) {
      setmodalType1('register');
    }
  }, [location]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Render forms based on modalType11 */}
        {modalType1 === 'login' ? <Loginform /> : <Regform />}
      </Box>
    </Modal>
  );
};

export default AuthModel;
