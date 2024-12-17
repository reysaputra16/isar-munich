"use client";
import { useEffect, useState } from "react";
import { signIn, getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "@components/LoginForm";

const SignInPage = ({ loginInfo, setLoginInfo }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <>
      {session?.user ? (
        <div className="flex flex-col gap-5 mt-10">
          <h1 className="font-satoshi font-extrabold text-3xl red_gradient">
            Already Signed In!
          </h1>
          <button
            type="button"
            onClick={() => {
              router.push("/");
            }}
            className="outline_btn"
          >
            Return Home
          </button>
        </div>
      ) : (
        <section className="w-full max-w-[500px] flex-center flex-col">
          <LoginForm />
          {/* <form className="mt-5 w-full flex flex-col gap-7 glassmorphism">
            <h2 className="font-satoshi font-semibold text-center text-gray-700 mt-3">
              Or Sign In With:
            </h2>
            <div className="border-t-2 flex-center gap-3 py-5">
              {providers &&
                Object.values(providers).map((provider) =>
                  provider.name === "Google" ? (
                    <Image
                      src="/images/google_logo.png"
                      alt="google logo"
                      width={50}
                      height={50}
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className="border-2 rounded-full hover:cursor-pointer hover:bg-gray-200 transition-colors"
                    />
                  ) : (
                    <></>
                  )
                )}
            </div>
          </form>*/}
        </section>
      )}
    </>
  );
};

export default SignInPage;
