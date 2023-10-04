const { check, validationResult } = require("express-validator");

exports.validateFormInput = [
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First Name is missing!"),
  check("lastName").trim().not().isEmpty().withMessage("Last Name is missing!"),
  check("number")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Number is missing!")
    .isNumeric()
    .withMessage("Provide a number"),
  check("rollNumber")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Roll Number is missing!")
    .isNumeric()
    .withMessage("Provide a number"),
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
  check("street").trim().not().isEmpty().withMessage("Street is missing!"),
  check("city").trim().not().isEmpty().withMessage("City Name is missing!"),
  check("country")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Country Name is missing!"),
  check("github")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Github URL is missing!")
    .isURL()
    .withMessage("Please provide a valid URL for Github"),
  check("linkedIn")
    .trim()
    .not()
    .isEmpty()
    .withMessage("LinkedIn URL is missing!")
    .isURL()
    .withMessage("Please provide a valid URL for LinkedIn"),
  check("picture").notEmpty().withMessage("Picture not provided!"),
  check("resume").notEmpty().withMessage("Resume not provided!"),
  check("branch").trim().not().isEmpty().withMessage("Branch Name is missing!"),
  check("year").trim().not().isEmpty().withMessage("Year is missing!"),
  check("zip")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Zip / Postal Code is missing!"),
  check("state").trim().not().isEmpty().withMessage("State Name is missing!"),
];

exports.validateFormInputMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
