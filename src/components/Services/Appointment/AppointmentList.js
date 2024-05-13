import React from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const AppointmentList = ({ appointments }) => {
  return (
    <Box
      id="appointment-list"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h6" sx={{ mt: 5, mb: 3 }}>
           Appointment List
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Doctor Name</TableCell>
                <TableCell>Your Name</TableCell>
                <TableCell>Your Email</TableCell>
                <TableCell>Appointment Date</TableCell>
                <TableCell>Problem Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment, index) => (
                <TableRow key={index}>
                  <TableCell>{appointment.docName}</TableCell>
                  <TableCell>{appointment.name}</TableCell>
                  <TableCell>{appointment.email}</TableCell>
                  <TableCell>
                    {appointment.appointmentDate.toLocaleString()}
                  </TableCell>
                  <TableCell>{appointment.problemType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentList;
