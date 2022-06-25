import * as React from "react";
import type { NextPage } from "next";
import { Container, Typography, Box } from "@mui/material";
import { useAmplify } from "../context";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { Navbar } from "../components";

import BasicDatePicker from "./calendar";
import SelectLabels from "./bankAccount";
import BasicTrapFocus from "./cashBook";

const Home: NextPage = () => {
  const { authState } = useAmplify();
  if (authState !== AuthState.SignedIn) {
    return null;
  }
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cash Book
        </Typography>
      </Box>
      <BasicDatePicker />
      <SelectLabels />
      <BasicTrapFocus />
    </Box>
  );
};

export default Home;
