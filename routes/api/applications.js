const express = require("express");
const router = express.Router();
// Load input validation
const validateNewappInput = require("../../validation/newapp");

// Load Application model
const Application = require("../../models/Application");

// @route POST api/newapp
// @desc Register user
// @access Public
router.post("/newapp", (req, res) => {
  // Form validation
  //Need to implement form validator
  const { errors, isValid } = validateNewappInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newApp = new Application({

    userEmail: req.body.userEmail,
    company: req.body.company,
    position: req.body.position,
    recruiterContact: req.body.recruiterContact,
    appStatus: req.body.appStatus,
    salary: req.body.salary,
    time: Date.now()
  });

  newApp
    .save()
    .then((app) => res.json(app))
    .catch((err) => res.status(400).json(err));
});


module.exports = router;
