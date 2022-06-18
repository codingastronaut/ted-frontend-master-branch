import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import { ComponentClass, ReactNode, ReactElement } from 'react';
import { useActiveViewportSize } from 'src/hooks';
import styled from 'styled-components';
import {
    variant as styledVariant,
    space,
    typography,
    textAlign,
    SpaceProps,
    TextAlignProps,
    TypographyProps as TypographyBaseProps,
} from 'styled-system';

import { Device, deviceList } from 'src/core/theme/breakpoints';

import type { ColorModes } from 'src/providers/ColorModeProvider';

import type { UseActiveViewportSizeReturn } from 'src/hooks/useActiveViewportSize';

import { colorVariant } from 'src/utils/styles';
import { textColor } from 'styled-system';

const FONT_FAMILY_SPARTAN = 'Spartan, san-serif';
const FONT_FAMILY_POPPINS = 'Poppins, sans-serif';
const FONT_FAMILY_INTER = 'Inter, san-serif';
const FONT_FAMILY_ROBOTO = 'Roboto, sans-serif';
const FONT_BOLDER = 700;
const FONT_BOLD = 600;
const FONT_REGULAR = 400;

export type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'subheader1'
    | 'subheader2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'caption1'
    | 'caption2'
    | 'overline'
    | 'link'
    | 'link2';

export type TypographyVariant = Variant | ({ _: Variant } & { [key in Device]?: Variant });

export interface TypographyProps extends SpaceProps, TextAlignProps, TypographyBaseProps {
    variant?: TypographyVariant;
    color?: ColorModes;
    as?: ComponentClass | string | null;
    children: ReactNode;
}

interface StyledTypographyProps extends TypographyProps {
    variant: TypographyVariant;
    themedColor: ColorModes;
}

export const fontsConfig = {
    h1: {
        fontFamily: FONT_FAMILY_POPPINS,
        fontSize: '64px',
        lineHeight: '96px',
        fontWeight: FONT_BOLD,
    },
    h2: {
        fontFamily: FONT_FAMILY_POPPINS,
        fontSize: '32px',
        lineHeight: '46px',
        letterSpacing: '-1.92px',
        fontWeight: FONT_BOLD,

    },
    h3: {
        fontFamily: FONT_FAMILY_POPPINS,
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: FONT_BOLD,
    },
    subheader1: {
        fontFamily: FONT_FAMILY_POPPINS,
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: FONT_BOLD,
    },
    buttonText: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '18px',
        lineHeight: '21.6px',
        fontWeight: FONT_BOLDER,
    },
    subheader2: {
        fontFamily: FONT_FAMILY_POPPINS,
        fontSize: '18px',
        lineHeight: '32px',
        fontWeight: FONT_REGULAR,
        whiteSpace: "nowrap",
    },

    subheader3: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '22px',
        lineHeight: '24px',
    },
    body1: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '16px',
        lineHeight: '24px',
    },
    body2: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: FONT_REGULAR,
    },
    body3: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: FONT_BOLD,
    },
    body4: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: FONT_REGULAR,
    },
    caption1: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: FONT_BOLD,
    },
    caption2: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: FONT_REGULAR,
    },
    overline: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: FONT_REGULAR,
    },
    link: {
        fontFamily: FONT_FAMILY_POPPINS,
        fontSize: '0.875rem',
        lineHeight: '1.5em',
        fontWeight: FONT_REGULAR,
        textDecoration: 'none',
    },
    link2: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '18px',
        lineHeight: '27px',
        fontWeight: FONT_REGULAR,
        textDecoration: 'none',
    },
    headline: {
        fontFamily: FONT_FAMILY_ROBOTO,
        fontSize: '16px',
        lineHeight: '24px',
        textDecoration: 'none',
        whiteSpace: "nowrap",
    },
};

const typographyVariant = styledVariant({
    prop: 'variant',
    variants: fontsConfig,
});

const getAsProp = (
    variant: TypographyVariant,
    activeViewportSize: UseActiveViewportSizeReturn,
): string => {
    const variantMap = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        subheader1: 'h4',
        subheader2: 'h5',
        body1: 'p',
        body2: 'p',
        body3: 'p',
        body4: 'p',
        caption1: 'p',
        caption2: 'p',
        overline: 'p',
        link: 'span',
        link2: 'span',
        headline: 'span'
    };

    // Variant is of simple string variant="h1" approach
    if (typeof variant === 'string') {
        return variantMap[variant];
    }

    // Variant is of complex object type variant={{ _: 'h2', laptop: 'h1' }}

    // Variant has key of current activeViewportSize
    if (variant[activeViewportSize]) {
        return variantMap[variant[activeViewportSize]!];
    }

    // Variant does not contain activeViewportSize key. Return the closest one.
    let closestVariantDevice = deviceList
        .slice(
            0,
            deviceList.findIndex((device) => device === activeViewportSize),
        )
        .reverse()
        .find((device) => {
            if (Object.prototype.hasOwnProperty.call(variant, device)) {
                return true;
            }

            return false;
        });

    // Variant does not contain any closest key from deviceList. Return default _ value.
    if (!closestVariantDevice) {
        closestVariantDevice = 'laptopS';
    }

    return variantMap[variant[closestVariantDevice]!];
};

const StyledTypography = styled.div.withConfig({
    shouldForwardProp: (prop) => ![...defaultFilteredProps, 'themedColor'].includes(prop),
}) <StyledTypographyProps>`
    color: ${({ theme, themedColor }) => colorVariant({ color: themedColor, theme })};

    ${typographyVariant}
    ${textAlign}
    ${space}
    ${typography}
`;

const Typography = ({
    variant = 'body2',
    color = 'text.highDark',
    as = null,
    children,
    ...rest
}: TypographyProps): ReactElement => {
    const activeViewportSize = useActiveViewportSize();
    const asPropFromVariant = getAsProp(variant, activeViewportSize);

    return (
        <StyledTypography
            variant={variant}
            themedColor={color}
            as={as || asPropFromVariant}
            {...rest}
        >
            {children}
        </StyledTypography>
    );
};

export default Typography;
