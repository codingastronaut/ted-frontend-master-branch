type RGB = {
    r: number;
    g: number;
    b: number;
};

const hexToRGB = (hex: string): RGB => {
    if (hex.length === 3) {
        return {
            r: parseInt(hex[1], 16),
            g: parseInt(hex[2], 16),
            b: parseInt(hex[3], 16),
        };
    }

    return {
        r: parseInt(`${hex[1]}${hex[2]}`, 16),
        g: parseInt(`${hex[3]}${hex[4]}`, 16),
        b: parseInt(`${hex[5]}${hex[6]}`, 16),
    };
};

const componentToHex = (c: number): string => {
    const hex = c.toString(16);

    return hex.length === 1 ? `0${hex}` : `${hex}`;
};

const rgbToHex = (r: number, g: number, b: number): string =>
    `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

export const calculateShade = (hex: string, amount: number): string => {
    const rgb = hexToRGB(hex);

    rgb.r = Math.round(rgb.r * (1 - amount));
    rgb.g = Math.round(rgb.g * (1 - amount));
    rgb.b = Math.round(rgb.b * (1 - amount));

    return rgbToHex(rgb.r, rgb.g, rgb.b);
};

export const calculateTint = (hex: string, amount: number): string => {
    const rgb = hexToRGB(hex);

    rgb.r += (255 - rgb.r) * amount;
    rgb.g += (255 - rgb.g) * amount;
    rgb.b += (255 - rgb.b) * amount;

    return rgbToHex(Math.round(rgb.r), Math.round(rgb.g), Math.round(rgb.b));
};

export type ColorVariants = {
    m20: string;
    m30: string;
    m40: string;
    m60: string;
    m80: string;
    default: string;
    p20: string;
    p40: string;
    p60: string;
    p80: string;
};

export const generateColorVariants = (hex: string): ColorVariants => ({
    m80: calculateShade(hex, 0.8),
    m40: calculateShade(hex, 0.4),
    m60: calculateShade(hex, 0.6),
    m30: calculateShade(hex, 0.3),
    m20: calculateShade(hex, 0.2),
    default: hex,
    p20: calculateTint(hex, 0.2),
    p40: calculateTint(hex, 0.4),
    p60: calculateTint(hex, 0.6),
    p80: calculateTint(hex, 0.8),
});
