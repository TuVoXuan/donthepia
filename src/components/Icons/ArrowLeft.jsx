import * as React from "react";
const ArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="none" d="M16 0H0v15.1h16V0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.353 8.874h10.636V7.126H4.353l4.892-4.892L7.1 1.011 1.012 7.1 7.1 14.988l2.145-1.223-4.892-4.891z"
    />
  </svg>
);
export default ArrowLeft;
