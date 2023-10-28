import Image from "next/image";
export default function Header(props: {
  isEng: boolean;
  toggleLang: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isDark: boolean;
  toggleStyle: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <>
      <header className="relative max-w-[1500px] w-[100%] mx-auto flex items-center justify-between flex-wrap gap-12 text-center px-2 pt-14 pb-14">
        <div className="absolute top-3 right-16">
          <div
            className={`cursor-pointer transition-ease-in-out inline-flex items-center justify-center gap-3 ${
              props.isDark ? "text-white" : "text-black"
            }`}
            onClick={props.toggleLang}
          >
            <p
              className={
                props.isEng
                  ? props.isDark
                    ? "text-blue-400 font-bold"
                    : "font-bold"
                  : ""
              }
            >
              EN
            </p>
            -
            <p
              className={
                !props.isEng
                  ? props.isDark
                    ? "text-blue-400 font-bold"
                    : "font-bold"
                  : ""
              }
            >
              FR
            </p>
          </div>
        </div>
        <div
          onClick={props.toggleStyle}
          className={`absolute top-1 right-1  cursor-pointer transition-ease-in-out text-gray-500 dark:text-gray-400 hover:bg-blue-300  dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center`}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox={props.isDark ? "0 0 20 20" : "0 0 18 20"}
          >
            {props.isDark ? (
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            ) : (
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            )}
          </svg>
        </div>

        <Image
          className="mx-auto my-12 rounded-full shadow-lg shadow-gray-600 w-[12em] xl:-w-[15em]"
          //style={{ height: "auto" }}
          src="/img/ppHeader.jpg"
          alt=""
          width={2228}
          height={2228}
        />
        <div className="pb-36 sm:pb-0 mx-auto flex flex-col justify-center gap-2">
          <h1 className="text-5xl">
            {props.isEng ? "Hi, I'm Julien Wolff" : "Bonjour, Julien Wolff"}
          </h1>
          <h3 className="text-2xl font-weight: 700">
            {props.isEng ? "Blockchain Developer" : "Développeur Blockchain"}
          </h3>

          <div className="flex justify-center flex-wrap gap-2">
            <a
              className="inline-flex items-center justify-center text-sm font-medium  h-9 rounded-md px-3"
              href="https://github.com/jw418"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                className="mr-2"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
              Github
            </a>

            <a
              className="inline-flex items-center justify-center text-sm font-medium  h-9 rounded-md px-3"
              href="mailto:wolffjulien8@gmail.com"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="mr-2"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              wolffjulien8@gmail.com
            </a>
            <a
              className="inline-flex items-center justify-center text-sm font-medium  h-9 rounded-md px-3"
              href="https://www.linkedin.com/in/julien-wolff-web3/"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                className="mr-2"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
          </div>

          <a
            href="#form"
            className={`inline-block rounded-lg ${
              props.isDark ? "bg-white" : "bg-black"
            } px-5 py-3 mx-16 font-[700] outline outline-transparent outline-2  outline-offset-4 ${
              props.isDark ? "hover:outline-white" : "hover:outline-black"
            } ${props.isDark ? "text-black" : "text-white"} sm:w-auto`}
          >
            {props.isEng ? "Get in Touch!" : "Entrez en contact!"}
          </a>
        </div>
      </header>
    </>
  );
}
