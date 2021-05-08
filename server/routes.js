const express = require("express");
const router = express.Router();

const { userValidity, getTickets, getTicket } = require("./controller");

router.get("/auth", userValidity);

router.get("/tickets", getTickets);

router.get("/ticket/:id", getTicket);

module.exports = router;
