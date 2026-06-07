import { useEffect, useState } from "react";
import styles from "../App.module.css";
import type { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

type Props = {
  onSave: (ticket: Ticket) => void;
  editingTicket: Ticket | null;
};

function TicketForm({ onSave, editingTicket }: Props) {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TicketPriority>("Low");
  const [status, setStatus] = useState<TicketStatus>("Open");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTicket) {
      setSubject(editingTicket.subject);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
      setStatus(editingTicket.status);
    }
  }, [editingTicket]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!subject.trim()) {
      setError("Ticket subject is required.");
      return;
    }

    const newTicket: Ticket = {
      subject,
      description,
      priority,
      status,
    };

    onSave(newTicket);

    setSubject("");
    setDescription("");
    setPriority("Low");
    setStatus("Open");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <textarea
        className={styles.input}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className={styles.input}
        value={priority}
        onChange={(e) => setPriority(e.target.value as TicketPriority)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select
        className={styles.input}
        value={status}
        onChange={(e) => setStatus(e.target.value as TicketStatus)}
      >
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>

      {error && <p className={styles.error}>{error}</p>}

      <button className={styles.primary} type="submit">
        {editingTicket ? "Update Ticket" : "Create Ticket"}
      </button>
    </form>
  );
}

export default TicketForm;