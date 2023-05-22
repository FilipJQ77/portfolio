"use client";

import {
  Box,
  Center,
  Image,
  Flex,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const projects = ["Next.js Portfolio", "Blazor Web Apps"];
  return (
    <>
      <VStack m={3}>
        <Center>
          <VStack>
            <Image
              borderRadius="full"
              boxSize="200px"
              aspectRatio="1:1"
              maxH="100%"
              src="/images/image0.jpeg"
              alt="Filip Przygoński"
            />
            <Text className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500">
              Software Engineer trying to be a Full-Stack
            </Text>
          </VStack>
        </Center>
        <Box>
          <Text pt={10} className="text-3xl font-bold text-blue-500">
            About me
          </Text>
          <Box pt={5}>
            <Text className="text-justify">
              I am an experienced Software Engineer with a strong background in
              .NET development, including ASP.NET and Blazor, with an interest
              in backend-focused full-stack web development with Next.js for
              frontend. I am also quite skilled in Python, made some
              applications in Flutter, and would like to learn technologies like
              Rust and Elixir. I am aspiring to use my experience to create
              innovative web solutions while also exploring opportunities in AI
              and Data Science. My hobbies are motorsport, simracing, tennis,
              astronomy, video games, music (and trying to create it) as well as
              exploring the nature.
            </Text>
          </Box>
        </Box>
      </VStack>
      <h2 className="ml-3 mt-24 font-bold text-gray-700 text-3xl">
        My Projects
      </h2>

      <div className="ml-3 mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/`}
            key={project}
            className="border-2 border-black rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
