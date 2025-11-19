import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "456b6131-b627-4de2-99b7-4ae54d2013dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="h-screen">
      <h2 className="text-4xl text-center mb-10">Get in touch</h2>
      <div className="flex ">
        <div className="basis-[50%] ">
          <h3>Let's talk</h3>
        </div>
        <form onSubmit={onSubmit}  className="flex flex-col basis-[50%]  gap-3">
          <label htmlFor="name">
            Your name <br />
            <input placeholder="Enter your name" className="border border-white px-4 py-2 outline-none w-full mt-1" type="text" name="name" id="name" />
          </label> 
          <label htmlFor="email">
            Your email <br />
            <input placeholder="Enter you email" className="border border-white px-4 py-2 outline-none w-full mt-1" type="text" name="email" id="email" />
          </label>
          <label htmlFor="message">
            Your message <br />
            <textarea placeholder="Enter you message" name="message" id="message" className="border border-white px-4 py-2 outline-none w-full mt-1"></textarea>
          </label>
          <input type="submit" value="submit" className="border border-white px-4 py-2 text-xl w-fit rounded-2xl hover:bg-gray-400 hover:text-black cursor-pointer "/>
          {/* <button type="submit" className="border border-white px-4 py-2 text-xl w-fit rounded-2xl hover:bg-gray-400 hover:text-black cursor-pointer ">Submit</button> */}
        </form>
      </div>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
