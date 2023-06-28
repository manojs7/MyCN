import React from 'react';
import MenuCalculator from '../../src/components/MenuCalculator';
import { Grid } from "@mui/material";
import FullLayout from "../../src/layouts/FullLayout";
import {ThemeProvider} from "@mui/material";
import theme from "../../src/theme/theme";


const MenuCalculatorPage = () => {
  return (
  <ThemeProvider theme={theme}>
        <FullLayout>
    <Grid container spacing={0}>
      
      
      <Grid item xs={12} lg={12}>
        <MenuCalculator />
      </Grid>


     
    </Grid>
    </FullLayout>
    </ThemeProvider>
  )
};

export default MenuCalculatorPage;