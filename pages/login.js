import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";

const Login = () => {

    const [email, setEmail] = useState("");
    const [userMsg, setUserMsg] = useState("");

    const router = useRouter();
    
    const handleOnChangeEmail = (e) => {
      setUserMsg("");
      console.log("event", e);
      const email = e.target.value;
      setEmail(email);
    };

const handleLogin=async (e)=>{
    console.log("Hi login");
    e.preventDefault();
    if (email) {
        if (email === "aniketreuls@gmail.com") {
            try {
                const didToken = await magic.auth.loginWithMagicLink({
                  email,
                });
                console.log({ didToken });
                if (didToken) {
                    router.push("/");
                  }
              } catch (error) {
                // Handle errors if required!
                console.error("Something went wrong logging in", error);
              }
            // router.push("/");
          } else {
            
            setUserMsg("Something went wrong logging in");
          }
      } else {
        // show user message
        setUserMsg("Enter a valid email address");
      }
}

  return (
    <div>
      <Head>
        <title>Netflix-signIn</title>
      </Head>

      <div className="h-screen bg-[url(/static/signin-2.png)] bg-cover bg-center bg-opacity-20">
        <header>
          <div className={styles.headerWrapper}>
            <Link className={styles.logoLink} href="/">
              <div className={styles.logoWrapper}>
                <Image
                  src="/static/netflix.svg"
                  alt="Netflix logo"
                  width={128}
                  height={34}
                />
              </div>
            </Link>
          </div>
        </header>
        <div className="flex items-center justify-center pt-20">

        <div className=" bg-black/70 backdrop-blur-md flex flex-col gap-3 w-[500px] h-[300px]  items-center rounded-md">
          <h3 className="text-3xl p-8">Sign In</h3>
          <input
            type="email"
            className="py-2 px-2 rounded-md bg-gray-500/30 focus:outline-none w-[19rem]"
            placeholder="Enter your email"
            onChange={handleOnChangeEmail}
            />
            <p className="text-sm text-red-500 font-light">{userMsg}</p>
            <button onClick={handleLogin} className="px-12 py-2 rounded-md bg-red-500 text-base flex items-center justify-center">Sign in</button>
        </div>
            </div>
      </div>
    </div>
  );
};

export default Login;
