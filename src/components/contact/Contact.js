import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

// Web3Forms access key (no .env needed)
const WEB3FORMS_ACCESS_KEY = "a34c8e4b-7d61-4afd-9319-08adb35e2add";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setSuccessMsg("");

    if (username === "") {
      setErrMsg("Username is required!");
      return;
    }
    if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      return;
    }
    if (email === "") {
      setErrMsg("Please give your Email!");
      return;
    }
    if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
      return;
    }
    if (subject === "") {
      setErrMsg("Please give your Subject!");
      return;
    }
    if (message === "") {
      setErrMsg("Message is required!");
      return;
    }

    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE"
    ) {
      setErrMsg(
        "Add your Web3Forms access key in Contact.js (WEB3FORMS_ACCESS_KEY)."
      );
      return;
    }

    setErrMsg("");
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: username,
          email,
          phone: phoneNumber,
          subject: `Portfolio: ${subject}`,
          message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setSuccessMsg(
        `Thank you ${username}, your message has been sent successfully!`
      );
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Contact form error:", error);
      setErrMsg(
        error?.message || "Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full section-pad section-line">
      <div className="flex justify-center items-center text-center">
        <Title title="Let's talk" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-full flex flex-col lgl:flex-row justify-between gap-4 sm:gap-6 items-stretch">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-5 sm:py-8 surface-card flex flex-col gap-6 sm:gap-8 p-4 sm:p-5 lgl:p-8">
            <form
              onSubmit={handleSend}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-1 sm:py-2 lgl:py-5"
            >
              {errMsg && (
                <p className="py-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-center text-orange-400 text-base tracking-wide">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 rounded-xl bg-designColor/10 border border-designColor/30 text-center text-designColor text-base tracking-wide">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-6">
                <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                  <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "border-designColor"
                    } contactInput`}
                    type="text"
                    name="name"
                    autoComplete="name"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                  <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "border-designColor"
                    } contactInput`}
                    type="text"
                    name="phone"
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "border-designColor"
                  } contactInput`}
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Please give your Subject!" &&
                    "border-designColor"
                  } contactInput`}
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "border-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                  name="message"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-designColor text-bodyColor font-semibold tracking-wide hover:brightness-110 duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
