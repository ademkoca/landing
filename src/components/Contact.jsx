import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  console.log(formData);

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData((prevState) => ({ ...prevState, [name]: value }));
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server or email here
    alert(`Thanks, ${name} (${email}) for sending ${message}`);
    window.location.reload();
  };

  return (
    <div className="md:flex md:flex-col md:items-center mx-auto bg-black mt-12">
      <form onSubmit={handleSubmit} className="md:w-[50vw]">
        <div className="font-bold text-xl md:text-5xl mb-8 mt-12 text-center text-white">
          Contact us
        </div>
        <div className="mb-4">
          <label
            className="block font-bold text-white text-sm mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="name"
            name="name"
            type="text"
            value={name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold text-white text-sm mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="email"
            name="email"
            type="email"
            value={email}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold text-white text-sm mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="message"
            name="message"
            rows="4"
            value={message}
            required
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between pb-12">
          <button
            className="btn bg-white text-black font-bold py-3 px-6 rounded-md"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
