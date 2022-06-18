import baseTheme from 'src/core/theme';
import type { Theme } from 'src/core/theme';
import type { Device } from 'src/core/theme/breakpoints';
import { deviceList } from 'src/core/theme/breakpoints';

import { ColorModes } from 'src/providers/ColorModeProvider';

export const mediaQuery = (device: Device): string => baseTheme.mediaQueries![device];

interface ColorVariantProps {
    color: ColorModes; // 'text.highDark' for example
    theme: Theme;
}

export const colorVariant = ({ color, theme }: ColorVariantProps): string => {
    if (!color) {
        return `color: ${theme!.colors!.text.highDark};`;
    }

    let colorToSplit: string;

    if (typeof color === 'string') {
        colorToSplit = color;
    } else {
        colorToSplit = color[theme!.mode];
    }

    if (!colorToSplit.includes('.')) {
        return `color: ${colorToSplit};`;
    }

    let colorNameKey: keyof Theme['colors'];
    let variantKey: keyof Theme['colors'][typeof colorNameKey];

    // eslint-disable-next-line prefer-const
    [colorNameKey, variantKey] = colorToSplit.split('.') as [
        keyof Theme['colors'],
        keyof Theme['colors'][typeof colorNameKey],
    ];

    return theme!.colors![colorNameKey][variantKey];
};

type ResponsiveValue = string | number | null;

export const responsiveStyleFactory = (
    breakpointsValue: { _: ResponsiveValue } & { [key in Device]?: ResponsiveValue },
): ResponsiveValue[] => {
    const styles = [breakpointsValue._];

    deviceList.forEach((device: Device) => {
        const value: ResponsiveValue = breakpointsValue[device] || null;
        styles.push(value);
    });

    return styles;
};
