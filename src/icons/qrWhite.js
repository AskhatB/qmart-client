import React from 'react';

const qrWhite = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#fff">
        <path d="M0 511.996H232.727V279.267H0V511.996ZM46.5418 325.816H186.18V465.093H46.5418V325.816Z" />
        <path d="M139.634 372.358H93.0898V418.909H139.634V372.358Z" />
        <path d="M418.91 465.454H372.354V512H418.91V465.454Z" />
        <path d="M512 465.454H465.446V512H512V465.454Z" />
        <path d="M465.451 325.816H418.909V279.267H279.267V511.996H325.816V372.358H372.354V418.909H511.996V279.267H465.451V325.816Z" />
        <path d="M0 232.732H232.727V0H0V232.732ZM46.5418 46.5418H186.18V186.18H46.5418V46.5418Z" />
        <path d="M139.634 93.0898H93.0898V139.638H139.634V93.0898Z" />
        <path d="M279.267 0V232.732H512V0H279.267ZM465.451 186.18H325.816V46.5418H465.451V186.18V186.18Z" />
        <path d="M418.91 93.0898H372.354V139.638H418.91V93.0898Z" />
      </g>
      {/* <defs>
        <clipPath id="clip0">
          <rect width="512" height="512" fill="#fff" />
        </clipPath>
      </defs> */}
    </svg>
  );
};

export default qrWhite;
