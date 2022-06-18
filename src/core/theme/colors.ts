import {
  generateColorVariants,
  calculateTint,
  calculateShade,
} from "./helpers";

const orangeDefaultColor = "#ff9147";
const baseDefaultColor = "#4c6d8a";
const baseGrayColor = "#929292";

const colors = {
  primary: "#0F9BE1",
  success: {
    highDark: "#19B690",
    highLight: "#CEF4EB",
  },
  commons: {
    white: "#ffffff",
    black: "#000000",
  },
  shadows: {
    base: "rgba(99, 99, 99, 0.08)",
    a12: "rgba(0, 0, 0, 0.12)",
    a10: "rgba(0, 0, 0, 0.1);",
  },
  orange: {
    m80: calculateShade(orangeDefaultColor, 0.8),
    m60: calculateShade(orangeDefaultColor, 0.6),
    m40: calculateShade(orangeDefaultColor, 0.4),
    m30: calculateShade(orangeDefaultColor, 0.3),
    m20: calculateShade(orangeDefaultColor, 0.2),
    m10: calculateShade(orangeDefaultColor, 0.1),
    default: orangeDefaultColor,
    p20: calculateTint(orangeDefaultColor, 0.2),
    p40: calculateTint(orangeDefaultColor, 0.4),
    p60: calculateTint(orangeDefaultColor, 0.6),
    p80: calculateTint(orangeDefaultColor, 0.8),
    p90: calculateTint(orangeDefaultColor, 0.9),
  },
  ocean: generateColorVariants("#47deff"),
  blue: generateColorVariants("#4791ff"),
  purple: generateColorVariants("#4B47FF"),
  pink: generateColorVariants("#AE47FF"),
  red: generateColorVariants("#ff4747"),
  green: generateColorVariants("#19B690"),
  yellow: generateColorVariants("#ffed47"),
  text: {
    highDark: `#152635`,
    mediumDark: `#949494`,
    lowDark: `#929292`,
    lowLight: `rgba(255, 255, 255, 0.32)`,
    mediumLight: `rgba(255, 255, 255, 0.64)`,
    highLight: `rgba(255, 255, 255, 0.9)`,
    noActive: "#C0C3C7",
  },
  base: {
    m100: calculateShade(baseDefaultColor, 1),
    m90: calculateShade(baseDefaultColor, 0.9),
    m80: calculateShade(baseDefaultColor, 0.8),
    m60: calculateShade(baseDefaultColor, 0.6),
    m40: calculateShade(baseDefaultColor, 0.4),
    m30: calculateShade(baseDefaultColor, 0.3),
    m20: calculateShade(baseDefaultColor, 0.2),
    m10: calculateShade(baseDefaultColor, 0.1),
    default: baseDefaultColor,
    p20: calculateTint(baseDefaultColor, 0.2),
    p30: calculateTint(baseDefaultColor, 0.3),
    p40: calculateTint(baseDefaultColor, 0.4),
    p60: calculateTint(baseDefaultColor, 0.6),
    p80: calculateTint(baseDefaultColor, 0.8),
    p90: calculateTint(baseDefaultColor, 0.9),
    p95: calculateTint(baseDefaultColor, 0.95),
    p100: calculateTint(baseDefaultColor, 1),
  },
  gray: {
    default: baseGrayColor,
    highDark: "#535353",
    mediumDark: "#717171",
    lowDark: "#707070",
    lightDefault: "#D6D6D6",
  },
  black: {
    default: "#384A63",
    highDark: "#233D62",
  },
  gradients: {
    orange: `linear-gradient(232.06deg, #FCBF49 -9.77%, #F66F4D 106.11%)`,
    green: `linear-gradient(232.06deg, #42CC93 -9.77%, #53B3CB 106.11%)`,
    purple: `linear-gradient(232.06deg, #4279CC -9.77%, #6453CB 106.11%)`,
    pink: `linear-gradient(232.06deg, #CC4274 -9.77%, #C953CB 106.11%)`,
    darkBlue: `linear-gradient(90deg, #0A253B 0%, #02090D 100%)`,
    blackWhite: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 50%, #FFFFFF 50%, #FFFFFF 100%)`,
  },
};

export default colors;
