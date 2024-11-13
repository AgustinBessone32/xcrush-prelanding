"use client";
import { Box } from "@mui/material";
import BackgroundImage from "../../../../public/assets/background.png";
import BackgroundImageMobile from "../../../../public/assets/backgroundMobile.png";
import { useState } from "react";
import TermsAndConditionsDialog from "@/components/Modals/TermAndConditionsDialog";
import { usePathname } from "next/navigation";

const URL = "https://www.tarot.bio/";

export const DashboardPage = () => {
  const [openDialog, setOpenDialog] = useState(true);
  const pathname = usePathname();

  const utms = window.location.href.split(URL)[1] || "";

  return (
    <Box
      sx={{
        width: "100%",
        height: "100svh",
        backgroundImage: {
          xs: `url(${BackgroundImageMobile.src})`,
          lg: `url(${BackgroundImage.src})`,
        },
        filter: "blur(4px)",
      }}
    >
      <TermsAndConditionsDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        utms={utms}
      />
    </Box>
  );
};
