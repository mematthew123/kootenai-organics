import AgeVerifyModal from "@/components/AgeVerifyModal";
import ModalContext from "@/context/ModalContext";
import { AppProps } from "next/app";
import { useState } from "react";
import blurStyles from "../components/blur.module.css";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import "../styles/fonts.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        <AgeVerifyModal />
        {/* <Navbar /> */}
        <div className={isOpen ? blurStyles.blur : ""}>
          {/* <Layout> */}

          <ClerkProvider>
            <>
              <Component {...pageProps} /> {/* </Layout> */}
            </>
          </ClerkProvider>
        </div>
      </ModalContext.Provider>
      <Analytics />
    </>
  );
}
