import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import { useProduct } from "../../context";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import { ItemTableRow } from "../item";
import { Product } from "../../models";
import { ItemModalProps } from "../../pages/items";

interface Props {
  openState: ItemModalProps;
  setOpenState: React.Dispatch<React.SetStateAction<ItemModalProps>>;
}

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

export const ItemEdit = (props: Props) => {
  const {
    products,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  } = useProduct();
  const { openState, setOpenState } = props;
  const [product, setProduct] = useState<Product | undefined>();
  const handleOpen = () => setOpenState({ ...openState, state: true });
  const handleClose = () => setOpenState({ ...openState, state: false });
  const fetchProduct = async () => {
    console.log("hi");
    const result = await getProductById(openState.productID);
    // console.log(result);
    setProduct(result);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  // console.log(product);
  // console.log(openState.productID);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openState.state}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={openState.state}>
          <Box sx={style}>
            <ClearIcon sx={style1} onClick={handleClose} />
            <p>Hello World!</p>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ItemEdit;
