"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import axios from "axios";

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
      <h1>Login</h1>
      <span>email</span>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <span>password</span>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={isFetching}>
        submit
      </button>
    </form>
  );
};

export default Page;
