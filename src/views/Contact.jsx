"use client";

import { useState } from "react";
import Calendar from "../components/Calendar";

import { contactTitle } from "../data";

import FadeIn from "../components/FadeIn";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <div
      id="products"
      className="flex flex-col 2xl:flex-row 2xl:gap-2 2xl:justify-between mt-[160px] 2xl:mt-[270px] mb-[160px] max-w-[1490px]
        mx-auto px-10 w-full"
    >
      <FadeIn delay={0.2} direction="right">
        <div className="flex flex-col">
          <h1 className="text-center 2xl:text-start text-fontBlack text-5xl lg:text-[64px] font-medium mb-6">
            {contactTitle}
          </h1>
        </div>
      </FadeIn>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col my-4">
            <label className="font-bold text-gray-800" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              minLength={3}
              maxLength={150}
              required
              className=" p-4 bg-gray-50 border rounded-lg"
              autoComplete="off"
              id="name"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <label className="font-bold text-gray-800" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              minLength={5}
              maxLength={150}
              required
              className=" p-4 bg-gray-50 border rounded-lg"
              autoComplete="off"
              id="email"
            />
          </div>
          <Calendar />
          <div>
            <label className="font-bold text-gray-800" htmlFor="message">
              Aclaraciones
            </label>
            <textarea
              rows={4}
              required
              minLength={10}
              maxLength={500}
              name="message"
              className="w-full p-4 bg-gray-50 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4"
          >
            Enviar
          </button>
        </form>
    </div>
  );
}
