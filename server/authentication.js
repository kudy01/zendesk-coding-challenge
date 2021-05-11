const { REACT_APP_MY_USERNAME, REACT_APP_MY_PASSWORD } = process.env;

const credentials = {
  baseUrl: "https://orca1122.zendesk.com/api/v2",
  username: REACT_APP_MY_USERNAME,
  password: REACT_APP_MY_PASSWORD,
};

const encodedString = Buffer.from(
  `${credentials.username}:${credentials.password}`,
  "utf8"
).toString("base64");

const headers = {
  headers: {
    Authorization: `Basic ${encodedString}`,
  },
};

module.exports = { credentials, headers };
