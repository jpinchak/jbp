
import { extendTheme } from "@chakra-ui/react"

export const colors = {
  mints: {
    50: "#E6FEFB",
    100: "#CDFEF8",
    200: "#97FCF0",
    300: "#65FAE9",
    400: "#34F9E2",
    500: "#07F0D5",
    600: "#06C1AB",
    700: "#04907F",
    800: "#035E53",
    900: "#01322C",
  },
  blues: {
    50: "#E6FAFE",
    100: "#CDF5FE",
    200: "#97EAFC",
    300: "#65E0FB",
    400: "#2ED4FA",
    500: "#06C5EF",
    600: "#059BBD",
    700: "#047690",
    800: "#024E5F",
    900: "#012932",
  },
  purples: {
    50: "#F5E6FE",
    100: "#EACDFE",
    200: "#D497FC",
    300: "#BF65FA",
    400: "#AA34F9",
    500: "#9207F0",
    600: "#7606C1",
    700: "#580490",
    800: "#3A035E",
    900: "#1E0132",
  },
  pinks: {
    50: "#FDE8F2",
    100: "#FBD0E5",
    200: "#F7A1CB",
    300: "#F377B3",
    400: "#EF4899",
    500: "#EB1A7E",
    600: "#C01166",
    700: "#910D4D",
    800: "#5E0832",
    900: "#2F0419",
  },
};

export const theme = extendTheme({
  colors,
});
