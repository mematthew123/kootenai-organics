import { useState } from "react";

function isInputNamedElement(
  e: Element
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

const SignupForm = () => {
  const [state, setState] = useState<string>("idle");

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setState("loading");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
      }),
    });

    setState("ready");
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleOnSubmit}>
      <label htmlFor='firstName' className='font-bold mb-2'>
        First Name
      </label>
      <input
        id='firstName'
        name='firstName'
        className='border rounded p-2 mb-4'
      />
      <label htmlFor='email' className='font-bold mb-2'>
        Email
      </label>
      <input id='email' name='email' className='border rounded p-2 mb-4' />
      <button
        className={`py-2 px-4 rounded ${
          state === "loading" ? "bg-gray-500" : "bg-blue-500 text-white"
        }`}
        disabled={state === "loading"}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
