"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitting, setSubmitting] = useState(false);

  if (submitting) {
    setSubmitting(false);
  }

  return (
    <div className="w-full max-w-full flex-center flex-col">
      <h1 className="head_text text-center">
        <span className="lime_gradient">Sign In</span>
      </h1>
      {errorMessage === "NotMatchingCredentials" ? (
        <div className="w-full mt-10 flex-center p-3 border-2 border-red-500 bg-red-200 text-red-700 rounded-full">
          Invalid E-Mail and/or Password
        </div>
      ) : errorMessage === "AccessDenied" ? (
        <div className="w-full mt-10 flex-center p-3 border-2 border-red-500 bg-red-200 text-red-700 rounded-full">
          Access Denied
        </div>
      ) : (
        <></>
      )}
      <form className="mt-10 xl:w-[500px] sm:w-[350px] md:w-[400px] flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            E-Mail Address
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail"
            type="email"
            required
            disabled={errorMessage === "FillDetails" ? true : false}
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Password
          </span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******************"
            type="password"
            required
            className="form_input"
          />
        </label>
        <button
          type="button"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          onClick={() => {
            setSubmitting(true);
            signIn("credentials", {
              email: email,
              password: password,
              redirect: "/",
            });
          }}
        >
          {submitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
