import React from "react";
import { useRouteData } from "react-static";
import { Heading, Box, Anchor, Text } from "grommet";

export default function News() {
  const { newsItems } = useRouteData();
  return (
    <Box align="center" justify="center" fill pad="medium">
      <Heading data-test="header">News</Heading>
      <Box align="start" justify="center">
        {newsItems.map((item) => (
          <Anchor
            data-test="news-link"
            key={item.id}
            href={`/news/${item.id}/`}
          >
            <Box align="start" justify="center" border={{ side: "bottom" }}>
              <Heading level="3" margin="small">
                {item.title}
              </Heading>
              <Text color="dark-6" margin="small">
                {item.body.substring(0, 70)}...
              </Text>
            </Box>
          </Anchor>
        ))}
      </Box>
    </Box>
  );
}
