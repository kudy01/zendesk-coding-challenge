import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SingleTicket = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const id = location.state.id; // can change to session storage to prevent undefined errors

  const getTicket = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/ticket/${id}`);
      if (!response.data.ticket) {
        setErrorMessage(response.data.error);
        setError(true);
      } else {
        setData(response.data.ticket);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setError(true);
    }
  };

  useEffect(() => {
    getTicket(id);
  }, [id]);

  return (
    <>
      <h1 className="white pa4">Zendesk Ticket Viewer</h1>
      {error ? (
        <h3 className="white pa4">Something went wrong: {errorMessage}</h3>
      ) : (
        <div className="ml4 mt5">
          <div className="tl pb1">
            <h1 className="f4 yellow-view">ID</h1>
            <h1 className="f4 white">{data.id}</h1>
          </div>
          <div className="tl pb1">
            <h1 className="f4 yellow-view">Subject</h1>
            <h1 className="f4 white">{data.subject}</h1>
          </div>
          <div className="tl pb1">
            <h1 className="f4 yellow-view">Description</h1>
            <h1 className="f4 white">{data.description}</h1>
          </div>
          <div className="tl pb1">
            <h1 className="f4 yellow-view">Status</h1>
            <h1 className="f4 white">{data.status}</h1>
          </div>
          <div className="tl pb1">
            <h1 className="f4 yellow-view">Created At</h1>
            <h1 className="f4 white">
              {data.created_at && data.created_at.slice(0, 10)}
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleTicket;
