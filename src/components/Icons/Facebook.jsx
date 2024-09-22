import * as React from "react";
const Facebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="none" d="M0 0h20v20H0V0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.8 19.272V10.81h2.736l.41-3.298H11.8V5.407c0-.955.256-1.606 1.575-1.606l1.683-.002V.851A21.65 21.65 0 0 0 12.605.72c-2.425 0-4.087 1.537-4.087 4.36v2.432H5.774v3.298h2.744v8.462H11.8z"
    />
  </svg>
);
export default Facebook;
