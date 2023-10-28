export default function Footer(props: {
  isEng: boolean;

  isDark: boolean;
}) {
  return (
    <>
      <footer className="flex flex-col gap-4 items-center my-8 text-black dark:text-white">
        <p className="text-base text-textSecondary">
          {`${
            props.isEng ? "Designed and built by" : "Conçu et construit par"
          } Julien Wolff`}
        </p>
        <p className="text-base text-textSecondary">
          ©Copyright 2022 - Julien Wolff
        </p>
      </footer>
    </>
  );
}
