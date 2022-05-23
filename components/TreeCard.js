import React from "react";
import Button from "./Button";

function TreeCard({ img, treename, className, outerClassName }) {
  return (
    <div
      className={`${outerClassName} flex flex-col bg-white p-4 rounded-lg shadow-xl`}
    >
      <img
        className={`w-auto h-auto  ${className}`}
        src={`/${img}`}
        alt="tree"
      />
      <div className="flex justify-around items-center">
        <h4 className="text-2xl text-secondary-green font-bold font-londrina">
          {treename}
        </h4>
      </div>
    </div>
  );
}

export default TreeCard;
