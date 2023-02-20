import React from "react";
import "./LandingPage.scss";
import { Box, Container, Stack, Grid, Typography } from "@mui/material";
import Logo from "../assets/byronLogo.png";
import heroImg from "../assets/hero-img.png";
import usa from "../assets/usa.png";
import missionImg from "../assets/mission-img.png";
import ServicesLogo from "../assets/services-logo.png";
import administrative from "../assets/administrative.png";
import appsIcon from "../assets/apps-icon.png";
import partner1 from "../assets/pt-1.png";
import partner2 from "../assets/pt-2.png";
import partner3 from "../assets/pt-3.png";
import partner4 from "../assets/pt-4.png";
import footerLogo from "../assets/footer-byron-logo.png";
import TwitterIcon from "../assets/twitter-icon.png";
import dataentry from "../assets/dataentry.png";
import research from "../assets/reserach.png";
import translation from "../assets/translation.png";
import bookkeeping from "../assets/Bookkeeping.png";
import marketing from "../assets/marketing.png";
import salessupport from "../assets/salesSupport.png";
import travel from "../assets/travel.png";
import customersupport from "../assets/customersupport.png";
import phoneCalls from "../assets/phoneCalls.png";
import transcription from "../assets/transcription.png";
import writing from "../assets/writing.png";
import categorizationapi from "../assets/categorization_api.png";
import gatherapi from "../assets/gatherapi.png";
import imgapi from "../assets/img-transcription-api.png";
import callapi from "../assets/callapi.png";
import writingapi from "../assets/writingapi.png";
import scheduling from "../assets/scheduling.png";

