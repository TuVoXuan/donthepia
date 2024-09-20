import * as React from "react";
const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 12 12"
    {...props}
  >
    <path fill="none" d="M0 0h11.1v12H0V0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.735 6.655H.758V5.344h7.977L5.066 1.676 5.1.759 11.242 5.1 5.1 11.241l-.034-.917 3.669-3.669z"
    />
  </svg>
);
export default ArrowRight;
