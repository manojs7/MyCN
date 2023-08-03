import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import ConfirmOrder from "../../src/components/dashboard/confirmOrders";
import FullLayout from "../../src/layouts/FullLayout";
import {ThemeProvider} from "@mui/material";
// import "../../styles/style.css";
import theme from "../../src/theme/theme";
import ProductPerfomance from "src/components/dashboard/ProductPerfomance";
import OrdersFromClappia from "src/components/dashboard/OrdersFromClappia";
import ApprovedOrders from "src/components/dashboard/ApprovedOrders";
import { useSession } from "next-auth/react";

export default function Index() {
  const { data: session } = useSession();

  const role = session?.user?.role;

  return (
    <ThemeProvider theme={theme}>
        <FullLayout>
    <Grid container spacing={0}>
      
    {role === "Admin" || role === "sales" ?
      <Grid item xs={12} lg={12}>
        <ConfirmOrder />
      </Grid>
    :null
  }
      

      {role === "ops"?
      <Grid item xs={12} lg={12}>
      <ApprovedOrders/>
      </Grid>
      :null
    }

      {/* <Grid item xs={12} lg={12}>
        <ProductPerfomance />
      </Grid> */}
      
     
    </Grid>
    </FullLayout>
    </ThemeProvider>
  );
}
