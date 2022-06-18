import React, { useState, useEffect } from "react";
import Notification from "src/components/Notification_list";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Arrowright from "src/components/atoms/icons/Arrowright";
import axios from "axios";

const Allnotifications = () => {
  const [noti, setNoti] = useState([]);
  useEffect(() => {
    const getNotiInfo = async () => {
      let resp = await axios.get(
        `https://61bc64aad8542f0017824709.mockapi.io/notifications`
      );

      let newArray = resp.data.map((el) => {
        return {
          ...el,
          date: new Date(el.date).toLocaleString(),
        };
      });
      // console.log(newArray);
      setNoti(newArray);
    };

    getNotiInfo();
  }, []);

  // console.log(noti.date);

  return (
    <>
      <Box
        backgroundColor="#FFFFFF"
        maxWidth={{ _: "100%", desktop: "19.875rem" }}
        width={{ _: "100%", desktop: "auto" }}
        borderRadius="1rem"
        flex="1 1 300px !important"
        boxShadow="0px 4px 65px rgba(96, 119, 94, 0.09)"
      >
        <Box p="2rem 2rem 0rem 2rem">
          <Typography variant="subheader1">My notifications</Typography>
          <Box display="flex">
            <Typography mr="1rem" variant="caption2">
              Open notifications
            </Typography>
            <Arrowright />
          </Box>
          <hr />
        </Box>
        <Box
          p="1rem 2rem 2rem 2rem"
          maxHeight="500px"
          overflowY="scroll"
          className="Dashboard"
        >
          {noti.map((Notelist) => (
            <Notification
              text={Notelist.title + " " + Notelist.status}
              date={Notelist.date + " | " + Notelist.username}
            />
          ))}
          {/* <Notification
            text="Leicester University Application &nbsp;&nbsp; Approved"
            date="13 Oct 2021, 09:00 | Leicestershire"
          />
          <Notification
            text="De Montfort University - Open Day - 4th December"
            date="4 Dec 2021, 10:00 | Leicestershire"
          />
          <Notification
            text="De Montfort University - Open Day - 4th December"
            date="4 Dec 2021, 10:00 | Leicestershire"
          />
          <Notification
            text="University of Leicester - Open Day (Digital)"
            date="4 Dec 2021, 10:00 | Leicestershire"
          />
          <Notification
            text="University of Leicester - Open Day (Digital)"
            date="4 Dec 2021, 10:00 | Leicestershire"
          />
          <Notification
            text="Leicester University Application Approved"
            date="16 Oct 2021, 09:00 | Leicestershire"
          />
          <Notification
            text="Leicester University Application Approved"
            date="16 Oct 2021, 09:00 | Leicestershire"
          />
          <Notification
            text="Leicester University Application Approved"
            date="16 Oct 2021, 09:00 | Leicestershire"
          />
          <Notification
            text="Leicester University Application Approved"
            date="16 Oct 2021, 09:00 | Leicestershire"
          />
          <Notification
            text="Leicester University Application Approved"
            date="16 Oct 2021, 09:00 | Leicestershire"
          /> */}
        </Box>
      </Box>
    </>
  );
};
export default Allnotifications;
