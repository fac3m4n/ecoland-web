import React from "react";

function Button({ type = "main", children, onClick }) {
  return (
    <button
      className={`p-2 px-4 ${
        type === "main"
          ? "bg-primary-green"
          : "bg-none border-2 border-secondary-green"
      } text-secondary-green rounded-full font-semibold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
