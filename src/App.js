import React from "react";
import { Root, Routes } from "react-static";
import { Grommet, Box, Main } from "grommet";
import { grommet } from "grommet/themes";

import { Router } from "components/Router";
import Navigation from "components/Navigation";

function App() {
  return (
    <Root>
      <Grommet full theme={grommet}>
        <Box
          fill
          overflow="hidden"
          align="center"
          flex="grow"
          background={{ color: "light-1" }}
        >
          <Box align="center" justify="center" fill pad="medium">
            <React.Suspense fallback={<em>Loading...</em>}>
              <Main
                fill
                overflow="auto"
                pad="medium"
                direction="column"
                justify="start"
                align="center"
                flex="grow"
              >
                <Router>
                  <Routes path="*" />
                </Router>
              </Main>
            </React.Suspense>
          </Box>
          <Navigation />
        </Box>
      </Grommet>
    </Root>
  );
}

export default App;
