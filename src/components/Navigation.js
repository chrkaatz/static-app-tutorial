import React from "react";
import { Box, Grid } from "grommet";
import { Home, Menu, Catalog } from "grommet-icons";

import { useNavigate, useLocation } from "components/Router";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getNavColor = ({ pathname }, currentPage) =>
    currentPage.indexOf(pathname) >= 0 ? "accent-1" : "light-6";

  return (
    <Box align="center" justify="center" fill="horizontal">
      <Grid
        columns={["1/3", "1/3", "1/3"]}
        fill="horizontal"
        rows={["auto"]}
        areas={[
          { name: "first", start: [0, 0], end: [0, 0] },
          { name: "second", start: [1, 0], end: [1, 0] },
          { name: "third", start: [2, 0], end: [2, 0] },
        ]}
      >
        <Box
          align="center"
          justify="center"
          background={{
            color: getNavColor(location, ["/"]),
          }}
          data-test="nav-home"
          onClick={() => navigate("/")}
          flex
          pad="medium"
          overflow="hidden"
          gridArea="first"
        >
          <Home />
        </Box>
        <Box
          align="center"
          justify="center"
          background={{
            color: getNavColor(location, ["/news"]),
          }}
          data-test="nav-news"
          flex="grow"
          onClick={() => navigate("/news")}
          pad="medium"
          overflow="hidden"
          gridArea="second"
        >
          <Catalog />
        </Box>
        <Box
          align="center"
          justify="center"
          background={{
            color: getNavColor(location, ["/more", "/legal", "/about"]),
          }}
          data-test="nav-more"
          pad="medium"
          gridArea="third"
          onClick={() => navigate("/more")}
        >
          <Menu />
        </Box>
      </Grid>
    </Box>
  );
};

export default Navigation;
