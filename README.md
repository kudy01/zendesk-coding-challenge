## How to run (MacOS/Windows)

1. Download the repository to your local machine with the following code.

```
$ git clone https://github.com/kudy01/zendesk-coding-challenge.git
```

2.

```
   $ cd zendesk-coding-challenge/server
```

3. Create a .env file at the root and paste the credentials which I have emailed to Sabrina, so that the application can read my credentials while running.

4. Navigate to the server directory in MacOS terminal or equivalent command line application and install all the dependencies (for server side).

5. Navigate to the root of the project and install all the dependencies (for client side).

6. Install all node modules with the following code (in both client and server side).

```

$ yarn install

```

or

```

$ npm install

```

7. Run the server by going to the server directory and using

```

$ nodemon server.js

```

8. Run the client by going to the root of the project and using

```

$ yarn start

```

The browser should start the application in [http://localhost:3001](http://localhost:3001)

Note: The client would start on a different port than server so make sure to allow the client to run in a separate port.

#### Run Tests

1. Navigate to the repository directory in your MacOS Terminal or equivalent command line application.
2. Run the tests with the following command to run the tests in frontend

```

$ yarn test

```

3. Navigate to the server folder and run tests with the following command to run the tests in the backend

```

$ npm test

```

## Design Overview

### Assumptions

- Ticket requests to the Zendesk API will always return JSON with the same structure.
- Error responses from the Zendesk API will always return JSON with the same structure.
- The username and password and subdomain is used the same as used while creating the UI, the username and password have been set as enviornment variables which are passed in the backend to make requests to differnet endpoints to get data.

### Main component/pages description

#### Client Side

- `ticketsIndex.js` : Displays all the tickets of the user. It takes some time to fetch as it has to perform pagination. (Did not add a loader as no extra features were asked)
- `singleTicket.js` : Displays an individual ticket of the user based on the provided ticket number
- `menu.js` : Displays the various options available to the user.
- `home.js` : Contains the main page of the application which the user first sees while starting and also contains all the different routes which are provided using react-router-dom.

#### Server Side

- `server.js` : Contains the basic architecture of the backend server made using Express and using Cors as a middleware.
- `routes.js` : Contains the different routes used by controllers to create endpoints from where the client can make requests to the server
- `authentication.js` : Contains the username and password converted into a base64 encoded string and returned as headers to fulfil [basic authentication](https://developer.zendesk.com/rest_api/docs/support/introduction#using-basic-authentication)
- `controller.js` : Contains the data after making request to the Zendesk API to the necessary routes to get the data which is the called and displayed in the client side.
- `tickets.json` : Contains the different tickets which was added to a particular user using the cUrl command specified

### Reason for specified approach and different libraries used

- Routes were used after leveraging [react-router-dom](https://reactrouter.com/web/guides/quick-start) library to make sure for effiecient navigation on the user end and a smooth flow.

- The server was created to make requests to the Zendesk API as due to Zendesk's blocking of cross-origin fetching from the browser(client side). Learn more about [Cross Origin fetching](https://javascript.info/fetch-crossorigin#:~:text=If%20we%20send%20a%20fetch,site%2C%20it%20will%20probably%20fail.&text=Cross%2Dorigin%20requests%20%E2%80%93%20those%20sent,%3A%20Cross%2DOrigin%20Resource%20Sharing.)

- As a result the server was used to fetch the data and the client then communicated with the server with the help of cors middleware enabled in the server, to fetch the data which was then displayed in the client side and made visible to the user. Learn more about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- The returned data was displayed in a tabular form using [ReactTable](https://www.npmjs.com/package/react-table) which enabled a streamlined UI along with pagination and customisations of choice.

- [Formik](https://formik.org/docs/overview) and [Yup](https://github.com/jquense/yup) was used to do basic validation to make sure the user enters a ticket while viewing one ticket and does not keep it as an empty field.

- [Tachyons](https://tachyons.io/) was used to design the UI as it offers a quick and effective design.

- [Axios](https://axios-http.com/docs/intro) was used to make [HTTP](http://nodejs.org/api/http.html) requests from nodejs and [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser.

- [dotenv](https://www.npmjs.com/package/dotenv) was used in the backend, to get access to enviornmental variables which was used to store credentials.

## Resources

The following resources helped me know more about how the Zendesk API works and further assited me to create this application.

- Zendesk docs quick links

  - [Tickets](https://developer.zendesk.com/rest_api/docs/support/tickets)

  - [Basic Authentication](https://developer.zendesk.com/rest_api/docs/support/introduction#using-basic-authentication)

  - [Pagination](https://develop.zendesk.com/hc/en-us/articles/360001068607-Paginating-through-lists#cursor)

- [Base64 encoding](https://stackoverflow.com/questions/6182315/how-to-do-base64-encoding-in-node-js)

- Jest
  - [Router Testing](https://javascript.plainenglish.io/testing-react-router-with-jest-bc13d367bad)
  - [API Testing](https://github.com/axios/axios/issues/1754)

```

```
