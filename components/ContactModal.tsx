import React from "react";
import { getContactUs } from "@/sanity/queries/getContactUs";
import { PortableText } from "@portabletext/react";

export interface ContactModalProps {
  modalOpen: boolean;
  toggleModal: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
  modalOpen,
  toggleModal,
}) => {
  if (!modalOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div
          onClick={toggleModal}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>
        <div className="inline-block bg-gray-50 rounded-lg p-6 text-left overflow-hidden shadow-xl transform transition-all">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            To get in touch with us, you can either call or send us an email.
          </p>
          <div className="flex flex-col mt-4">
            <a
              href="tel:+1234567890"
              className="bg-blue-700 text-white py-2 px-4 rounded mb-2 hover:bg-blue-800"
            >
              Call: +1 (234) 567-890
            </a>
            <a
              href="mailto:huffordhomestead@gmail.com"
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-blue-800"
            >
              Email: huffordhomestead@gmail.com
            </a>
          </div>
          <button
            onClick={toggleModal}
            className="bg-[#ccd5aeff] text-white py-2 px-4 rounded mt-4 hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
