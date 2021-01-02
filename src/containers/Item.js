import React from "react";
import { useRouteData } from "react-static";
import { Heading, Box, Text } from "grommet";

export default function Item() {
  const { item } = useRouteData();
  return (
    <Box align="center" justify="center" fill pad="medium">
      <Heading data-test="header">{item.title}</Heading>
      <Box align="start" justify="center">
        <Text data-test="news-body">{item.body}</Text>
      </Box>
    </Box>
  );
}
