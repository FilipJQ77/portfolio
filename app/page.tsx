"use client";

import {
  Box,
  Center,
  Image,
  Flex,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
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
        <Box w="100%">
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
        <Box w="100%">
          <Text pt={10} className="text-3xl font-bold text-blue-500">
            Technologies and Experience
          </Text>
          <Box pt={5}>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            >
              <Card>
                <CardHeader>
                  <Heading size="lg" className="text-purple-500">
                    C# and .NET
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Professional work since 2021, personal on and off since
                    2018. I started with console, WinForms and WPF apps, then
                    with more experience - web applications. In professional
                    environment I mainly worked on microservices, ASP.NET MVC,
                    ASP.NET Web API, Blazor WebAssembly. Along with that I have
                    experience with Entity Framework. What I can also say is I
                    developed (or at least tried) some games in the Unity
                    Engine. I would say it is my favourite language, at least
                    for now ;)
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="lg" className="text-purple-500">
                    Python
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Created a wiki type application for small teams for the
                    Innovative Projects by Nokia initiative, as well as a 2D
                    racing game with a trained AI player for my engineering
                    thesis. Apart from that, I mainly used Python for personal
                    and university projects since 2017. In those, I used
                    packages and libraries like FastAPI, Pandas, NumPy,
                    Matplotlib, SciPy, OpenCV, PyTorch, PyGame. Personally, I
                    like Python and would like to use it more in professional
                    environments, especially for Data Science and AI projects.
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="lg" className="text-purple-500">
                    Databases
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    I worked with many databases, starting with MySQL. However
                    throughout my career I mostly used MS SQL Server and
                    PostgreSQL. I also worked with MongoDB and TinyDB as some
                    NoSQL DBs, however I would say the favourite one to work
                    with for me is Postgres and would choose it for any of my
                    projects.
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="lg" className="text-purple-500">
                    Web development
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    HTML, CSS, JS was my first experience with programming of
                    some kind back in 2015. I did not develop many websites
                    until 2020 when I started learning React. I created some
                    websites mostly for university courses and with time I
                    realised I want to be a full-stack developer. Later I
                    learned Blazor, which I used for a web app for a company
                    project, however now I would say my favourite frontend
                    technology is Next.js (and that&apos;s why this website is in
                    it).
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="lg" className="text-purple-500">
                    Testing
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    I believe that any code you write needs testing. Personally
                    I would say I like using a TDD approach for writing code and
                    testing it. As for the tech, I used NUnit, xUnit for C#,
                    unittest for Python, along with Selenium for testing some
                    web apps.
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="lg" className="text-purple-500">
                    Mobile development
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    In the last semester of my engineering&apos;s degree I had a
                    course about developing a mobile app. Our group decided to
                    use Flutter for it, and I immediately loved it. In around 2
                    months we created a Scrabble clone that had pretty much full
                    functionality. After that I worked a bit on a personal
                    project, but I have put it on a hiatus. Apart from Flutter I
                    was looking into Kotlin Native, because I heard good
                    opinions about the language itself.
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="lg" className="text-purple-500">
                    Other languages
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    My first experience with non-web programming was with C++ in
                    2016. At the time I loved solving problems with it, but
                    nowadays I would not use it anywhere. I had some experience
                    with Java, but once I learned more about C#, I never touched
                    it again. Because of Flutter I know how Dart language works.
                    Recently I am learning Elixir in spare time because I think
                    knowing functional paradigm helps a lot while writing code.
                    I want to know more about Rust, because of the love it
                    receives from its developers. And as mentioned before Kotlin
                    is also a language I considered doing a project in.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Box>
        </Box>
      </VStack>
      {/* <h2 className="ml-3 mt-24 font-bold text-gray-700 text-3xl">
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
      </div> */}
    </>
  );
}
