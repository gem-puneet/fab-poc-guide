import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UploadDocs } from './components/UploadDoc';
import { DocumentRecords } from './components/DocRecords';
import {
  AppBar,
  Toolbar,
  Typography,
  Divider,
  Box
} from "@mui/material";
import FabIcon from "./assets/fab-icon.svg"


function App() {

  const appbarBoxStyleFirst: React.CSSProperties = {
    width: '200px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    marginLeft: '60%',
  };
  const appbarBoxStyleSecond: React.CSSProperties = {
    width: '200px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    marginLeft: '16px',
  };
  return (
    <Router>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#00468C" }}>
          {/* <img
            src={FabIcon}
            alt="icon"
            style={{ height: "45px", marginRight: "10px", width: "79px" }}
          /> */}
          {/* <Divider
            orientation="vertical"
            flexItem
            style={{
              marginRight: "10px",
              height: "40px",
              marginTop: "12px",
              backgroundColor: "white",
            }}
          /> */}
          <Typography variant="h6" style={{ color: "blue" }}>
            <span style={{ color: "white" }}>Product Name</span>
          </Typography>
          <Box style={appbarBoxStyleFirst}>
            <Typography style={{color:'rgba(17, 17, 17, 1)' , fontSize:'16px', fontWeight:'400',alignContent:'center'}}>Total Count: 10</Typography>
          </Box>
          <Box style={appbarBoxStyleSecond}>
            <Typography style={{color:'rgba(17, 17, 17, 1)',fontSize:'16px', fontWeight:'400',alignContent:'center'}}>Verified Documents: 5</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <div>
        <Routes>
          <Route path='/' element={<UploadDocs/>}/>
          <Route
            path="/records"
            element={
              <DocumentRecords/>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
