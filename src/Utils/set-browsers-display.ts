import { BROWSERS_DISPLAY } from "../Defaults";

// macOS, Ubuntu or Anystring
export const setBrowsers = (name: string = "SynbusSolutionsB") => {
  BROWSERS_DISPLAY.BROWSERS = name;
};
