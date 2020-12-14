import React from "react";
import { Heading, Box, Chart, Paragraph } from "grommet";

export default function Progress() {
  return (
    <Box align="center" justify="center" fill pad="medium">
      <Heading>Progress</Heading>
      <Chart
        type="bar"
        values={[
          { value: [0, 10] },
          { value: [1, 20] },
          { value: [2, 25] },
          { value: [3, 40] },
          { value: [4, 35] },
        ]}
      />
      <Paragraph fill>
        Tumblr lo-fi prism viral. Freegan single-origin coffee chillwave disrupt
        umami lo-fi. Scenester church-key helvetica blog yuccie sriracha
        kickstarter live-edge put a bird on it organic portland, tote bag umami
        schlitz. Quinoa beard pabst microdosing cray DIY.
      </Paragraph>
    </Box>
  );
}
