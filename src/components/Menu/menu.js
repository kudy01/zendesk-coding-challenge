import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./styles.css";

const Menu = () => {
  const history = useHistory();

  const [loginError, setLoginError] = useState("");
  const [isSingleTicketSelect, setIsSingleTicketSelect] = useState(false);
  const [isMultiTicketsSelect, setIsMultiTicketsSelect] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("You must enter an email"),
      password: Yup.string().required("You must enter a password"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      fetch("https://orca1122.zendesk.com/api/v2/users.json", {
        method: "get",
        auth: {
          user: formik.values.email,
          pass: formik.values.password,
        },
      }).then((response) => {
        console.log("response", response);
        // if (response.users) {
        //   history.push("/tickets");
        // } else {
        //   setLoginError("Email or password is incorrect");
        // }
      });
    },
  });

  const toggleTextField = (entity) => {
    entity === "singleTicket"
      ? setIsSingleTicketSelect(!isSingleTicketSelect)
      : setIsMultiTicketsSelect(!isMultiTicketsSelect);
  };

  const handleChange = (event) => {
    setTicketNumber(event.target.value);
  };

  return (
    <div className="button-container">
      <button
        onClick={() => toggleTextField("multiTicket")}
        className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-tickets br-pill buttonFont"
      >
        View tickets
      </button>
      {isMultiTicketsSelect && (
        <form onSubmit={formik.handleSubmit}>
          <div className="mv2">
            <div className="mt3">
              <label className="white">Enter your email</label>
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
                className="mt1 pa2 input-reset ba b--white bw1 bg-white w-100 br3"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="input-error">{formik.errors.email}</p>
              )}
            </div>
            <div className="mv4">
              <label className="white">Enter your password</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="mt1 pa2 input-reset ba b--white bw1 bg-white w-100 br3"
                placeholder="Password"
              />
              {formik.errors.password && formik.touched.password && (
                <p className="input-error">{formik.errors.password}</p>
              )}
              {loginError && (
                <div style={{ color: "red" }}>
                  <p>{loginError}</p>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="b concealed-width no-underline mb2 mt2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-yellow br-pill buttonFont"
            >
              Next
            </button>
          </div>
        </form>
      )}
      <button
        onClick={() => toggleTextField("singleTicket")}
        className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-ticket br-pill buttonFont"
      >
        View ticket
      </button>
      {isSingleTicketSelect && (
        <div className="mv2">
          <label className="white">Enter ticket number</label>
          <input
            type="text"
            name="ticket number"
            value={ticketNumber}
            onChange={handleChange}
            className="mt1 pa2 input-reset ba b--white bw1 bg-white w-100 br3"
            placeholder="Ticket Number"
          />
          <Link
            to="/ticket"
            className="b concealed-width no-underline mb2 mt2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-yellow br-pill buttonFont"
          >
            Next
          </Link>
        </div>
      )}
      <Link
        to="/quit"
        className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-quit br-pill buttonFont"
      >
        Quit
      </Link>
    </div>
  );
};

export default Menu;
