import '@/styles/globals.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";
import Loading from '@/components/Loading';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        // route to /
        router.push("/");
      } else {
        // route to /login
        router.push("/login");
      }
    };
    handleLoggedIn();
  }, []);
  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return isLoading ? <Loading/> : <Component {...pageProps} />;
}
