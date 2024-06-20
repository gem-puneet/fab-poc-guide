import React, { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Link,
  Grid,
  InputAdornment,
  Box,
  Typography,
  Button
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from "@mui/icons-material/Search";


export const DocumentRecords = () => {
    const rows = [
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456324",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI1234562",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456243",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 10,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 3,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI12345624332",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 23,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 10,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 9,
        status: "In Progress",
        },
        {
        s_no: "PNITI12345622",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI12345623",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 11,
        status: "In Progress",
        },
        {
        s_no: "PNITI1234561",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 15,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 9,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 3,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 11,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 112,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        {
        s_no: "PNITI123456",
        created_by: "John Smith",
        created_on: "27/07/24",
        total_doc: 1,
        status: "In Progress",
        },
        ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRow, setMenuRow] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleMenuOpen = (event: any, row: any) => {
    setAnchorEl(event.currentTarget);
    setMenuRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRow(null);
  };

  const handleSearchChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.s_no.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box>
      <Container sx={{ p: 2, borderRadius: 2 }}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2
        }}
      >
        <Typography variant="h6">Total Records: {rows.length}</Typography>
        <Button variant="contained" style={{ background: 'linear-gradient(90deg, rgba(0, 70, 140, 1) 0%, rgba(7, 69, 176, 1) 25%, rgba(20, 85, 195, 1) 50%, rgba(36, 102, 217, 1) 100%)'}}>Scan and Attach</Button>
      </Grid>
      <Container  sx={{ mt: 4, p: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <TextField
              label="Search"
              variant="outlined"
              value={searchText}
              onChange={handleSearchChange}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: 1,
                padding: '6px 12px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
            >
              <FilterAltOutlinedIcon />
              <span style={{ marginLeft: '8px' }}>Filter</span>
            </Box>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "#dfe9f9", fontWeight: 600 }}>
                  Reference Number
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ backgroundColor: "#dfe9f9", fontWeight: 600 }}
                >
                  Created By
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ backgroundColor: "#dfe9f9", fontWeight: 600 }}
                >
                  Created On
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ backgroundColor: "#dfe9f9", fontWeight: 600 }}
                >
                  Total Documents
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ backgroundColor: "#dfe9f9", fontWeight: 600 }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ backgroundColor: "#dfe9f9", fontWeight: 600 }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.s_no}>
                    <TableCell component="th" scope="row">
                      <Link href={`#`}>{row.s_no}</Link>
                    </TableCell>
                    <TableCell align="right">{row.created_by}</TableCell>
                    <TableCell align="right">{row.created_on}</TableCell>
                    <TableCell align="right">{row.total_doc}</TableCell>
                    <TableCell align="right"><Box>{row.status}</Box></TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={(event) => handleMenuOpen(event, row)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && menuRow === row}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleMenuClose}>
                          View Record
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                          Delete Record
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              {filteredRows.length > (page + 1) * rowsPerPage && (
                <TableRow style={{ height: 53 * (rowsPerPage - filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length) }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        </Container>
      </Container>
    </Box>
  );
};
