import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContextProvider";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";



const noAuthRequired = ["/", "/login", "/signup"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      smooth: true,
    })

    function raf() {
      lenis.raf()
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
