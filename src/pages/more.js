import React from "react";
import { Heading, Box, Nav, Button } from "grommet";

import { useNavigate } from "components/Router";

export default function More() {
  const navigate = useNavigate();
  return (
    <Box align="center" justify="center" fill pad="medium">
      <Heading data-test="header">More</Heading>
      <Box
        justify="center"
        direction="row"
        fill="horizontal"
        gap="xsmall"
        pad="xsmall"
      >
        <Nav
          align="center"
          flex={true}
          direction="column"
          fill="horizontal"
          gap="medium"
        >
          <Button
            secondary
            size="medium"
            data-test="more-nav-about"
            onClick={() => navigate("/about")}
            label="About"
          />
          <Button
            secondary
            size="medium"
            data-test="more-nav-legal"
            onClick={() => navigate("/legal")}
            label="Legal"
          />
        </Nav>
      </Box>
    </Box>
  );
}
