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

const Application = () => {
  const [formValues, setFormValues] = useState({
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
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, res } = await sendApplication(formValues);
    // if (error) return updateNotification("error", error);
    console.log(error);
    console.log(formValues);
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
                  value={formValues.firstName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  value={formValues.lastName}
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
                  value={formValues.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="mobileNumber"
                  label="Mobile Number"
                  type="tel"
                  value={formValues.mobileNumber}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="rollNumber"
                  label="Roll Number"
                  value={formValues.rollNumber}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="branch"
                  label="Branch"
                  value={formValues.branch}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="year"
                  label="Year"
                  value={formValues.year}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="street"
                  label="Street Address"
                  value={formValues.street}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="city"
                  label="City"
                  value={formValues.city}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="state"
                  label="State/Province/Region"
                  value={formValues.state}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="zip"
                  label="Zip / Postal Code"
                  value={formValues.zip}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="country"
                  label="Country"
                  value={formValues.country}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="linkedIn"
                  label="LinkedIn Profile URL"
                  value={formValues.linkedIn}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="github"
                  label="GitHub Profile URL"
                  value={formValues.github}
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
                {/* {formValues.picture && (
                  <Typography sx={{ mt: 1 }}>
                    Selected file: {formValues.picture.name}
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
                {/* {formValues.resume && (
                  <Typography sx={{ mt: 1 }}>
                    Selected file: {formValues.resume.name}
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
