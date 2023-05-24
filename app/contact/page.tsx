"use client";

import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Card m={3} minW="20em" w="40%">
      <CardHeader>
        <Heading size="md" className="text-purple-500">
          Contact me:
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>My work e-mail address: fprzygonski.dev@gmail.com</Text>
      </CardBody>
    </Card>
  );
}
