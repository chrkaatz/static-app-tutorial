import React from "react";
import { useRouteData } from "react-static";
import { Heading, Box, Anchor, Text } from "grommet";

export default function Item() {
  const { item } = useRouteData();
  return (
    <Box align="center" justify="center" fill pad="medium">
      <Heading>{item.title}</Heading>
      <Box align="start" justify="center">
        <Text>{item.body}</Text>
      </Box>
      <Anchor href="/news" label="< Back" />
    </Box>
  );
}
