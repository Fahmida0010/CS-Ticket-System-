import { useContext } from "react";
import { toast } from "react-toastify";
import { TicketContext } from "../context/TicketContext";

export default function TicketCard({ ticket }) {
  const { addToInProgress } = useContext(TicketContext);

  function handleClick() {
    addToInProgress(ticket);
    toast.info(`${ticket.title} added to In Progress`);
  }

  const priorityColor =
    ticket.priority?.toLowerCase() === "high"
      ? "text-red-500"
      : ticket.priority?.toLowerCase() === "medium"
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <div
      className={`p-4 rounded-xl shadow-md cursor-pointer transition hover:shadow-lg ${
        ticket.status.toLowerCase() === "in progress"
          ? "bg-yellow-50"
          : "bg-white"
      }`}
      onClick={handleClick}
    >
      {/* Ticket ID */}
      <div className="text-sm text-pink-600 font-medium">
        #{ticket.id}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-indigo-600">
        {ticket.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-1">
        {ticket.description}
      </p>

      {/* Bottom Info */}
      <div className="flex justify-between mt-3 text-sm">
        <span className="font-medium text-emerald-600">
          {ticket.customer}
        </span>

        <span className={`font-semibold ${priorityColor}`}>
          {ticket.priority}
        </span>

        <span className="text-blue-500">
          {ticket.createdAt}
        </span>
      </div>
    </div>
  );
}