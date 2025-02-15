import Colors from "../constants/Colors";
import useColorScheme from "./useColorScheme";

const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light
) => {
  const theme = useColorScheme();
  return props[theme] ?? Colors[theme][colorName];
};

export default useThemeColor;
