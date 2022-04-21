import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";

const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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

export default Login;
