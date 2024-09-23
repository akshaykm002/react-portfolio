import React from "react";

export const CONTACT = {
  address: "Kattoor House, Appolo Street, P.O Kuriachira, Thrissur-680006, Kerala, India",
  phoneNo: "+91 9995631612",
  email: "akshaykm002@gmail.com",
};

const Contacts = () => {
  return (
    <div className=" py-12">
      <h1 className="text-3xl text-center my-12 ">Get In Touch</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Address */}
        <div className="p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-400 mb-2">Address</h3>
          <p className="text-gray-500">{CONTACT.address}</p>
        </div>

        {/* Phone */}
        <div className=" p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-400 mb-2">Phone</h3>
          <p className="text-gray-500">{CONTACT.phoneNo}</p>
        </div>

        {/* Email */}
        <div className=" p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-400 mb-2">Email</h3>
          <p>
            <a href={`mailto:${CONTACT.email}`} className="text-violet-500 hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
