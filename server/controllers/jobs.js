const applicationInfoSchema = require("../models/applicationInformation");

const postData = (req,res) => {
    const {firstName,lastName,email,number,street,state,city,zip,country,linkedIn,github,photo,resume} = req.body;
    
}