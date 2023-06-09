import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import ConfirmOrder from "../../src/components/dashboard/confirmOrders";
import FullLayout from "../../src/layouts/FullLayout";
import {ThemeProvider} from "@mui/material";
// import "../../styles/style.css";
import theme from "../../src/theme/theme";
import CreateForm from "src/components/createForm";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
        <FullLayout>
    <Grid container spacing={0}>
      
      
      <Grid item xs={12} lg={12}>
        <CreateForm />
      </Grid>

     
     
    </Grid>
    </FullLayout>
    </ThemeProvider>
  );
}
