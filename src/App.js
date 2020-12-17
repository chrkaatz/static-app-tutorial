import React from "react";
import { Head, Root, Routes } from "react-static";
import { Grommet, Box, Main } from "grommet";
import { grommet } from "grommet/themes";

import { Router } from "components/Router";
import Navigation from "components/Navigation";

function App() {
  return (
    <Root>
      {process.env.NODE_ENV === "production" && (
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            href="/icons/manifest-icon-192.png"
          />
          <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2048-2732.jpg"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2732-2048.jpg"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1668-2388.jpg"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2388-1668.jpg"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1536-2048.jpg"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2048-1536.jpg"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1668-2224.jpg"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2224-1668.jpg"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1620-2160.jpg"
            media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2160-1620.jpg"
            media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1284-2778.jpg"
            media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2778-1284.jpg"
            media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1170-2532.jpg"
            media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2532-1170.jpg"
            media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1125-2436.jpg"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2436-1125.jpg"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1242-2688.jpg"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2688-1242.jpg"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-828-1792.jpg"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1792-828.jpg"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1242-2208.jpg"
            media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-2208-1242.jpg"
            media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-750-1334.jpg"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1334-750.jpg"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-640-1136.jpg"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/apple-splash-1136-640.jpg"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link rel="manifest" href="/manifest.json"></link>
          <script src="/init-sw.js"></script>
        </Head>
      )}
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
