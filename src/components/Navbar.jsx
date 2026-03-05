import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-700">
          CS Ticket System
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">FAQ</a>
          <a href="#" className="hover:text-blue-600">Changelog</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
          <a href="#" className="hover:text-blue-600">Download</a>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl">
            New Ticket
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">FAQ</a>
          <a href="#" className="hover:text-blue-600">Changelog</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
          <a href="#" className="hover:text-blue-600">Download</a>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl w-full">
            New Ticket
          </button>
        </div>
      )}
    </nav>
  );
}