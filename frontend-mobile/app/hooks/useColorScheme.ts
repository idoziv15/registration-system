import React from 'react';
import { ColorSchemeName, useColorScheme as _useColorScheme } from "react-native";

/**
 * Get the system color scheme: "light" | "dark" | null
 */
const useColorScheme = (): NonNullable<ColorSchemeName> => {
  return _useColorScheme() ?? "light";
};

export default useColorScheme;
