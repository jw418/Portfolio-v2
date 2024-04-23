import Image from "next/image";
export default function Skills(props: {
  isEng: boolean;

  isDark: boolean;
}) {
  return (
    <>
      <section
        className={`p-6 mb-10 max-w-[1400px] md:mx-2 ${
          props.isDark ? "text-white" : "text-black"
        }`}
      >
        <h2 className="text-4xl mb-6">
          {props.isEng ? "Skills" : "Compétences"}
        </h2>

        <div>
          <ul className="flex flex-wrap gap-4 justify-center text-xl ">
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/solidity-original.png"
                width={128}
                height={128}
                alt=""
              />
              Solidity
            </li>
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/ts.png"
                width={128}
                height={128}
                alt=""
              />
              Typescript
            </li>
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/react-original.png"
                width={128}
                height={128}
                alt=""
              />
              React
            </li>
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/next.png"
                width={1750}
                height={1750}
                alt=""
              />
              Next.js
            </li>
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/tailwindcss.svg"
                width={128}
                height={128}
                alt=""
              />
              TailwindCSS
            </li>

            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/truffle-original.png"
                width={400}
                height={400}
                alt=""
              />
              Truffle
            </li>
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/hardhat.svg"
                width={128}
                height={128}
                alt=""
              />
              Hardat
            </li>
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/slither.png"
                width={750}
                height={400}
                alt=""
              />
              Slither
            </li>
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/vercel.svg"
                width={161}
                height={161}
                alt=""
              />
              Vercel
            </li>
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/fleek.webp"
                width={320}
                height={320}
                alt=""
              />
              Fleek
            </li>

            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src={
                  props.isDark
                    ? "/img/github-logo-black.png"
                    : "/img/logo-formation/github-original.png"
                }
                width={128}
                height={128}
                alt=""
              />
              Git/GitHub
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-6 w-6 m-2.5"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
              </svg>
              Shadcn
            </li>
            <li className="flex items-center">
              <Image
                className="p-2.5 max-w-[45px]"
                src="/img/logo-formation/trello.png"
                width={128}
                height={128}
                alt=""
              />
              Trello
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
