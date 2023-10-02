const { check, validationResult } = require("express-validator");

exports.validate = [
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First Name is missing!"),
  check("lastName").trim().not().isEmpty().withMessage("Last Name is missing!"),
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
  check("number")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Number is missing!")
    .isNumeric()
    .withMessage("Provide a number"),
  check("street").trim().not().isEmpty().withMessage("Street is missing!"),
  check("city").trim().not().isEmpty().withMessage("City Name is missing!"),
  check("branch").trim().not().isEmpty().withMessage("Branch Name is missing!"),
  check("year").trim().not().isEmpty().withMessage("Year is missing!"),
  check("state").trim().not().isEmpty().withMessage("State Name is missing!"),
  check("zip")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Zip / Postal Code is missing!"),
  check("country")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Country Name is missing!"),
  check("linkedIn")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First Name is missing!")
    .isURL()
    .withMessage("Please Provide a valid url"),
  check("github")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First Name is missing!")
    .isURL()
    .withMessage("Please Provide a valid url"),
  check("rollNumber")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Number is missing!")
    .isNumeric()
    .withMessage("Provide a number"),
];
