"use client";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import * as pixel from "../../utils/fbpixel";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    boxShadow: 48,
    borderRadius: 5,
  },
}));

interface Props {
  openDialog: boolean;
  setOpenDialog: (open: boolean) => void;
}

export default function TermsAndConditionsDialog({
  openDialog,
  setOpenDialog,
}: Props) {
  const theme = useTheme();
  const t = useTranslations();

  return (
    <BootstrapDialog open={openDialog} maxWidth={"sm"}>
      <Grid
        item
        container
        xs={12}
        justifyContent={"center"}
        sx={{ backgroundColor: "#121212", p: 2 }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              mb: 2,
              fontSize: 30,
              fontWeight: "bold",
              color: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            {t("dialog.title")}
          </Typography>

          <Typography
            color="text.primary"
            sx={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {t("dialog.description")}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              if (process.env.ENVIROMENT === "PRODUCTION") {
                pixel.event("prelanding");
              }
              window.location.href = "https://xcrush.ai";
            }}
            sx={{ marginTop: 2 }}
          >
            {t("dialog.button")}
          </Button>
        </Grid>
      </Grid>
    </BootstrapDialog>
  );
}
