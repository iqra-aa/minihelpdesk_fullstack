import TicketCard from "../components/TicketCard";
import type { Ticket } from "../types/ticket";

type Props = {
tickets: Ticket[];
onDelete: (id: string) => void;
onEdit: (ticket: Ticket) => void;
};

function TicketListPage({ tickets, onDelete, onEdit }: Props) {
if (tickets.length === 0) {
return (
<div style={{ textAlign: "center", marginTop: "40px" }}> <h2>No tickets found</h2> <p>Create your first ticket.</p> </div>
);
}

return (
<>
{tickets.map((ticket) => ( <TicketCard
       key={ticket._id}
       ticket={ticket}
       onDelete={onDelete}
       onEdit={onEdit}
     />
))}
</>
);
}

export default TicketListPage;
