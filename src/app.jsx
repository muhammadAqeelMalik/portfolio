import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Navbar";
import About from "./component/about/about";
import Experience from "./component/experience/Experience";
import Service from "./component/service/Service";
import PortFolio from "./component/portfolio/PortFolio";
import Testinomial from "./component/testinomial/Testinomial";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
function App() {
  return (
    <>
      <Grid container>
        <Grid sx={{}} item xs={12}>
          <Header />
        </Grid>
        <Grid sx={{ backgroundColor: "red" }} item xs={12}>
          <Nav />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Experience />
        </Grid>
        <Grid item xs={12}>
          <Service />
        </Grid>
        <Grid item xs={12}>
          <PortFolio />
        </Grid>
        <Grid item xs={12}>
          <Testinomial />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}
export default App;
