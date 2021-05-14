const axios = require("axios");

const { credentials, headers } = require("./authentication");

const getTickets = async (req, res) => {
  try {
    let url = `${credentials.baseUrl}/tickets.json`;
    let data = {
      tickets: [],
    };
    while (url) {
      try {
        const response = await axios.get(url, headers);
        data.tickets = [...data.tickets, ...response.data.tickets];
        url = response.data.next_page;
      } catch (err) {
        console.log(err);
        return res.status(404).json(err.message);
      }
    }
    if (!url) {
      res.send(data);
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json(e.message);
  }
};

const getTicket = (req, res) => {
  try {
    const url = `${credentials.baseUrl}/tickets/${req.params.id}.json`;
    axios
      .get(url, headers)
      .then((response) => res.send(response.data))
      .catch((err) => {
        console.log(err.message);
        return res.status(404).json(err.message);
      });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e.message);
  }
};

module.exports = {
  getTickets,
  getTicket,
};
