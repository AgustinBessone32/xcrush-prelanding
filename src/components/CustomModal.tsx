import { ReactNode } from "react";
import { Modal, Grid, RegularBreakpoints, SxProps, Theme } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.default",
  boxShadow: 24,
  borderRadius: 5,
};

interface Props extends RegularBreakpoints {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
  containerStyle?: SxProps<Theme>;
}

const CustomModal = ({ handleClose, open, children, containerStyle, ...props }: Props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={{ ...style, ...containerStyle }} {...props}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CustomModal;
