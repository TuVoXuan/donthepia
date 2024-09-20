import * as React from "react";
const Star = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 64 64"
    {...props}
  >
    <path fill="none" d="M0 0h63.1v63.1H0V0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M62 35.1H41.599l14.396 15.296-5.657 5.657L35.1 41.714V62h-8V41.657L13.787 55.87 8.13 50.213 22.343 35.1H1.1v-8h21.185L7.912 13.627l5.657-5.657L27.1 22.401V2h8v20.343L50.556 7.787l5.657 5.657L41.657 27.1H62v8z"
    />
  </svg>
);
export default Star;
