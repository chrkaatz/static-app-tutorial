import React from "react";
import { Box, Heading, Paragraph } from "grommet";
import { Mail } from "grommet-icons";

export default () => (
  <Box align="center" justify="center" fill pad="medium">
    <Heading>About</Heading>
    <Heading level="3">ACME Corp</Heading>
    <Box align="center" justify="start" direction="row" gap="small">
      <Mail />
      <Paragraph>info@acme.corp</Paragraph>
    </Box>
  </Box>
);
