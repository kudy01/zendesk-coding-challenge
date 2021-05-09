const express = require("express");
const router = express.Router();

const { getTickets, getTicket } = require("./controller");

router.get("/tickets", getTickets);

router.get("/ticket/:id", getTicket);

module.exports = router;
