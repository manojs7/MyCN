import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material";
// import "../../styles/style.css";
import theme from "../../src/theme/theme";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import PrivateRoute from "../../src/components/PrivateRoute";
import { SessionProvider } from "next-auth/react";
import { getSession } from 'next-auth/react';
import { useCookies } from 'react-cookie';
import ConfirmOrder from "src/components/dashboard/confirmOrders";


const Index = () => {

  return (
    <PrivateRoute>
      <ThemeProvider theme={theme}>
        <FullLayout>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
              <SalesOverview />
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={4}>
              <DailyActivity />
            </Grid>
            <Grid item xs={12} lg={8}>
              <ConfirmOrder />
            </Grid>
            <Grid item xs={12} lg={12}>
              <BlogCard />
            </Grid>
          </Grid>
        </FullLayout>
      </ThemeProvider>
      </PrivateRoute>
  );
};

export default Index;
