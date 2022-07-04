import * as React from "react";
import { TextField, Fade, Modal, Backdrop } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

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
const style1 = {
  position: "absolute" as "absolute",
  top: "10%",
  right: "0%",
  transform: "translate(-10%, -50%)",
  width: 40,
  bgcolor: "background.paper",
};
const tableRowStyle = {
  weight: "bold",
  size: "18px",
};

export const ItemCreate = (props: Props) => {
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
            <ClearIcon sx={style1} onClick={handleClose} />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create Item
            </Typography>
            <Typography>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "35ch", height: "5ch" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Code"
                  name="code"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  name="description"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Sale Price"
                  name="salePrice"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Unit"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Packing"
                  variant="outlined"
                />
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                    onClick={handleOpen}>
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                    onClick={handleClose}>
                    Cancel
                  </Button>
                </Stack>
              </Box>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
