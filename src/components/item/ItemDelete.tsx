import * as React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {
  TextField,
  Button,
  Fade,
  Modal,
  Box,
  Backdrop,
  Stack,
  Typography,
} from "@mui/material";

type Props = {
  openState: boolean;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CrossStyle = {
  position: "absolute" as "absolute",
  top: "10%",
  right: "0%",
  transform: "translate(-10%, -50%)",
  width: 40,
  bgcolor: "background.paper",
};

export const ItemDelete = (props: Props) => {
  const { openState, setOpenState } = props;
  const handleOpen = () => setOpenState(true);
  const handleClose = () => setOpenState(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openState}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={openState}>
          <Box sx={style}>
            <ClearIcon sx={CrossStyle} onClick={handleClose} />
            <h2 style={{ textAlign: "center" }}>Delete Item</h2>
            <p style={{ textAlign: "center" }}>Are you sure want to delete?</p>
            <Stack direction="row" spacing={2} style={{ paddingLeft: "40px" }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: "bold",
                  marginRight: "50px",
                }}
                onClick={handleClose}>
                Confirm
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontWeight: "bold", marginLeft: "100px" }}
                onClick={handleClose}>
                Cancel
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
