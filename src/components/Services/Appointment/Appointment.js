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
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import swal from "sweetalert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useAuth from "../../../Hooks/useAuth";
import { useLocation } from "react-router-dom";
import { Dialog, DialogContent } from "@mui/material";
import { useHistory } from "react-router-dom";
import AppointmentList from "./AppointmentList.js";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [appointments, setAppointments] = useState([]);
  const history = useHistory();

  const handleDocNameChange = (event) => {
    setDocName(event.target.value);
  };

  const handleNameChange = (event) => {
    let inputValue = event.target.value;

    // Replace consecutive spaces with a single space
    inputValue = inputValue.replace(/\s{2,}/g, " ");

    // Regular expression to allow only alphabets and spaces
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(inputValue) && inputValue.length <= 30) {
      setName(inputValue);
    }
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(inputValue) && inputValue.length <= 30) {
      setEmail(inputValue);
    }
  };

  const handleAppointmentDateChange = (newValue) => {
    setAppointmentDate(newValue);
  };

  const handleProblemTypeChange = (event) => {
    let inputValue = event.target.value;

    // Replace consecutive spaces with a single space
    inputValue = inputValue.replace(/\s{2,}/g, " ");

    // Regular expression to allow only alphabets and spaces
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(inputValue) && inputValue.length <= 40) {
      setProblemType(inputValue);
    }
  };

  const validateForm = () => {
    return docName !== "" && name !== "" && email !== "" && problemType !== "";
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Create a new appointment object
      const newAppointment = {
        docName,
        name,
        email,
        appointmentDate,
        problemType,
      };

      // Update the appointments state with the new appointment
      setAppointments([...appointments, newAppointment]);

      // Clear form fields
      setDocName("");
      setName("");
      setEmail("");
      setAppointmentDate(new Date());
      setProblemType("");

      // Show success message or perform other actions
      swalAlert();
    } else {
      setErrorMessage("Please enter all the required fields.");
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleViewAppointments = () => {
    history.push("/appointment-list");
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
            <MenuItem value="Mohit Tondon">Mohit Tondon</MenuItem>
            <MenuItem value="Anurag Mahrotra">Anurag Mahrotra</MenuItem>
            <MenuItem value="Ragesh Rastogi">Ragesh Rastogi</MenuItem>
            <MenuItem value="Ashima Malhotra">Ashima Malhotra</MenuItem>
            <MenuItem value="Gesu Malhotra">Gesu Malhotra</MenuItem>
            <MenuItem value="Neha Chandra">Neha Chandra</MenuItem>
            <MenuItem value="Rohit Garg">Rohit Garg</MenuItem>
            <MenuItem value="Johnny R. Atterberry">
              Johnny R. Atterberry
            </MenuItem>
            <MenuItem value="Poonam Singh">Poonam Singh</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ mb: 2 }}
          value={name}
          onChange={handleNameChange}
          fullWidth
          label="Your Name"
          id="fullName"
          maxLength={20}
        />
        <TextField
          sx={{ mb: 2 }}
          value={email}
          onChange={handleEmailChange}
          fullWidth
          label="Your Email"
          id="email"
          maxLength={20}
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
          maxLength={20}
        />

        <Button
          sx={{ p: 1, mt: 2, mb: 5 }}
          onClick={handleSubmit}
          fullWidth
          variant="contained"
        >
          <AddCircleIcon /> Confirm
        </Button>
        <Dialog open={modalOpen} onClose={handleCloseModal}>
          <DialogContent>{errorMessage}</DialogContent>
        </Dialog>
        <Button onClick={handleViewAppointments} sx={{ mb: 5 }}>
          Appointments
        </Button>
        <AppointmentList appointments={appointments} />
      </Container>
    </Box>
  );
};

export default Appointment;
