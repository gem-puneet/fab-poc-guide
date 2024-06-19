import React, { useState } from 'react';
import { AppBar, Toolbar, Typography,Divider, Container, Grid,InputAdornment, List, ListItem, ListItemText, Button, Box, Input, IconButton,TextField, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FabIcon from "../src/assets/fab-icon.svg";
import DocumentInvoice from "../src/assets/document-invoice.svg"
import UploadFile from "../src/assets/upload-file.svg"
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CommentIcon from "../src/assets/comment-icon.svg"
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import TaskIcon from "../src/assets/task-icon.svg";
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import PdfIcon  from "../src/assets/pdf-icon.svg";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';


const App: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string>('Document'); // Default to 'Document'
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const options = ['Document 1 : Invoice', 'Document 2 : Bill of lading','Documnet','document'];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };
  
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    console.log(selectedFile,"selectedFile---------")
  };
  const handleFileRemove = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove));
  };
  const closeIconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '4px',
    right: '4px',
  };
  const formatFileSize = (size: number) => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let unitIndex = 0;
    let formattedSize = size;

    while (formattedSize >= 1024 && unitIndex < units.length - 1) {
      formattedSize /= 1024;
      unitIndex += 1;
    }

    return `${formattedSize.toFixed(2)} ${units[unitIndex]}`;
  };
  const uploadedFileStyle: React.CSSProperties = {
    backgroundColor: '#F8F9FA',
                  width: '280px', 
                  height: '50px', 
                  padding: '8px', 
                  gap: '14px', 
                  marginTop:'30px',
                  marginLeft:'-10px',
                  borderRadius: '4px', 
                  // borderStyle: 'solid', 
                  // borderColor:  '#F2F5FA', 
                  // borderWidth: '1px', 
                  border:'1px solid #B0C9E1', // Added for positioning the close icon
  };

  const sectionSelectorStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // position: 'absolute',
    top: '0',
    left: '50%',
    // transform: 'translateX(-50%)',
    zIndex: 1000, // Adjust the z-index as needed
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const selectedFileStyle: React.CSSProperties = {
    ...uploadedFileStyle,
    backgroundColor: '#00468C',
    color: 'white',
  };

  const closeIconButtonStyle: React.CSSProperties = {
    position: 'absolute',
    // top: '4px',
    right: '5px',
    // backgroundColor: 'white', // Change this to the desired background color
    borderRadius: '50%',
    border:'1px solid #6A737B',
    padding: '0px', // Adjust padding to make the circle larger or smaller
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)', // Optional: Adds a slight shadow for better visibility
  };
  const appbarBoxStyleFirst: React.CSSProperties = {
    width: '200px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    marginLeft: '55%',
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
  const sectionButtonContainerStyle: React.CSSProperties = {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '16px',
  };

  const sectionButtonStyle: React.CSSProperties = {
    borderRadius: '50%',
    padding: '8px',
    backgroundColor: '#ccc',
    cursor: 'pointer',
  };

  const handleAction = (action: string) => {
    setSelectedAction(action);
    console.log(`${action} action performed`);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="fixed">
        <Toolbar style={{backgroundColor:'#00468C'}}>
          <img src={FabIcon} alt="icon" style={{ height: '45px', marginRight: '10px', width:"79px" }} />
          <Divider orientation="vertical" flexItem style={{ marginRight: '10px',height: '40px', marginTop: '12px', backgroundColor: 'white' }} />
          <Typography variant="h6" style={{ color: 'rgba(0, 70, 140, 1)' }}>
            <span style={{ color: 'white' }}>Product Name</span>
          </Typography>
          <Box style={appbarBoxStyleFirst}>
            <Typography style={{color:'rgba(17, 17, 17, 1)' , fontSize:'16px', fontWeight:'400',alignContent:'center'}}>Total Count: 10</Typography>
          </Box>
          <Box style={appbarBoxStyleSecond}>
            <Typography style={{color:'rgba(17, 17, 17, 1)',fontSize:'16px', fontWeight:'400',alignContent:'center'}}>Verified Documents: 5</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Container style={{ flex: 1, maxWidth:'100%' ,marginTop:'50px'}}>
        <Grid container spacing={2} style={{ height: '100%', maxWidth:'auto' }}>
          <Grid item xs={3} style={{ borderRight: '1px solid #ccc', backgroundColor:'#F2F5FA' }}>
          <Grid style={{ fontSize:'20px',fontWeight: '600',lineHeight: '25.2px',textAlign: 'left', marginTop:'50px'}}>Task Details <img src={TaskIcon} style={{float:'right', marginRight:'20px'}}></img></Grid>
          
            <Box p={2}  style={{ backgroundColor: '#F8F9FA',
                  width: '260px', 
                  height: '50px', 
                  padding: '8px', 
                  gap: '14px', 
                  top:'30px',
                  marginTop:'30px',
                  borderRadius: '4px', 
                  borderStyle: 'dashed', 
                  borderColor: '#B0C9E1', 
                  borderWidth: '2px', 
                }}>
                  <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                <input 
                  id="file-upload"
                  type="file" 
                  multiple 
                  onChange={handleFileUpload} 
                  style={{ 
                    display: 'none' 
                  }} 
                />
                <Button variant="outlined" component="span" style={{border:'0px', color:'#242634', marginTop:'10px', fontWeight:'500', fontSize:'16px'}}>
                 <img src={UploadFile} style={{marginLeft:'10px'}}></img> <span style={{marginLeft:'10px', textTransform:'capitalize'}}>Upload new file</span>
                </Button>
              </label>
              {/* <Input type="file" inputProps={{ multiple: true }} onChange={handleFileUpload}   /> */}
              <Box style={{width:'250px'}}>
              <List style={{marginTop:'30px', width:'250px'}}>
              <label  style={{ fontSize: '15px',fontWeight:'500',lineHeight:'18px' }}>Select Uploaded File</label>
                {files.map((file, index) => (
                  <ListItem button key={index} onClick={() => handleFileSelect(file)} 
                style={file === selectedFile ? selectedFileStyle : uploadedFileStyle}>
                  <PictureAsPdfRoundedIcon style={{ color: file === selectedFile ? 'white' : 'rgba(0, 70, 140, 1)' }} />
                  {/* <PdfIcon  marginRight: {'8px'} {color: file === selectedFile ? 'white' : 'black'} ></PdfIcon> */}
                    <ListItemText primaryTypographyProps={{
                        style: {
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '200px',
                        }
                      }}

                      primary={file.name}
                      secondary={formatFileSize(file.size)}
                      style={{ 
                        marginTop: '30px', 
                        width: '280px', 
                        height: '60px', 
                        padding: '8px', 
                        marginLeft:'-10px',
                        gap: '14px',
                        color: file === selectedFile ? 'white' : 'black',
                      }}
                    />
                    <IconButton 
                      onClick={(event) => {
                        event.stopPropagation();
                        handleFileRemove(file);
                      }}
                      style={{ position: 'absolute',
                      // top: '4px',
                      right: '5px',
                      // backgroundColor: 'white', // Change this to the desired background color
                      borderRadius: '50%',
                      border:file === selectedFile ? '1px solid white':'1px solid #6A737B',
                      padding: '0px', // Adjust padding to make the circle larger or smaller
                      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)',
                      color: file === selectedFile ? 'white' : 'black',
                    }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
              </Box>
              
            </Box>
            <Link href={'/records'}>
            <Button
              onClick={() => handleAction("Accept")}
              style={{
                background: 'linear-gradient(90deg, rgba(0, 70, 140, 1) 0%, rgba(7, 69, 176, 1) 25%, rgba(20, 85, 195, 1) 50%, rgba(36, 102, 217, 1) 100%)',
                color: "white",
                border: "1px solid rgb(20, 85, 195)",
                borderRadius: "1px",
                width:'280px',
                top:'65%',
                fontSize:'16px',
                fontWeight:'600'
              }}
            >
             View Records
            </Button></Link>
          </Grid>
          <Grid item xs={5} style={{ borderRight: '1px solid #ccc' }}>
            <Box p={2} display="flex" justifyContent="center" alignItems="center" height="100%">
              {selectedFile ? (
                <div>
                  <Typography variant="h6">{selectedFile.name}</Typography>
                  {/* <iframe src='selectedFile' style={{width:'100%' ,height:'500px' }} /> */}
                  
                  {/* Add logic to preview file content */}
                </div>
              ) : (
                <Typography>Select a file to preview</Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={2} display="flex" flexDirection="column"  height="100%">
            <Box style={{ display: 'flex',marginTop:'20px' , justifyContent: 'center', marginBottom: '16px', alignItems: 'center' }}>
                {currentIndex > 0 && (
                  <IconButton
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                    style={{border:'1px solid rgba(217, 217, 217, 1)',height: '26px', width: '26px', borderRadius: '50%', marginRight: '8px' }}
                  >
                    <NavigateBeforeIcon />
                  </IconButton>
                )}
                <Box style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', }}>
                  {options.map((option, index) => (
                    <Box 
                      key={index}
                      style={{ 
                        border: '1px solid #ccc', 
                        borderRadius: '8px', 
                        padding: '8px 16px', 
                        height:'25px',
                        // width:'100%',
                        background: currentIndex === index ? 'linear-gradient(90deg, rgba(0, 70, 140, 1) 0%, rgba(7, 69, 176, 1) 25%, rgba(20, 85, 195, 1) 50%, rgba(36, 102, 217, 1) 100%)' : 'white', 
                        color: currentIndex === index ? 'white' : 'black', 
                        marginRight: '8px',
                        cursor: 'pointer'
                      }}
                      onClick={() => setCurrentIndex(index)}
                    >
                      {option}
                    </Box>
                  ))}
                </Box>
                {currentIndex < options.length - 1 && (
                  <IconButton
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                    style={{ border:'1px solid rgba(217, 217, 217, 1)',height: '26px', width: '26px', borderRadius: '50%', marginLeft: '8px' }}
                  >
                    <NavigateNextIcon />
                  </IconButton>
                )}
              </Box>
              <Box  marginTop="10px">
              <label style={{fontSize:'20px',fontWeight:'500', }}>Document Results</label><Button style={{ border: '1px solid rgb(20, 85, 195)' ,  marginBottom: '10px', float:'right', borderRadius:"1px"}}  onClick={() => handleAction('Filter')} >
                <FilterAltOutlinedIcon style={{color:'rgba(85, 85, 85, 1)'}}></FilterAltOutlinedIcon><label style={{color:'black', textTransform:'capitalize'}}>Filters</label>
              </Button></Box>
              <Box marginTop={'20px'}>
              <label style={{fontSize:'16px',fontWeight:'500', }}>Actions</label>
              <div style={{ float:'right', marginTop:'-10px' }}>
              <Button  onClick={() => handleAction('Reject')}  style={selectedAction === 'Reject' ? { background: 'linear-gradient(90deg, rgba(0, 70, 140, 1) 0%, rgba(7, 69, 176, 1) 25%, rgba(20, 85, 195, 1) 50%, rgba(36, 102, 217, 1) 100%)',textTransform:'capitalize', color: 'white', border: '1px solid rgb(20, 85, 195)', borderRadius:'1px', marginBottom: '10px', marginRight:'10px' }  : {border: '1px solid rgb(20, 85, 195)', borderRadius:'1px', marginBottom: '10px',textTransform:'capitalize', marginRight:'10px', color:'black'}}>
                Reject
              </Button>
              <Button  onClick={() => handleAction('Accept')} style={selectedAction === 'Accept' ? { background: 'linear-gradient(90deg, rgba(0, 70, 140, 1) 0%, rgba(7, 69, 176, 1) 25%, rgba(20, 85, 195, 1) 50%, rgba(36, 102, 217, 1) 100%)',textTransform:'capitalize', color: 'white', border: '1px solid rgb(20, 85, 195)', borderRadius:'1px', marginBottom: '10px' }  : {border: '1px solid rgb(20, 85, 195)', borderRadius:'1px', marginBottom: '10px' ,textTransform:'capitalize', color:'black'}}>
                Accept
              </Button>
              </div>
              </Box>
              <Box p={2} mt={2} width="100%" border="1px solid #ccc" borderRadius="4px">
                <div >
                <img src={DocumentInvoice}></img><label style={{float:'right', marginTop:'5px', marginRight:'160px', fontSize:'18px',fontWeight:'500'}}>Document 1 : Invoice</label>
                </div>
                <label style={{fontSize:'16px', fontWeight:'600', marginTop:'15px'}}>Data</label>
                <Typography variant="subtitle1" style={{marginTop:'15px'}}>Name: {" Your Client Name"}</Typography>
                <Typography variant="subtitle1" style={{fontWeight:'600'}}><strong>Address:</strong> {" 1234 Clients street City, California, United States"}</Typography>
                <Typography variant="subtitle1" style={{fontWeight:'400', fontSize:'14px'}}>Date Issued: {" 26/03/21"}</Typography>
                <Typography variant="subtitle1" style={{fontWeight:'400', fontSize:'14px'}}>Amount Due:{" $1,699.48"}</Typography>
                <Typography variant="subtitle1" style={{fontWeight:'400', fontSize:'14px'}}>Due Date: {" 25/4/21"}</Typography>
                <Typography variant="subtitle1" style={{fontWeight:'400', fontSize:'14px'}}>Description: {" Invoice for payment due"}</Typography>
                <Typography variant="subtitle1" style={{fontWeight:'400', fontSize:'14px'}}>Item Name: {" Services(Cost of various services)"}</Typography>
                <Typography variant="subtitle1" style={{fontWeight:'400', fontSize:'14px'}}>Rate: {" $555 per unit"}</Typography>
                <Typography variant="subtitle1" style={{fontWeight:'400', fontSize:'14px'}}>Quantity: {" 10"}</Typography>
                <Typography variant="subtitle1" style={{fontWeight:'400', fontSize:'14px'}}>Amount: {" $5550.00"}</Typography>
                {/* <Box mt={2}>
                  <Typography variant="subtitle1"><strong>Items:</strong></Typography>
                  {invoiceDetails.items.map((item, index) => (
                    <Typography key={index} variant="body2">- {item.itemName}: {item.itemRate}</Typography>
                  ))}
                </Box> */}
              </Box>
              <Box height={'100px'} style={{height:'100px'}}>
              <TextField
                placeholder="How can I help you?"
                fullWidth
                style={{ marginTop: '16px' ,background: '#F2F5FA', width:'107%', border:'0px'}}
                InputProps={{
                  startAdornment: ( 
                    <><InputAdornment position="start" style={{ color: 'rgba(0, 70, 140, 1)', marginTop:'28px' }}>
                      <img src={CommentIcon} />
                    </InputAdornment><InputAdornment position="start" style={{ color: 'rgba(0, 70, 140, 1)' }}>
                        <ArrowCircleRightSharpIcon style={{position: 'absolute',
    bottom: '10px',
    right: '15px',
}}></ArrowCircleRightSharpIcon>
                      </InputAdornment></>
                  ),
                  sx: { height: '120px',alignItems: 'flex-start' }, 
                  
                }}
              />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
