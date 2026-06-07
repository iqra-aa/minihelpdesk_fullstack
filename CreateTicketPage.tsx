import styles from "../App.module.css";
import TicketForm from "../components/TicketForm";
import type { Ticket } from "../types/ticket";

type Props = {
  onSave: (ticket: Ticket) => void;
  editingTicket: Ticket | null;
};

function CreateTicketPage({ onSave, editingTicket }: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h3>{editingTicket ? "Update Ticket" : "Create Ticket"}</h3>

        <TicketForm onSave={onSave} editingTicket={editingTicket} />
      </div>
    </div>
  );
}

export default CreateTicketPage;