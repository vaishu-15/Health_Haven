import {
  DateTimePicker,
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/lab";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import swal from "sweetalert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useAuth from "../../../Hooks/useAuth";
import { useLocation } from "react-router-dom";
//  import { ToastContainer, toast } from "react-toastify";
//  import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
  const { user } = useAuth();
  const [docName, setDocName] = useState("");
  const [name, setName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [problemType, setProblemType] = useState("");
  const location = useLocation();

  // useEffect(() => {
  //   const hash = location.hash;
  //   if (hash) {
  //     const doctorName = hash.substring(1); // Remove the '#' from the hash
  //     setDocName(doctorName);
  //   }
  // }, [location.hash]);

  const handleDocNameChange = (event) => {
    setDocName(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAppointmentDateChange = (newValue) => {
    setAppointmentDate(newValue);
  };

  const handleProblemTypeChange = (event) => {
    setProblemType(event.target.value);
  };

  const validateForm = () => {
    return docName !== "" && name !== "" && email !== "" && problemType !== "";
  };

  const handleSubmit = () => {
    if (validateForm()) {
      swalAlert();
    } else {
      alert("Enter the required fields");
    }
  };

  const swalAlert = () => {
    return swal("Your Appointment is Done. You will Receive a mail ASAP.", {
      button: false,
      icon: "success",
    });
  };

  return (
    <Box
      id="appointment"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h6"
          sx={{
            mt: 5,
            mb: 5,
          }}
        >
          Select your time and date for Appointment
        </Typography>

        <FormControl sx={{ mb: 5, minWidth: "50%" }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Select Doctor Name
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={docName}
            onChange={handleDocNameChange}
            autoWidth
            label="Select Doctor Name"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Mohit Tondon</MenuItem>
            <MenuItem value={11}>Anurag Mahrotra</MenuItem>
            <MenuItem value={12}>Ragesh Rastogi</MenuItem>
            <MenuItem value={13}>Ashima Malhotra</MenuItem>
            <MenuItem value={14}>Gesu Malhotra</MenuItem>
            <MenuItem value={16}>Neha Chandra</MenuItem>
            <MenuItem value={17}>Rohit Garg</MenuItem>
            <MenuItem value={18}>Johnny R. Atterberry</MenuItem>
            <MenuItem value={19}>Poonam Singh</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ mb: 2 }}
          value={name}
          onChange={handleNameChange}
          fullWidth
          label="Your Name"
          id="fullName"
        />
        <TextField
          sx={{ mb: 2 }}
          value={email}
          onChange={handleEmailChange}
          fullWidth
          label="Your Email"
          id="email"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <MobileDateTimePicker
              value={appointmentDate}
              onChange={handleAppointmentDateChange}
              label="Appointment Date"
              onError={console.log}
              minDate={new Date("2018-01-01T00:00")}
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="___/__/__ __:__ _M"
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <TextField
          sx={{ mt: 2, mb: 2 }}
          value={problemType}
          onChange={handleProblemTypeChange}
          fullWidth
          label="Problem Type"
          id="problemType"
        />

        <Button
          sx={{ p: 1, mt: 2, mb: 5 }}
          onClick={handleSubmit}
          fullWidth
          variant="contained"
        >
          <AddCircleIcon /> Confirm
        </Button>
      </Container>
    </Box>
  );
};

export default Appointment;