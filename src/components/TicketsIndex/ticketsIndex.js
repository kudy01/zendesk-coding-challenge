import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import axios from "axios";

const TicketsIndex = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getTickets = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tickets");
      setData(response.data.tickets);
    } catch (e) {
      setErrorMessage(e.message);
      setError(true);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Subject",
      accessor: "subject",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      id: "created_at",
      Header: "Created At",
      accessor: (d) => {
        return new Intl.DateTimeFormat("en-AD").format(new Date(d.created_at));
      },
    },
  ];

  return (
    <div>
      <div>
        <h1 className="white pa4">Zendesk Ticket Viewer</h1>
        {error ? (
          <h3 className="white pa4">Something went wrong: {errorMessage}</h3>
        ) : (
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={25}
            pageSizeOptions={[25]}
            style={{ background: "white" }}
            className="-striped -highlight"
          />
        )}
      </div>
    </div>
  );
};

export default TicketsIndex;
