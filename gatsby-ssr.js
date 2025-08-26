/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { theme } from "./src/theme";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider value={theme}>{element}</ThemeProvider>;
};