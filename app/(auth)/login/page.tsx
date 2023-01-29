"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [isFetching, setIsFetching] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFetching(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1 className="mb-8 text-6xl font-bold text-center text-white">
        Sign in
      </h1>

      <h1 className="mb-8 font-light text-center text-white">
        Sign in and see what your friends are thinking!
      </h1>

      <input
        className="mb-8 placeholder:text-white placeholder:font-light text-white bg-darkTransparentHighlight px-4 py-3 rounded-xl w-full"
        placeholder="Email"
        type="text"
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

      <div className="mb-8 flex items-center justify-between">
        <div className="flex">
          <input
            id="rememberMe"
            type="checkbox"
            className="mr-2 ring-mainDark"
          />
          <label htmlFor="rememberMe" className="text-white font-light">
            Remember me
          </label>
        </div>

        <Link href={"#"} className="text-green underline">
          Forgot password?
        </Link>
      </div>
      <div className="flex justify-center">
        <button
          className="mb-2 px-4 py-3 rounded-xl w-full  text-white bg-green drop-shadow-2xl"
          type="submit"
          disabled={isFetching}
        >
          Login
        </button>
      </div>

      <Link href={"/register"} className="text-green underline">
        Don&apos;t have an account?
      </Link>
    </form>
  );
};

export default Page;
