import type { HamBurgerProps } from "../types/types";

function HamburgerButton({ onClick }: HamBurgerProps) {
  return (
    <div onClick={onClick}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Menu / Hamburger_MD">
          <path
            id="Vector"
            d="M5 17H19M5 12H19M5 7H19"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

export default HamburgerButton;
