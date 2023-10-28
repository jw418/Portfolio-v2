import React from "react";
import Image from "next/image";

export default function Card(props: {
  title: string;
  image: string;
  width: number;
  height: number;
  description: string;
  descriptionEN: string;
  tag: string[];
  github?: string;
  site?: string;
  isEng: boolean;
  isDark: boolean;
}) {
  const [popupImg, setPopupImg] = React.useState({ display: "none" });
  const [hovered, setHovered] = React.useState<boolean>(false);

  const expand = () => {
    setPopupImg({
      display: "block",
    });
  };

  const close = () => {
    setPopupImg({
      display: "none",
    });
  };

  return (
    <>
      <div
        className={`h-[450px] sm:h-[550px] relative max-w-full  shadow-lg shadow-gray-600 ${
          props.isDark ? "text-white" : "text-black"
        } bg-transparent  bg-opacity-75 rounded-xl  p-[2.5%] flex flex-col border-4 border-blue-500`}
      >
        <h3 className="mt-0.5 text-2xl font-[700] ">{props.title}</h3>
        <div className="relative w-full my-5 mx-0 h-[35%] overflow-hidden rounded-lg transform transition-transform duration-200 ease-in">
          <Image
            alt="Home"
            src={`/img/capture/${props.image}`}
            width={props.width}
            height={props.height}
            onClick={expand}
            className="block w-full  mx-0  cursor-pointer rounded-lg transform transition-transform duration-200 ease-in overflow-hidden object-cover"
          />
          <Image
            className="block w-[7%] absolute top-[5px] right-[5px] bg-black rounded-[15%] opacity-75 cursor-pointer"
            src="/img/link.png"
            width={96}
            height={96}
            alt=""
            onClick={expand}
            title="Maximize"
          />
        </div>
        <div
          className="fixed top-0 left-0 bg-black bg-opacity-90 h-full w-full z-50"
          onClick={close}
          style={popupImg}
        >
          <Image
            src={`/img/capture/${props.image}`}
            alt=""
            width={props.width}
            height={props.height}
            className="border-4 border-white rounded-md max-w-[90%] max-h-[90%] object-cover cursor-pointer flex relative mx-auto my-5 mt-20"
          />
          <p className="text-white fixed text-xl top-1 right-3 p-1 px-2 rounded-lg bg-black bg-opacity-90 cursor-pointer">
            X
          </p>
        </div>

        <div className="flex-grow flex flex-col justify-between mt-0 p-2 sm:p-4">
          <p className="mt-0  text-md">
            {props.isEng ? props.descriptionEN : props.description}
          </p>

          <div className="mt-4 flex justify-center flex-wrap gap-1 ">
            {props.tag.map((tag, index) => (
              <span
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-600"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex  gap-4 justify-evenly mt-4">
            {props.github ? (
              <a
                href={props.github}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                target="_blank"
                rel="noreferrer"
                className={`flex  items-center rounded-lg border-4 border-black ${
                  props.isDark ? "hover:border-white" : "hover:border-black"
                } bg-black px-4 py-1 text-md font-medium ${
                  props.isDark ? "hover:text-white" : "hover:text-black"
                } ${props.isDark ? "text-white" : "text-white"}   ${
                  props.isDark ? "hover:bg-black" : "hover:bg-transparent"
                } focus:outline-none focus:ring active:text-gray-700`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 98 96"
                  className="w-9 mr-2.5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill={props.isDark ? "#fff" : hovered ? "#000" : "#fff"}
                  />
                </svg>
                Code
              </a>
            ) : (
              <></>
            )}
            {props.site ? (
              <a
                href={props.site}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center rounded-lg border-4 h-[52px] w-[118px] border-blue-500 bg-blue-500 px-4 py-1 text-md font-medium text-white hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring active:text-blue-300"
              >
                Website
              </a>
            ) : (
              <></>
            )}

            {!props.site && !props.github ? (
              <p className="">Coming soon</p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
