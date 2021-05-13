const axios = require("axios");

const { credentials, headers } = require("./authentication");

const getTickets = (req, res) => {
  try {
    const url = `${credentials.baseUrl}/tickets.json`;
    axios.get(url, headers).then((response) => res.send(response.data));
  } catch (e) {
    console.log(e);
  }
};

const getTicket = (req, res) => {
  try {
    const url = `${credentials.baseUrl}/tickets/${req.params.id}.json`;
    axios
      .get(url, headers)
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
  getTickets,
  getTicket,
};
