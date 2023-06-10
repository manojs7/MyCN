import { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BaseCard from "../baseCard/BaseCard";

const DailyActivity = () => {

  const [products, setProducts] = useState([]);

  const activities = [
    {
      time: "09.50",
      color: "success.main",
      text: "Order 1"
    },
    {
      time: "09.46",
      color: "secondary.main",
      text: "Order 2",
    },
    {
      time: "09.47",
      color: "primary.main",
      text: "Order 3",
    },
    {
      time: "09.48",
      color: "warning.main",
      text: "Order 3",
    },
    {
      time: "09.49",
      color: "error.main",
      text: "Order 4",
    },
  ];

  const fetchData=async ()=>{
    await fetch("/api/RawPaymentAllDetails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (a) {
        return a.json();
      }).then(async function (json) {
        console.log("prodcuts",json.data)
       setProducts(json.data)
      })
    }
  return (
    <BaseCard title="Today's Orders">
      <Timeline
        sx={{
          p: 0,
        }}
      >
        {activities.map((activity) => (
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
                  borderColor: activity.color,
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
              {activity.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </BaseCard>
  );
};

export default DailyActivity;
