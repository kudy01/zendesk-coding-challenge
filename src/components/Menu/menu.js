import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Menu = () => {
  const [isSingleTicketSelect, setIsSingleTicketSelect] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const toggleTextField = () => {
    setIsSingleTicketSelect(!isSingleTicketSelect);
  };

  const handleChange = (event) => {
    setTicketNumber(event.target.value);
  };

  return (
    <div className="button-container">
      <Link
        to="/tickets"
        className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-tickets br-pill buttonFont"
      >
        View tickets
      </Link>
      <button
        to="/ticket"
        onClick={toggleTextField}
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
