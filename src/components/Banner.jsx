import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";

export default function Banner() {
  const { inProgressTickets, resolvedTickets } = useContext(TicketContext);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-8">

      {/* 90% width container */}
      <div className="w-[90%] mx-auto flex flex-col sm:flex-row gap-6 justify-center">

        {/* In Progress */}
        <div className="bg-blue-500 text-white rounded-xl p-6 flex-1 text-center shadow-md">
          <h2 className="text-lg font-semibold">In Progress</h2>
          <p className="text-3xl font-bold mt-1">
            {inProgressTickets.length}
          </p>
        </div>

        {/* Resolved */}
        <div className="bg-green-500 text-white rounded-xl p-6 flex-1 text-center shadow-md">
          <h2 className="text-lg font-semibold">Resolved</h2>
          <p className="text-3xl font-bold mt-1">
            {resolvedTickets.length}
          </p>
        </div>

      </div>
    </div>
  );
}