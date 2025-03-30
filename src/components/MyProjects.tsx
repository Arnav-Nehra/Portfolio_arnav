import { Button } from "@/components/ui/button";
import { BoxReveal } from "./ui/box-reveal";

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 fill-white"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const NotionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6"
    viewBox="0 0 100 100"
    fill="none"
  >
    <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z" fill="#fff"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z" fill="#000"/>
  </svg>
);

const LiveLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 fill-white"
    viewBox="0 0 24 24"
  >
    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"/>
  </svg>
);

export function BoxRevealDemo() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <div className="">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Magic UI<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="text-[#5046e6]">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
          &#x2022; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]">React</span>,
            <span className="font-semibold text-[#5046e6]">Typescript</span>,
            <span className="font-semibold text-[#5046e6]">Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]">Motion</span>
            . <br />
            &#x2022; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="flex gap-4 text-white">
          <Button className="mt-[1.6rem] bg-[#5046e6] text-white dark:hover:bg-black flex items-center gap-2">
            <LiveLinkIcon />
            Live Link
          </Button>
          <Button className="mt-[1.6rem] bg-[#5046e6] text-white dark:hover:bg-black flex items-center gap-2">
            <NotionIcon />
            Notion
          </Button>
          <Button className="mt-[1.6rem] bg-[#5046e6] text-white dark:hover:bg-black flex items-center gap-2">
            <GitHubIcon />
            Github
          </Button>
        </div>
      </BoxReveal>
      </div>
    </div>
  );
}
