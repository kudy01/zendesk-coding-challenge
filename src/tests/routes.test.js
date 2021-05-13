import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/extend-expect";

import { Home, Menu, Quit } from "../pages";
import { SingleTicket, TicketsIndex } from "../components";

jest.mock("../pages/Home/home");
jest.mock("../pages/Menu/menu");
jest.mock("../pages/Quit/quit");
jest.mock("../components/SingleTicket/singleTicket");
jest.mock("../components/TicketsIndex/ticketsIndex");

describe("Tests for App Router", () => {
  test("should render Home page on default route", () => {
    Home.mockImplementation(() => <div>HomeMock</div>);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("HomeMock")).toBeInTheDocument();
  });

  test("should render Menu Page for menu route", () => {
    Menu.mockImplementation(() => <div>MenuMock</div>);

    render(
      <MemoryRouter initialEntries={["/menu"]}>
        <Menu />
      </MemoryRouter>
    );

    expect(screen.getByText("MenuMock")).toBeInTheDocument();
  });

  test("should render Quit Page for quit route", () => {
    Quit.mockImplementation(() => <div>QuitMock</div>);

    render(
      <MemoryRouter initialEntries={["/quit"]}>
        <Quit />
      </MemoryRouter>
    );

    expect(screen.getByText("QuitMock")).toBeInTheDocument();
  });

  test("should render SingleTicket for ticket route", () => {
    SingleTicket.mockImplementation(() => <div>SingleTicketMock</div>);

    render(
      <MemoryRouter initialEntries={["/ticket/1"]}>
        <SingleTicket />
      </MemoryRouter>
    );

    expect(screen.getByText("SingleTicketMock")).toBeInTheDocument();
  });

  test("should render TicketsIndex for tickets route", () => {
    TicketsIndex.mockImplementation(() => <div>TicketsIndexMock</div>);

    render(
      <MemoryRouter initialEntries={["/tickets"]}>
        <TicketsIndex />
      </MemoryRouter>
    );

    expect(screen.getByText("TicketsIndexMock")).toBeInTheDocument();
  });
});
