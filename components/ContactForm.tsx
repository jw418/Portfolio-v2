"use client";
import { useState } from "react";
import { FormData } from "@types";

const ContactForm = (props: { isEng: boolean }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        setIsSuccess(true);
        setFormData({
          nom: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      } else {
        console.error("Email sending failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"
      id="form"
    >
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded relative">
          <strong className="font-bold">
            {props.isEng ? "Success! " : "Succès! "}
          </strong>
          <span className="block sm:inline">
            {props.isEng
              ? "Your message has been sent."
              : "Votre message a bien été envoyé."}
          </span>
        </div>
      )}

      <form action="" className="space-y-4 text-black" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">
          {props.isEng ? "Get in Touch!" : "Entrez en contact!"}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="nom">
              {props.isEng ? "Name" : "Nom"}
            </label>
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm dark:bg-white"
              placeholder={props.isEng ? "Name" : "Nom"}
              type="text" // Corrected input type
              id="nom"
              name="nom" // Added name attribute
              value={formData.nom}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm dark:bg-white"
              placeholder="Email"
              type="email"
              id="email"
              autoComplete="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="sr-only " htmlFor="message">
            Message
          </label>

          <textarea
            className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm dark:bg-white"
            placeholder="Message"
            rows={8}
            id="message"
            name="message" // Added name attribute
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
          >
            {props.isEng ? "Send" : "Envoyez"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
