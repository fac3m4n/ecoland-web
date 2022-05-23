import React from "react";

export default function UnderlineRec({
  variant = "green-1",
  className,
  width = 18,
  height = 15,
}) {
  switch (variant) {
    case "green-1":
      return (
        <svg
          width="150"
          height="32"
          viewBox="0 0 211 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M0 5.98291L210.915 9.11132e-05L210.915 23.0001L0.737219 31.9725L0 5.98291Z"
            fill="#A8E34B"
          />
        </svg>
      );
    case "green-2":
      return (
        <svg
          width="150"
          height="32"
          viewBox="0 0 211 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M0 5.98291L210.915 9.11132e-05L210.915 23.0001L0.737219 31.9725L0 5.98291Z"
            fill="#A8E34B"
          />
        </svg>
      );
    case "white-1":
      return (
        <svg
          className={className}
          width={width}
          height={height}
          viewBox="0 0 208 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.720215 4.78442L207.279 7.25483e-05L201.786 13.5867L1.09071 20.7801L0.720215 4.78442Z"
            fill="#EDEDED"
          />
        </svg>
      );
    case "white-2":
      return (
        <svg
          width={width ? width : 291}
          height={height ? height : 28}
          viewBox="0 0 291 28"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M290.225 11.9998L14.5001 0.499931L0.82318 27.037L290.225 27.037L290.225 11.9998Z"
            fill="white"
          />
        </svg>
      );
    default:
      return (
        <svg
          width="291"
          height="28"
          viewBox="0 0 291 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M290.225 11.9998L14.5001 0.499931L0.82318 27.037L290.225 27.037L290.225 11.9998Z"
            fill="white"
          />
        </svg>
      );
  }
}
