"use client";

import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Box, Container, Flex, Spacer } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Filip Przygoński</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <Container maxW="container.xl">
            <Box as="nav">
              <Flex>
                <Box m={3}>
                  <Link
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500"
                    href="/"
                  >
                    Filip Przygoński
                  </Link>
                </Box>
                <Spacer />
                <Box m={3}>
                  <Link
                    href="/contact"
                    className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500 hover:underline"
                  >
                    Contact
                  </Link>
                </Box>
              </Flex>
            </Box>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
