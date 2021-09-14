import * as React from "react";

function GoogleLogo(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M21.805 10.041H21V10h-9v4h5.651A5.998 5.998 0 016 12a6 6 0 016-6c1.53 0 2.921.577 3.98 1.52L18.81 4.69A9.954 9.954 0 0012 2C6.478 2 2 6.478 2 12c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.195-1.959z'
        fill='#FFC107'
      />
      <path
        d='M3.153 7.346l3.285 2.409A5.997 5.997 0 0112 6c1.53 0 2.921.577 3.98 1.52L18.81 4.69A9.954 9.954 0 0012 2a9.994 9.994 0 00-8.847 5.346z'
        fill='#FF3D00'
      />
      <path
        d='M12 22c2.583 0 4.93-.988 6.704-2.596l-3.095-2.619A5.955 5.955 0 0112 18a5.997 5.997 0 01-5.641-3.973L3.098 16.54C4.753 19.778 8.114 22 12 22z'
        fill='#4CAF50'
      />
      <path
        d='M21.805 10.041H21V10h-9v4h5.651a6.02 6.02 0 01-2.043 2.785h.002l3.095 2.619C18.485 19.602 22 17 22 12c0-.67-.069-1.325-.195-1.959z'
        fill='#1976D2'
      />
    </svg>
  );
}

export default GoogleLogo;
