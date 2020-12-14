import React from "react";
import { Heading, Box, Nav, Button } from "grommet";

import { useNavigate } from "components/Router";

export default function More() {
  const navigate = useNavigate();
  return (
    <Box align="center" justify="center" fill pad="medium">
      <Heading>More</Heading>
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
            onClick={() => navigate("/about")}
            label="About"
          />
          <Button
            secondary
            size="medium"
            onClick={() => navigate("/legal")}
            label="Legal"
          />
        </Nav>
      </Box>
    </Box>
  );
}
