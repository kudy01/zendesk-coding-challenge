const axios = require("axios");

const { credentials, headers } = require("../authentication");

describe("Get all or an individual ticket of a user", () => {
  it("should return the total tickets of the user", async () => {
    const url = `${credentials.baseUrl}/tickets`;

    const response = await axios.get(url, headers);
    expect(response.status).toEqual(200);
  });
  it("should return an individual ticket of the user", async () => {
    const url = `${credentials.baseUrl}/tickets/4`;

    const response = await axios.get(url, headers);
    expect(response.status).toEqual(200);
  });
});
