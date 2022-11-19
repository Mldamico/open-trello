import React from "react";

export const EntryCard = () => {
  return (
    <div className="mb-1 cursor-pointer bg-gray-700 p-3 hover:bg-slate-500 transition duration-200 ease-in-out rounded-xl">
      <div>
        <div>
          <p className="whitespace-pre-line">Descripcion</p>
        </div>
        <div className="flex justify-end">
          <p className="text-sm">Hace 30 minutos</p>
        </div>
      </div>
    </div>
  );
};
