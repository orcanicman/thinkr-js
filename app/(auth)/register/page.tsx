"use client";
import { useState, useTransition } from "react";
import type { FormEvent } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [isFetching, setIsFetching] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFetching(true);
    const { data } = await axios.post("http://localhost:3000/api/users/", {
      email,
      password,
    });
    setIsFetching(false);
    console.log(data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1 className="mb-8 text-6xl font-bold text-center text-white">
        Register
      </h1>

      <h1 className="mb-8 font-light text-center text-white">
        Make an account to see what your friends are thinking!
      </h1>

      <input
        className="mb-8 placeholder:text-white placeholder:font-light text-white bg-darkTransparentHighlight px-4 py-3 rounded-xl w-full"
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="mb-8 placeholder:text-white placeholder:font-light text-white bg-darkTransparentHighlight px-4 py-3 rounded-xl w-full"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="mb-8 placeholder:text-white placeholder:font-light text-white bg-darkTransparentHighlight px-4 py-3 rounded-xl w-full"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex justify-center">
        <button
          className="px-4 py-3 mb-2 rounded-xl w-full  text-white bg-green drop-shadow-2xl"
          type="submit"
          disabled={isFetching}
        >
          Register
        </button>
      </div>

      <Link href={"/login"} className="text-green underline">
        Already have an account?
      </Link>
    </form>
  );
};

export default Page;
