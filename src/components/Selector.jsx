import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { productsServices } from "../data";

const Selector = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-52 xs:w-72 xs:h-80 font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white border w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Selecciona el servicio"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="¿Qué servicio te intersa?"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {productsServices.map((service, index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              service.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              service.name?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"
            }`}
            onClick={() => {
              if (service.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(service.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            <div className="flex justify-between items-center">
              <span className="mr-2">{service.name}</span>
              <span className="text-right">${service.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
