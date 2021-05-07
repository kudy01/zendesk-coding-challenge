const axios = require("axios");

const userValidity = (req, res) => {
  try {
    const url = "https://orca1122.zendesk.com/api/v2/users.json";
    axios
      .get(url, {
        auth: {
          username: "kushalstar01@gmail.com",
          password: "12345678",
        },
      })
      .then((response) => res.send(response.data));
  } catch (e) {
    console.log(e);
  }
};

const getTickets = (req, res) => {
  try {
    const url = "https://orca1122.zendesk.com/api/v2/tickets.json";
    axios
      .get(url, {
        auth: {
          username: "kushalstar01@gmail.com",
          password: "12345678",
        },
      })
      .then((response) => res.send(response.data));
  } catch (e) {
    console.log(e);
  }
};

const getTicket = (req, res) => {
  try {
    const url = `https://orca1122.zendesk.com/api/v2/tickets/${req.params.id}.json`;
    axios
      .get(url, {
        auth: {
          username: "kushalstar01@gmail.com",
          password: "12345678",
        },
      })
      .then((response) => res.send(response.data))
      .catch((err) => {
        console.log(err);
        res.send({ error: "Ticket not available" });
      });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  userValidity,
  getTickets,
  getTicket,
};
