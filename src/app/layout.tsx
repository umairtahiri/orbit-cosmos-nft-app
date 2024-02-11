"use client";
import { QueryClient, QueryClientProvider } from "react-query";

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

import "./globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * (60 * 1000),
      cacheTime: 0,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bodyGray dark:bg-darkTheme-dark">
        <QueryClientProvider client={queryClient}>
          <div className="flex h-screen ">
            <div className="lg:hidden">
              <Sidebar />
            </div>

            <div className="w-full">
              <Header />
              <div className="w-full pt-24">{children}</div>
            </div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
