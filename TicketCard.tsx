import styles from "../App.module.css";
import type { Ticket } from "../types/ticket";

type Props = {
  ticket: Ticket;
  onDelete: (id: string) => void;
  onEdit?: (ticket: Ticket) => void;
};

function TicketCard({ ticket, onDelete, onEdit }: Props) {
  return (
    <div className={`${styles.ticket} ${styles[ticket.priority.toLowerCase()]}`}>
      <div>
        <b>{ticket.subject}</b>
        <p>{ticket.description}</p>
        <small>
          {ticket.status} | {ticket.createdAt}
        </small>
      </div>

      <div className={styles.btnGroup}>
        {onEdit && (
          <button
            className={styles.edit}
            onClick={() => onEdit(ticket)}
          >
            Edit
          </button>
        )}

        <button
          className={styles.delete}
          onClick={() => ticket._id && onDelete(ticket._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TicketCard;