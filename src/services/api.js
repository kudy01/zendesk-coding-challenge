const request = require("request");

const options = {
  url: "https://orca1122.zendesk.com/api/v2/users.json",
  auth: {
    user: "kushalstar01@gmail.com",
    pass: "12345678",
  },
};

const callback = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
};

request(options, callback);

// const dotenv = require("dotenv");
// const axios = require("axios").default;

// dotenv.config();

// const baseUrl = "https://macos.zendesk.com/api/v2/";

// const auth = {
//   username: process.env.MY_EMAIL,
//   password: process.env.MY_PASSWORD,
// };

// async function getAllTickets() {
//   return await axios({
//     method: "get",
//     url: `${baseUrl}tickets`,
//     responseType: "json",
//     auth: auth,
//   });
// }

// async function getTicket(id) {
//   return await axios({
//     method: "get",
//     url: `${baseUrl}tickets/${id}`,
//     responseType: "json",
//     auth: auth,
//   });
// }
