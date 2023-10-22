import React, { useEffect, useState } from "react";
import { TextField, Box, Container, Grid, Typography } from "@mui/material";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useNotification } from "../hooks";
import toast from "react-hot-toast";
import { useAuth } from "../hooks";

const Application = ({ color }) => {
  const { authInfo } = useAuth();
  const [teamName, setTeamName] = useState("");
  const [jobName, setJobName] = useState("");
  const [isLoading,setLoading] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: authInfo.profile.email,
    number: 0,
    rollNumber: 0,
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const teamNameParam = params.get("teamName");
    const jobNameParam = params.get("jobName");

    if (teamNameParam && jobNameParam) {
      setTeamName(teamNameParam);
      setJobName(jobNameParam);
    }
  }, []);

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
  // const { updateNotification } = useNotification();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    // if (
    //   data.firstName.trim().length == 0 ||
    //   data.lastName.trim().length == 0 ||
    //   data.email.trim().length == 0 ||
    //   data.number < 1111111111 ||
    //   data.number > 9999999999 ||
    //   data.year.trim().length == 0 ||
    //   data.branch.trim().length == 0 ||
    //   data.state.trim().length == 0 ||
    //   data.city.trim().length == 0 ||
    //   data.country.trim().length == 0 ||
    //   data.linkedIn.trim().length == 0 ||
    //   data.github.trim().length == 0 ||
    //   data.picture === null ||
    //   data.resume === null
    // ) {
    //   return updateNotification("error", "Please Provide Correct Data");
    // }

    const data1 = {
      firstName: data.firstName?.toString(),
      lastName: data.lastName?.toString(),
      email: data.email?.toString(),
      number: data.number,
      rollNumber: data.rollNumber,
      branch: data.branch?.toString(),
      year: data.year?.toString(),
      street: data.street?.toString(),
      city: data.city?.toString(),
      state: data.state?.toString(),
      zip: data.zip?.toString(),
      country: data.country?.toString(),
      linkedIn: data.linkedIn?.toString(),
      github: data.github?.toString(),
      picture: data.picture,
      resume: data.resume,
      appliedFor: teamName?.toString() + "-" + jobName?.toString(),
    };

    // console.log(data1);
    axios
      .post(
        "https://job-portal-server-seven-xi.vercel.app/jobs/info-data",
        { ...data1 },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setData({
          firstName: "",
          lastName: "",
          email: authInfo.profile.email,
          number: 0,
          rollNumber: 0,
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
        toast.success("Application Submitted");
        setLoading(false);
        navigate("/");
        // console.log(res);
      })
      .catch((err) => {
        toast.error("Some thing went wrong");
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <Header color={color} />
      {/* <div className="py-5"> */}
      <Container maxWidth="md" sx={{ py: "2rem" }}>
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
                disabled={true}
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
                type="number"
                value={data.number}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="rollNumber"
                label="Roll Number"
                type="number"
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
              <label
                htmlFor="photo-input"
                className="text-sm text-[rgba(0,0,0,0.6)]"
              >
                Add Image
              </label>
              <input
                type="file"
                name="picture"
                id="photo-input"
                className="w-full border p-3 rounded-[4px] border-[#c4c4c4]"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
            </Grid>
            <Grid item xs={12}>
              <label
                htmlFor="photo-input"
                className="text-sm text-[rgba(0,0,0,0.6)]"
              >
                Add Resume
              </label>
              <input
                type="file"
                name="resume"
                id="resume-input"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full border p-3 rounded-[4px] border-[#c4c4c4]"
                // className="hidden"
              />
            </Grid>
            <div className="flex flex-col w-full justify-center items-center md:pt-10 pt-5">
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 text-white text-base md:text-lg font-semibold capitalize py-2 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-orange-600 hover:bg-orange-700 rounded-[8px]"
              >
                Submit
              </button>
            </div>
          </Grid>
        </form>
      </Container>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Application;
