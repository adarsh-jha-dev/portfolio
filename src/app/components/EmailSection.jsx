"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/socials/github-icon.svg";
import LinkedinIcon from "../../../public/images/socials/linkedin-icon.svg";
import TwitterIcon from "../../../public/images/socials/twitter.svg";
import InstagramIcon from "../../../public/images/socials/instagram.svg";
import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import state from "../store";
import { useSnapshot } from "valtio";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLloading] = useState(false);

  const handleSubmit = async (e) => {
    setLloading(true);
    e.preventDefault();
    try {
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      // Form the request for sending data to the server.
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.log(error.message);
      setEmailSubmitted(false);
    } finally {
      setLloading(false);
    }
  };

  const snap = useSnapshot(state);
  const isDarkMode = snap.mode === "dark";

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5
          className={`text-xl font-bold ${
            isDarkMode ? "text-white" : "text-black"
          } my-2`}
        >
          Let&apos;s Connect
        </h5>
        <p
          className={`${
            isDarkMode ? "text-[#ADB7BE]" : "text-black"
          } mb-4 max-w-md`}
        >
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com/adarsh-jha-dev">
            <Image
              className="bg-black rounded-full"
              src={GithubIcon}
              alt="Github Icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/adarshjha0410">
            <Image
              height={40}
              width={40}
              className="mx-2"
              src={LinkedinIcon}
              alt="Linkedin Icon"
            />
          </Link>
          <Link href="https://twitter.com/Adarsh_Jha_0410">
            <Image
              height={40}
              width={40}
              className="mx-2"
              src={TwitterIcon}
              alt="Twitter Icon"
            />
          </Link>
          <Link href="https://www.instagram.com/adarsh_glimpse/">
            <Image
              height={40}
              width={40}
              className="mx-2"
              src={InstagramIcon}
              alt="Instagram Icon"
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } block mb-2 text-sm font-medium`}
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } block mb-2 text-sm font-medium`}
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } block mb-2 text-sm font-medium`}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white flex justify-center font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {!loading ? "Send Message" : <Loader2 />}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
