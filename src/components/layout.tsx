import type { FC, PropsWithChildren } from "react";

import { Footer } from "./footer";
import { Header } from "./header";
import { Toaster } from "./ui/sonner";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Toaster />
    </>
  );
};
