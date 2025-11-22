import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) alert("Message sent successfully!");
    else alert("Failed to send message");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className=" mt-20 " id="contact">
      <h2 className="text-4xl text-center mb-10 font-bold">Get in touch</h2>
      <div className="flex items-center flex-col-reverse sm:flex-row">
        <div className="sm:basis-[50%]   justify-center items-center flex flex-col  ">
          <h3 className="text-4xl">Let's talk</h3>
          <div className="flex gap-3 mt-5">
            <a href="https://www.facebook.com/sujal.shrestha.790693">
              {" "}
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-3xl  text-gray-300 hover:text-blue-500"
              />
            </a>
            <a href="https://www.instagram.com/sujal.sht/" className="  ">
              {" "}
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-3xl  text-gray-300 hover:text-pink-700"
              />
            </a>
            <a href="https://www.linkedin.com/in/sujal-shrestha-248631301/">
              {" "}
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl  text-gray-300 hover:text-blue-500"
              />
            </a>
            <a href="https://github.com/sujalshrestha01">
              {" "}
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl  text-gray-300 hover:text-gray-500"
              />
            </a>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full px-10 sm:px-2 sm:basis-[50%]  gap-3"
        >
          <label htmlFor="name">
            Your name <br />
            <input
              placeholder="Enter your name"
              className="border border-white px-4 py-2 outline-none w-full mt-1"
              type="text"
              value={form.name}
              required
              onChange={handleChange}
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="email">
            Your email <br />
            <input
              placeholder="Enter you email"
              className="border border-white px-4 py-2 outline-none w-full mt-1"
              type="text"
              value={form.email}
              required
              onChange={handleChange}
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="message">
            Your message <br />
            <textarea
              placeholder="Enter you message"
              name="message"
              value={form.message}
              onChange={handleChange}
              id="message"
              required
              className="border border-white px-4 py-2 outline-none w-full mt-1"
            ></textarea>
          </label>
          <input
            type="submit"
            value="submit"
            className="border border-white px-2 py-1 sm:px-4 sm:py-2 text-[14px] sm:text-xl w-fit rounded-xl sm:rounded-2xl hover:bg-gray-400 hover:text-black cursor-pointer "
          />
          {/* <button type="submit" className="border border-white px-4 py-2 text-xl w-fit rounded-2xl hover:bg-gray-400 hover:text-black cursor-pointer ">Submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
