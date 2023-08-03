import { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BaseCard from "../baseCard/BaseCard";
import moment from "moment";


const DailyActivity = () => {

  const [products, setProducts] = useState([]);
  // const [activities, setActivities] = useState([]);

  useEffect(()=>{
    fetchData();
    console.log("spectra",products);
  },[])

  // const activities = [
  //   {
  //     time: "09.50",
  //     color: "success.main",
  //     text: "Order 1"
  //   },
  //   {
  //     time: "09.46",
  //     color: "secondary.main",
  //     text: "Order 2",
  //   },
  //   {
  //     time: "09.47",
  //     color: "primary.main",
  //     text: "Order 3",
  //   },
  //   {
  //     time: "09.48",
  //     color: "warning.main",
  //     text: "Order 3",
  //   },
  //   {
  //     time: "09.49",
  //     color: "error.main",
  //     text: "Order 4",
  //   },
  // ];

  const fetchData = async () => {
    await fetch("/api/saveCompletedOrderDetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (a) {
        return a.json();
      })
      .then(function (json) {
        // setProducts(json.data);
        var event_date= moment().format("YYYY-MM-DD");
      setProducts( json.data.filter((d)=>d.date===event_date))
      });

      
      
  };

  return (
    <BaseCard title="Today's Orders">
      <Timeline
        sx={{
          p: 0,
        }}
      >
        { products.length>0 ? products.map((activity) => (
          <TimelineItem key={activity.time}>
            <TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              {activity.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: "success.main",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              color="text.secondary"
              sx={{
                fontSize: "14px",
              }}
            >
              {activity.name}
            </TimelineContent>
            
          </TimelineItem>
          
        )):"No Orders Today"}
        <TimelineItem key="viewall">
            <a href="/Admin/orders"><TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              View All Orders
            </TimelineOppositeContent></a>
          </TimelineItem>
        
      </Timeline>
    </BaseCard>
  );
};

export default DailyActivity;
