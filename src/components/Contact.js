import React from "react";

const Contact = () => {
    // const formRef = useRef()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
        
    //     formRef.current.reset()
    // ref = { formRef };
    // onSubmit = { handleSubmit };
    // }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline ">Contact Me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            
            action="https://getform.io/f/222ccb7b-5e44-406a-a473-4e34607d4d44"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="p-2 bg-transparent rounded-md border-2 text-white focus:outline-none"
            />
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Type your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white font-bold bg-gradient-to-b from-yellow-500 to-lime-500 px-6 py-3 my-8 mx-auto flex items-center rounded-full hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
