/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Layout from "@/components/Layout";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const Landing = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
  
    const { data, error } = await supabase
      .from("email_addresses")
      .insert([{ email: email }]);
  
    if (error) {
      console.error("Error: ", error);
    } else {
      console.log("Successfully inserted email address. ");
      setEmail(""); // clear the email field
    }
  };
  

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="mb-4">
          We're currently working on something special. Sign up below to stay
          updated!
        </p>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Landing;
