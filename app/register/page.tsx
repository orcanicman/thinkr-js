"use client";
import { useState, useTransition } from "react";
import type { FormEvent } from "react";
import { createUser } from "../../lib/users";
import axios from "axios";

const Page = () => {
  const [isFetching, setIsFetching] = useState(false);

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
      <h1>Register</h1>
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
