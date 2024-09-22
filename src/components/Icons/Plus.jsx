import * as React from "react";
const Plus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M24.004 0h-24v23.1h24V0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m23.029 13.078-9.955-.011.011 9.984-2.172-.001-.011-9.986-9.929-.011-.003-2.171 9.93.011-.011-9.9 2.172.002.011 9.9 9.954.011.003 2.172z"
    />
  </svg>
);
export default Plus;
