import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";

const Signup = () => {
  const { user, signup } = useAuth();
  console.log(user);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
          type="email"
          value={data.email}
          name="email"
          id="email"
          placeholder="Enter email"
          required
        />
        <label>Password</label>
        <input
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
          value={data.password}
          required
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signup;
