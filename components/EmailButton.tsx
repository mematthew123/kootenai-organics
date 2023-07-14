import axios from "axios";
import { useState } from "react";

const EmailButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      await axios.get("/api/send");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`py-2 px-4 bg-blue-500 text-white rounded-md ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleButtonClick}
      disabled={isLoading}
    >
      {isLoading ? "Sending..." : "Send Email"}
    </button>
  );
};

export default EmailButton;
