import React from "react";

export default function Download({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={className}
    >
      <path
        d="M3.53857 17.0002C3.53857 17.9302 3.53857 18.3952 3.6408 18.7767C3.9182 19.8119 4.72684 20.6206 5.76212 20.898C6.14362 21.0002 6.6086 21.0002 7.53857 21.0002H17.5386C18.4686 21.0002 18.9336 21.0002 19.3151 20.898C20.3503 20.6206 21.159 19.8119 21.4364 18.7767C21.5386 18.3952 21.5386 17.9302 21.5386 17.0002"
        stroke="#596772"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.0386 11.5002C17.0386 11.5002 13.7244 16.0002 12.5385 16.0002C11.3527 16.0002 8.03857 11.5002 8.03857 11.5002M12.5385 15.0002V3.00018"
        stroke="#596772"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
