import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import { sendApplication } from "../api/application";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Application = () => {
  const { teamName, jobName } = useParams();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    rollNumber: "",
    branch: "",
    year: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    linkedIn: "",
    github: "",
    picture: null,
    resume: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { error, res } = await sendApplication(data);
    // if (error) return updateNotification("error", error);
    // console.log(error);
    // console.log(data);
    // console.log(res);

    const data1 = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      number: data.number,
      rollNumber: data.rollNumber,
      branch: data.branch,
      year: data.year,
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
      country: data.country,
      linkedIn: data.linkedIn,
      github: data.github,
      picture: data.picture,
      resume: data.resume,
      appliedFor: teamName + "-" + jobName,
    };

    // console.log(data.resume);
    axios
      .post("http://localhost:8000/jobs/info-data", data1, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setData({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          rollNumber: "",
          branch: "",
          year: "",
          street: "",
          city: "",
          state: "",
          zip: "",
          country: "",
          linkedIn: "",
          github: "",
          picture: null,
          resume: null,
        });
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="py-5">
        <Container maxWidth="md">
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4">User Details</Typography>
          </Box>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  value={data.firstName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  value={data.lastName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="number"
                  label="Mobile Number"
                  type="tel"
                  value={data.mobileNumber}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="rollNumber"
                  label="Roll Number"
                  value={data.rollNumber}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="branch"
                  label="Branch"
                  value={data.branch}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="year"
                  label="Year"
                  value={data.year}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="street"
                  label="Street Address"
                  value={data.street}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="city"
                  label="City"
                  value={data.city}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="state"
                  label="State/Province/Region"
                  value={data.state}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="zip"
                  label="Zip / Postal Code"
                  value={data.zip}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="country"
                  label="Country"
                  value={data.country}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="linkedIn"
                  label="LinkedIn Profile URL"
                  value={data.linkedIn}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="github"
                  label="GitHub Profile URL"
                  value={data.github}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  name="picture"
                  id="photo-input"
                  // className="hidden"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
                <label htmlFor="photo-input">
                  {/* <Button component="span" variant="outlined"> */}
                  Upload Photo
                  {/* </Button> */}
                </label>
                {/* {data.picture && (
                  <Typography sx={{ mt: 1 }}>
                    Selected file: {data.picture.name}
                  </Typography>
                )} */}
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  name="resume"
                  id="resume-input"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  // className="hidden"
                />
                <label htmlFor="resume-input">
                  {/* <Button component="span" variant="outlined"> */}
                  Upload Resume
                  {/* </Button> */}
                </label>
                {/* {data.resume && (
                  <Typography sx={{ mt: 1 }}>
                    Selected file: {data.resume.name}
                  </Typography>
                )} */}
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Application;
