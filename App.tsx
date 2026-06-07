import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

import type { Ticket } from "./types/ticket";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TicketListPage from "./pages/TicketListPage";
import CreateTicketPage from "./pages/CreateTicketPage";
import LoginPage from "./pages/LoginPage";

const API_URL = "http://localhost:5000/tickets";

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);
  const [statusFilter, setStatusFilter] = useState("All");

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Dashboard Summary
  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (t) => t.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (t) => t.status === "In Progress"
  ).length;

  const closedTickets = tickets.filter(
    (t) => t.status === "Closed"
  ).length;

  useEffect(() => {
    if (isLoggedIn) {
      loadTickets(statusFilter);
    }
  }, [statusFilter, isLoggedIn]);

  async function loadTickets(status = "All") {
    try {
      const url =
        status === "All"
          ? API_URL
          : `${API_URL}?status=${encodeURIComponent(status)}`;

      const res = await fetch(url);
      const data = await res.json();

      setTickets(data);
    } catch (err) {
      console.error("Failed to load tickets:", err);
    }
  }

  async function handleSave(ticket: Ticket) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
      });

      const newTicket = await res.json();

      setTickets((prev) => [...prev, newTicket]);
      setEditingTicket(null);
    } catch (err) {
      console.error("Failed to save ticket:", err);
    }
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this ticket?"
    );

    if (!confirmed) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setTickets((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Failed to delete ticket:", err);
    }
  }

  function handleEdit(ticket: Ticket) {
    setEditingTicket(ticket);
  }

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Navbar onLogout={handleLogout} />

        {/* Dashboard Summary */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            margin: "15px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong>Total:</strong> {totalTickets}
          </div>

          <div>
            <strong>Open:</strong> {openTickets}
          </div>

          <div>
            <strong>In Progress:</strong> {inProgressTickets}
          </div>

          <div>
            <strong>Closed:</strong> {closedTickets}
          </div>
        </div>

        {/* Status Filter */}
        <div style={{ margin: "15px" }}>
          <label>Status Filter: </label>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div style={{ margin: "15px" }}>
          <strong>Showing {tickets.length} ticket(s)</strong>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <TicketListPage
                tickets={tickets}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            }
          />

          <Route
            path="/create"
            element={
              <CreateTicketPage
                onSave={handleSave}
                editingTicket={editingTicket}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;