const LandingPage = () => {
  return (
    <>
      <Box className="hero-section">
        <Container>
          <Box className="nav">
            <Box className="logo">
              <img src={Logo} alt="logo" />
            </Box>
            <Box className="menu">
              <ul>
                <li>SHORT TERM</li>
                <li>LONG TERM</li>
                <li>USE CASES</li>
                <li>INTEGRATIONS</li>
                <li>PRICING</li>
                <li>BLUEPRINTS</li>
              </ul>
              <Stack direction="row" spacing={2}>
                <a href="http://app.hibyron.com/login">
                  <button className="login-btn">LOGIN</button>
                </a>
                <a href="http://hibyron.wixsite.com/website-4/pricing">
                  <button className="signup-btn">SIGNUP</button>
                </a>
              </Stack>
            </Box>
          </Box>
          <Grid container mt={5} pb={1} spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Box className="hero-text">
                <Typography
                  variant="h4"
                  color="initial"
                  className="hero-text-heading"
                >
                  The ultimate time-saving solution <br /> for busy
                  professionals
                </Typography>
                <Typography
                  variant="body1"
                  className="hero-text-para"
                  color="initial"
                  mt={3}
                >
                  Highly trained U.S. based assistants that will save you <br />{" "}
                  time and money from day 1
                </Typography>
                <Box className="hero-btn-start" mt={5}>
                  <button className="start-btn">START FOR FREE</button>
                </Box>
                <Box className="hero-btn-checkout">
                  <button className="checkout-btn">
                    CHECKOUT THESE USECASES
                  </button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Box className="hero-image">
                <img src={heroImg} alt="hero" height="100%" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Box className="below-hero" mt={4}>
          <Box className="below-hero-image">
            <img src={usa} alt="usa" />
          </Box>
          <Box className="below-hero-text">
            <Typography
              variant="h5"
              color="initial"
              className="below-hero-text-heading"
              fontFamily="'Raleway', sans-serif"
            >
              Work with top tier assistants
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              fontFamily="'Raleway', sans-serif"
            >
              Our US based assistants are vetted and subject level tested <br />{" "}
              across 100+ skills so that you're always working with top talent.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container>
        <Grid container className="mission" spacing={2} mt={4}>
          <Grid
            className="mission-text"
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <Typography
              variant="h4"
              mt={3}
              color="initial"
              fontFamily="'Raleway', sans-serif"
            >
              A platform built for quality, service, speed, and scale
            </Typography>
            <Typography
              mt={3}
              variant="body1"
              color="initial"
              fontFamily="'Raleway', sans-serif"
            >
              Quickly submit requests, create rules, manage tasks and
              automatically track the number of hours you're saving through our
              platform. Give access to your entire team to help manage projects
              and spread productivity through your company.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className="mission-img">
              <img src={missionImg} alt="misson" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container className="services">
        <Typography variant="h4" color="initial" className="services-heading">
          One place to offload and automate your busy work
        </Typography>

        <Grid container spacing={2} mt={4}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Box className="service-img">
              <img src={ServicesLogo} alt="logo" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                fontFamily="'Raleway', sans-serif"
              >
                <strong>
                  <u>SHORT-TERM</u>
                </strong>{" "}
                &{" "}
                <strong>
                  <u>LONG-TERM</u>
                </strong>{" "}
                services
              </Typography>
              <Box>
                <Grid className="sl-services" container mt={1} spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Stack direction="column" spacing={1}>
                      <Box className="sl-services-item">
                        <img src={administrative} alt="admin" /> ADMINISTRATIVE
                      </Box>
                      <Box className="sl-services-item">
                        <img src={dataentry} alt="admin" /> DATA ENTRY
                      </Box>
                      <Box className="sl-services-item">
                        <img src={research} alt="admin" /> RESEARCH
                      </Box>
                      <Box className="sl-services-item">
                        <img src={translation} alt="admin" /> TRANSLATION
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <Stack direction="column" spacing={1}>
                      <Box className="sl-services-item">
                        <img src={bookkeeping} alt="admin" /> BOOKKEEPING
                      </Box>
                      <Box className="sl-services-item">
                        <img src={marketing} alt="admin" /> MARKETING
                      </Box>
                      <Box className="sl-services-item">
                        <img src={salessupport} alt="admin" /> SALES SUPPORT
                      </Box>
                      <Box className="sl-services-item">
                        <img src={travel} alt="admin" /> TRAVEL
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Stack direction="column" spacing={1}>
                      <Box className="sl-services-item">
                        <img src={customersupport} alt="admin" /> CUSTOMER
                        SUPPORT
                      </Box>
                      <Box className="sl-services-item">
                        <img src={phoneCalls} alt="admin" /> PHONE CALLS
                      </Box>
                      <Box className="sl-services-item">
                        <img src={transcription} alt="admin" /> TRANSCRIPTION
                      </Box>
                      <Box className="sl-services-item">
                        <img src={writing} alt="admin" /> WRITING
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box mt={2}>
              <Typography
                variant="body1"
                color="initial"
                fontFamily="'Raleway', sans-serif"
              >
                <u>
                  <strong>STRUCTURED TASK APIs</strong>
                </u>
              </Typography>
              <Box>
                <Grid className="sl-services" container mt={1} spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Stack direction="column" spacing={1}>
                      <Box className="sl-services-item">
                        <img src={categorizationapi} alt="admin" />{" "}
                        CATEGORIZATION API
                      </Box>
                      <Box className="sl-services-item">
                        <img src={callapi} alt="admin" /> OUTBOUND CALL API
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <Stack direction="column" spacing={1}>
                      <Box className="sl-services-item">
                        <img src={gatherapi} alt="admin" /> GATHER API
                      </Box>
                      <Box className="sl-services-item">
                        <img src={writingapi} alt="admin" /> WRITING API
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Stack direction="column" spacing={1}>
                      <Box className="sl-services-item">
                        <img src={imgapi} alt="admin" /> IMAGE TRANSCRIPTION API
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box mt={2}>
              <Typography
                variant="body1"
                color="initial"
                fontFamily="'Raleway', sans-serif"
              >
                <u>
                  <strong>BRANDED SCHEDULING ASSISTANT</strong>
                </u>
              </Typography>
              <Box>
                <Grid className="sl-services" container mt={1} spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Stack direction="column" spacing={1}>
                      <Box className="sl-services-item">
                        <img src={scheduling} alt="admin" /> SCHEDULING
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={4}></Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}></Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box className="apps-list">
        <Container className="apps-list-container">
          <Typography
            variant="h4"
            className="apps-list-heading"
            color="initial"
          >
            Automatically trigger new tasks from 1300+ tools
          </Typography>
          <Box mt={4}>
            <img
              src={appsIcon}
              width="100%"
              height="100%"
              alt="apps icons"
              srcset=""
            />
          </Box>
        </Container>
      </Box>

      <Container className="partners">
        <div className="line"></div>
        <Box className="partners-text">
          <Typography variant="h5" className="partners-heading" color="initial">
            We partner with teams that are associated with these world class
            networks
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            mt={4}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <img src={partner1} alt="partners" />
            </Box>
            <Box>
              <img src={partner2} alt="partners" />
            </Box>

            <Box>
              <img src={partner3} alt="partners" />
            </Box>
            <Box>
              <img src={partner4} alt="partners" />
            </Box>
          </Stack>
        </Box>
        <div className="line"></div>
      </Container>

      <Box className="own-assistant">
        <Container>
          <Box className="own-assistant-text">
            <Typography
              variant="h4"
              color="initial"
              mb={2}
              className="own-assistant-heading"
              fontFamily="'Raleway', sans-serif"
            >
              Ready to have your own <br /> assistant?
            </Typography>
            <button className="started-free-btn">GET STARTED FOR FREE</button>
          </Box>
        </Container>
      </Box>

      <Container className="footer">
        <Box>
          <img src={footerLogo} alt="footer-logo" />
          <Typography
            variant="subtitle1"
            className="footer-logo-title"
            color="initial"
          >
            Eliminate your busy work
          </Typography>
        </Box>
        <Grid mt={3} container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={2.4} xl={2.4}>
            <Typography
              variant="body1"
              color="initial"
              className="footer-column-heading"
            >
              PRODUCTS
            </Typography>

            <Box className="footer-items-list">
              <ul>
                <li>Short-Term Projects</li>
                <li>Long-Term Placement</li>
                <li>Structured Tasks</li>
                <li>Scheduling Assistant</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2.4} xl={2.4}>
            <Typography
              variant="body1"
              color="initial"
              className="footer-column-heading"
            >
              INFORMATION
            </Typography>
            <Box className="footer-items-list">
              <ul>
                <li>Pricing</li>
                <li>Services</li>
                <li>Integrations</li>
                <li>Tour</li>
                <li>FAQ</li>
                <li>Affiliate Program</li>
                <li>Become an Assistant</li>
                <li>Sign Up</li>
                <a href="http://app.hibyron.com/login">
                  <li>Log In</li>
                </a>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2.4} xl={2.4}>
            <Typography
              variant="body1"
              color="initial"
              className="footer-column-heading"
            >
              RESOURCES
            </Typography>
            <Box className="footer-items-list">
              <ul>
                <li>Blueprints</li>
                <li>Blog</li>
                <li>eBooks</li>
                <li>Help Center</li>
                <li>API & Developers</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2.4} xl={2.4}>
            <Typography
              variant="body1"
              color="initial"
              className="footer-column-heading"
            >
              LEGAL
            </Typography>
            <Box className="footer-items-list">
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Statement</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2.4} xl={2.4}>
            <Typography
              variant="body1"
              color="initial"
              className="footer-column-heading"
            >
              CONNECT
            </Typography>
            <Box className="footer-items-list">
              <ul>
                <li className="icon">
                  {" "}
                  <img src={TwitterIcon} alt="" srcset="" /> &nbsp; Twitter
                </li>
                <li>
                  <strong> EMAIL</strong> team@hibyron.com
                </li>
                <li style={{ color: "#EF3D6B" }}>Made with ❤ in NYC</li>
              </ul>
            </Box>
            <button className="footer-account-btn">CREATE AN ACCOUNT</button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
