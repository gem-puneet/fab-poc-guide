import React, { useState } from "react";
import axios from 'axios';

import {
  Typography,
  Container,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Link,
  IconButton,
  TextField,
  Alert,
  Snackbar
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DocumentInvoice from "../assets/document-invoice.svg";
import TaskIcon from "../assets/task-icon.svg";
import UploadFile from "../assets/upload-file.svg";
import CommentIcon from "../assets/comment-icon.svg";
import noImg from "../assets/no-file.svg";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import PreviewPdf from "./PreviewPdf";

//Preview PDF part

export const UploadDocs: React.FC = () => {



  const [files, setFiles] = useState<File[]>([]);
  const [selectedFile, setSelectedFile] = useState<any>({});
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);


  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedFiles = Array.from(event.target.files);
      handleUploadDoc(uploadedFiles[0]);
    }
  };

  const handleUploadDoc = async (uploadFile: File) => {
    const formData = new FormData();
    formData.append('file', uploadFile);

    interface IResponse {
      data : any
    }

    try {
      const response: IResponse = await axios.post('http://52.66.10.81:8004/upload_docs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response){
      setSelectedFile(uploadFile);
      setFiles([...files, uploadFile]);
      setAlertOpen(true);
      }
    } catch (error) {
      console.error('There was an error uploading the file!', error);
    }
  };
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };
  const handleFileRemove = (fileToRemove: File) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };
  const closeIconStyle: React.CSSProperties = {
    position: "absolute",
    top: "4px",
    right: "4px",
  };
  const formatFileSize = (size: number) => {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let unitIndex = 0;
    let formattedSize = size;

    while (formattedSize >= 1024 && unitIndex < units.length - 1) {
      formattedSize /= 1024;
      unitIndex += 1;
    }

    return `${formattedSize.toFixed(2)} ${units[unitIndex]}`;
  };
  const uploadedFileStyle: React.CSSProperties = {
    backgroundColor: "#F8F9FA",
    width: "280px",
    height: "50px",
    padding: "8px",
    gap: "14px",
    marginTop: "30px",
    marginLeft: "-10px",
    borderRadius: "4px",
    border: "1px solid #B0C9E1", 
  };

  const sectionSelectorStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "0",
    left: "50%",
    zIndex: 1000,
    padding: "16px",
    backgroundColor: "white",
    borderRadius: "8px",
  };

  const selectedFileStyle: React.CSSProperties = {
    ...uploadedFileStyle,
    backgroundColor: "#00468C",
    color: "white",
  };

  const closeIconButtonStyle: React.CSSProperties = {
    position: "absolute",
    right: "5px",
    borderRadius: "50%",
    border: "1px solid #6A737B",
    padding: "0px", 
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)", 
  };
  const appbarBoxStyleFirst: React.CSSProperties = {
    width: "200px",
    height: "30px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    marginLeft: "55%",
  };

  const appbarBoxStyleSecond: React.CSSProperties = {
    width: "200px",
    height: "30px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    marginLeft: "16px",
  };
  const sectionButtonContainerStyle: React.CSSProperties = {
    display: "flex",
    // flexDirection: 'column',
    alignItems: "center",
    marginBottom: "16px",
  };

  const sectionButtonStyle: React.CSSProperties = {
    borderRadius: "50%",
    padding: "8px",
    backgroundColor: "#ccc",
    cursor: "pointer"

  };

  const noImage : React.CSSProperties = {
    left: "60%",
    position: "absolute",
    textAlign:"center",
    top:"45%",
    transform:"translate(-50%, -50%)"
  };

  const handleAction = (action: string) => {
    setSelectedAction(action);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Container style={{ flex: 1, maxWidth: "100%" }}>
        <Grid
          container
          spacing={2}
          style={{ height: "100%", maxWidth: "auto" }}
        >
          <Grid
            item
            xs={3}
            style={{
              borderRight: "1px solid #ccc",
              backgroundColor: "#F2F5FA",
            }}
          >
            <Grid
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "25.2px",
                textAlign: "left",
                marginTop: "50px",
              }}
            >
              Task Details{" "}
              <img
                src={TaskIcon}
                style={{ float: "right", marginRight: "20px" }}
              ></img>
            </Grid>

            <Box
              p={2}
              style={{
                backgroundColor: "#F8F9FA",
                width: "260px",
                height: "50px",
                padding: "8px",
                gap: "14px",
                top: "30px",
                marginTop: "30px",
                borderRadius: "4px",
                borderStyle: "dashed",
                borderColor: "#B0C9E1",
                borderWidth: "2px",
              }}
            >
              <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  style={{
                    display: "none",
                  }}
                />
                <Button variant="outlined" component="span" style={{border:'0px', color:'#242634', marginTop:'10px', fontWeight:'500', fontSize:'16px'}}>
                 <img src={UploadFile} style={{marginLeft:'10px', marginTop:'-5px'}}></img> <span style={{marginLeft:'10px',fontWeight:'500', fontSize:'16px', textTransform:'capitalize', marginTop:'-5px'}}>Upload new file</span>
                </Button>
              </label>
              {/* <Input type="file" inputProps={{ multiple: true }} onChange={handleFileUpload}   /> */}
              <Box style={{ width: "250px" }}>
                <List style={{ marginTop: "30px", width: "250px" }}>
                  <label
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "18px",
                    }}
                  >
                    Select Uploaded File
                  </label>
                  {files.map((file, index) => (
                    <ListItem
                      button
                      key={index}
                      onClick={() => handleFileSelect(file)}
                      style={
                        file === selectedFile
                          ? selectedFileStyle
                          : uploadedFileStyle
                      }
                    >
                      <PictureAsPdfRoundedIcon
                        style={{
                          color:
                            file === selectedFile
                              ? "white"
                              : "rgba(0, 70, 140, 1)",
                        }}
                      />
                      <ListItemText
                        primaryTypographyProps={{
                          style: {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "200px",
                          },
                        }}
                        primary={file?.name}
                        secondary={formatFileSize(file?.size)}
                        style={{
                          marginTop: "30px",
                          width: "280px",
                          height: "60px",
                          padding: "8px",
                          marginLeft: "-10px",
                          gap: "14px",
                          color: file === selectedFile ? "#fff" : "#000",
                        }}
                      />
                      <IconButton
                        onClick={(event) => {
                          event.stopPropagation();
                          handleFileRemove(file);
                        }}
                        style={{
                          position: "absolute",
                          right: "5px",
                          borderRadius: "50%",
                          border:
                            file === selectedFile
                              ? "1px solid white"
                              : "1px solid #6A737B",
                          padding: "0px",
                          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",
                          color: file === selectedFile ? "#fff" : "#000",
                        }}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
            <Link href={"/records"}>
              <Button
                onClick={() => handleAction("Accept")}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 70, 140, 1) 0%, rgba(7, 69, 176, 1) 25%, rgba(20, 85, 195, 1) 50%, rgba(36, 102, 217, 1) 100%)",
                  color: "white",
                  border: "1px solid rgb(20, 85, 195)",
                  borderRadius: "1px",
                  width: "280px",
                  position: "fixed",
                  bottom: "50px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                View Records
              </Button>
            </Link>
          </Grid>
          {files && files.length>0 ?
          <>
          <Grid item xs={5} style={{ borderRight: "1px solid #ccc" }}>
            <Box
              p={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              {selectedFile ? (
                <PreviewPdf file = {selectedFile} />
              ) : (
                <Typography>Select a file to preview</Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={2} display="flex" flexDirection="column" height="100%">
              <Box marginTop="10px">
                <label style={{ fontSize: "20px", fontWeight: "500" }}>
                  Document Results
                </label>
                <Button
                  style={{
                    border: "1px solid rgb(20, 85, 195)",
                    marginBottom: "10px",
                    float: "right",
                    borderRadius: "1px",
                  }}
                  onClick={() => handleAction("Filter")}
                >
                  <FilterAltOutlinedIcon
                    style={{ color: "rgba(85, 85, 85, 1)" }}
                  ></FilterAltOutlinedIcon>
                  <label
                    style={{ color: "black", textTransform: "capitalize" }}
                  >
                    Filters
                  </label>
                </Button>
              </Box>
              <Box marginTop={"20px"}>
                <label style={{ fontSize: "16px", fontWeight: "500" }}>
                  Actions
                </label>
                <div style={{ float: "right", marginTop: "-10px" }}>
                  <Button
                    onClick={() => handleAction("Reject")}
                    style={
                      selectedAction === "Reject"
                        ? {
                            background:
                              "linear-gradient(90deg, rgba(0, 70, 140, 1) 0%, rgba(7, 69, 176, 1) 25%, rgba(20, 85, 195, 1) 50%, rgba(36, 102, 217, 1) 100%)",
                            textTransform: "capitalize",
                            color: "white",
                            border: "1px solid rgb(20, 85, 195)",
                            borderRadius: "1px",
                            marginBottom: "10px",
                            marginRight: "10px",
                          }
                        : {
                            border: "1px solid rgb(20, 85, 195)",
                            borderRadius: "1px",
                            marginBottom: "10px",
                            textTransform: "capitalize",
                            marginRight: "10px",
                            color: "black",
                          }
                    }
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={() => handleAction("Accept")}
                    style={
                      selectedAction === "Accept"
                        ? {
                            background:
                              "linear-gradient(90deg, rgba(0, 70, 140, 1) 0%, rgba(7, 69, 176, 1) 25%, rgba(20, 85, 195, 1) 50%, rgba(36, 102, 217, 1) 100%)",
                            textTransform: "capitalize",
                            color: "white",
                            border: "1px solid rgb(20, 85, 195)",
                            borderRadius: "1px",
                            marginBottom: "10px",
                          }
                        : {
                            border: "1px solid rgb(20, 85, 195)",
                            borderRadius: "1px",
                            marginBottom: "10px",
                            textTransform: "capitalize",
                            color: "black",
                          }
                    }
                  >
                    Accept
                  </Button>
                </div>
              </Box>
              <Box
                p={2}
                mt={2}
                width="100%"
                border="1px solid #ccc"
                borderRadius="4px"
              >
                <div>
                  <img src={DocumentInvoice}></img>
                  <label
                    style={{
                      float: "right",
                      marginTop: "5px",
                      marginRight: "160px",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    Document 1 : Invoice
                  </label>
                </div>
                <label
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "15px",
                  }}
                >
                  Data
                </label>
                <Typography variant="subtitle1" style={{ marginTop: "15px" }}>
                  Name: {" Your Client Name"}
                </Typography>
                <Typography variant="subtitle1" style={{ fontWeight: "600" }}>
                  <strong>Address:</strong>{" "}
                  {" 1234 Clients street City, California, United States"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "400", fontSize: "14px" }}
                >
                  Date Issued: {" 26/03/21"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "400", fontSize: "14px" }}
                >
                  Amount Due:{" $1,699.48"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "400", fontSize: "14px" }}
                >
                  Due Date: {" 25/4/21"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "400", fontSize: "14px" }}
                >
                  Description: {" Invoice for payment due"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "400", fontSize: "14px" }}
                >
                  Item Name: {" Services(Cost of various services)"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "400", fontSize: "14px" }}
                >
                  Rate: {" $555 per unit"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "400", fontSize: "14px" }}
                >
                  Quantity: {" 10"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "400", fontSize: "14px" }}
                >
                  Amount: {" $5550.00"}
                </Typography>
              </Box>
              <Box height={"100px"} style={{ height: "100px" }}>
                <TextField
                  placeholder="How can I help you?"
                  fullWidth
                  style={{
                    marginTop: "16px",
                    background: "#F2F5FA",
                    width: "100%",
                    border: "0px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <>
                        <InputAdornment
                          position="start"
                          style={{
                            color: "rgba(0, 70, 140, 1)",
                            marginTop: "28px",
                          }}
                        >
                          <img src={CommentIcon} />
                        </InputAdornment>
                        <InputAdornment
                          position="start"
                          style={{ color: "rgba(0, 70, 140, 1)" }}
                        >
                          <ArrowCircleRightSharpIcon
                            style={{
                              position: "absolute",
                              bottom: "10px",
                              right: "15px",
                            }}
                          ></ArrowCircleRightSharpIcon>
                        </InputAdornment>
                      </>
                    ),
                    sx: { height: "120px", alignItems: "flex-start" },
                  }}
                />
              </Box>
            </Box>
          </Grid>
          </>
          :
          <Box style={noImage}>
          <img src={noImg} alt="No files" style={{width:'350px'}}></img>
          <h1>No file uploaded</h1>
          <p style={{fontSize:'16px', color:'#444444'}}>Click on upload new file on left panel to initiate the task related operations</p>
          </Box>
          }
        </Grid>
      </Container>
      {alertOpen && (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={alertOpen} autoHideDuration={3000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
            File uploaded successfully!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
