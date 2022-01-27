import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../assets/img/header-image.jpg";
import "../style/GC.css";
import Fade from "react-reveal/Fade";

import casestudy from "../assets/img/GC/case.jpg";
import product from "../assets/img/GC/product.jpg";
import badminton from "../assets/img/GC/badminton.jpg";

import play from "../assets/img/GC/play.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="head">
        <h2 className="text">Best Performances in General Championship</h2>
      </div>
      <div className="box" style={{ marginTop: "2rem" }}>
        <Box sx={{ width: "100%", marginTop: "0px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="dark" 
              indicatorColor="secondary" 
              centered
            >
              <Tab label="Technology" style ={{outline:"none"}} {...a11yProps(0)} />
              <Tab label="Sports and Games" style ={{outline:"none"}} {...a11yProps(1)} />
              <Tab label="Social and Cultural" style ={{outline:"none"}} {...a11yProps(2)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <div className="wrap">
              <div className="about-wrapper">
                <div className="about">
                  <Fade left>
                    <div className="about-image">
                      <img src={product} alt="product" />
                    </div>
                  </Fade>

                  <Fade right>
                    <div className="about-text">
                      <h1 className="heading-about">Gold in Product Design</h1>
                      <hr className="rule-about" />
                      <i>
                        "After 10 years and a lot of hard work we got this GOLD
                        in ProductDesign"
                      </i>
                    </div>
                  </Fade>
                </div>
              </div>

              <div className="about-wrapper">
                <div className="about">
                  <Fade left>
                    <div className="about-image">
                      <img src={casestudy} alt="casestudy" />
                    </div>
                  </Fade>

                  <Fade right>
                    <div className="about-text">
                      <h1 className="heading-about">
                        Silver in Inter-Hall Case Study
                      </h1>
                      <hr className="rule-about" />
                      <i>
                        "The team consisted of Sidhant Agarwal , Sagar Gupta,
                        Anmol Thakkar , Bhavya Jain, Shashank Mishra , Suyash
                        Sharma , Gaurav Katam , Puneet Pansari , Ayush Vajpeyi ,
                        Aditya Neema, Agnimitra."
                      </i>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="wrap">
              <div className="about-wrapper">
                <div className="about">
                  <Fade left>
                    <div className="about-image">
                      <img src={badminton} alt="LOGO" />
                    </div>
                  </Fade>

                  <Fade right>
                    <div className="about-text">
                      <h1 className="heading-about">
                        Silver in Inter-Hall Badminton
                      </h1>
                      <hr className="rule-about" />
                      <i>
                        "The team consisted of Akhilesh Gundu , Abhishek Velugu
                        , Sandeep ."
                      </i>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <div className="wrap">
              <div className="about-wrapper">
                <div className="about">
                  <Fade left>
                    <div className="about-image">
                      <img src={play} alt="play" />
                    </div>
                  </Fade>

                  <Fade right>
                    <div className="about-text">
                      <h1 className="heading-about">
                        Gold in Inter-Hall Stage-Play
                      </h1>
                      <hr className="rule-about" />
                      <i>
                        "The team consisted of : Atul Kumar , Shashi Kant ,
                        Somesh Gupta , Rohit Saboo , Umang Agarwal , Saurabh
                        Pandey , Sayan Mandal , Rishabh Gupta , Shashank
                        Jaipuria , Shyam Dixit , Abhishek kumar,Karan,Neel
                        Ghosh,Prem Shankar,Ayanava Das,Souranshu Ghosh. Suyash
                        Sharma , Apurv Dave helped in Direction. General
                        Secretary Social & Cultural - Shubham Kumar Abhishek
                        Yadav , Sushil Bagate , Abhijeet Mahato , Chandraprakash
                        Koshle , @Utkarsh kumar helped in Sets and Sound. Along
                        with these, There were some people who weren't in the
                        team. Not even in the campus. Our Ex - Drams Captains
                        who always helped us in the event. Abhay Daga , Shubham
                        Singh"
                      </i>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </>
  );
}
