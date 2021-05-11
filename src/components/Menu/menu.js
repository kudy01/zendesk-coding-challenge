import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./styles.css";

const Menu = () => {
  const history = useHistory();

  const [isSingleTicketSelect, setIsSingleTicketSelect] = useState(false);

  const formik = useFormik({
    initialValues: {
      ticketNumber: "",
    },
    validationSchema: Yup.object({
      ticketNumber: Yup.string().required("You must enter a ticket number"),
    }),
    onSubmit: (values) => {
      history.push(`/ticket/${values.ticketNumber}`, {
        id: values.ticketNumber,
      });
    },
  });

  const toggleTextField = (entity) => {
    entity && setIsSingleTicketSelect(!isSingleTicketSelect);
  };

  return (
    <>
      <h1 className="white pv2">Zendesk Ticket Viewer</h1>
      <div className="button-container">
        <Link
          to="/tickets"
          className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-tickets br-pill buttonFont"
        >
          View tickets
        </Link>
        <button
          onClick={() => toggleTextField(true)}
          className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-ticket br-pill buttonFont"
        >
          View ticket
        </button>
        {isSingleTicketSelect && (
          <form onSubmit={formik.handleSubmit}>
            <div className="mv2">
              <label className="white">Enter ticket number</label>
              <input
                type="text"
                name="ticketNumber"
                value={formik.values.ticketNumber}
                onChange={formik.handleChange}
                className="mt1 pa2 input-reset ba b--white bw1 bg-white w-100 br3"
                placeholder="Ticket Number"
              />
              {formik.errors.ticketNumber && formik.touched.ticketNumber && (
                <p className="input-error">{formik.errors.ticketNumber}</p>
              )}
              <button
                type="submit"
                className="b concealed-width no-underline mb2 mt2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-yellow br-pill buttonFont"
              >
                Next
              </button>
            </div>
          </form>
        )}
        <Link
          to="/quit"
          className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-quit br-pill buttonFont"
        >
          Quit
        </Link>
      </div>
    </>
  );
};

export default Menu;
