import { SVGProps } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

import { Device } from 'src/core/theme/breakpoints';

import { ColorModes } from 'src/providers/ColorModeProvider';

import { colorVariant } from 'src/utils/styles';

export type Size =
    | 'small'
    | 'medium2'
    | 'medium'
    | 'large'
    | 'large2'
    | 'xl2'
    | 'xl3'
    | 'xl'
    | 'xxl';
export type IconSize = Size | ({ _: Size } & { [key in Device]?: Size });

export interface IconProps extends Pick<SVGProps<SVGElement>, 'fill'> {
    size?: IconSize;
    viewBox?: string;
    filled?: boolean;
    color?: ColorModes;
    transparentPath?: boolean;
    fillStroke?: boolean;
}

const sizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            width: '0.75rem',
            height: '0.75rem',
        },
        medium2: {
            width: '1rem',
            height: '1rem',
        },
        medium: {
            width: '1.5rem',
            height: '1.5rem',
        },
        large2: {
            width: '2rem',
            height: '2rem',
        },
        large: {
            width: '2.25rem',
            height: '2.25rem',
        },
        xl3: {
            width: '2.5rem',
            height: '2.5rem',
        },
        xl2: {
            width: '2.75rem',
            height: '2.75rem',
        },
        xl: {
            width: '3.5rem',
            height: '3.5rem',
        },
        xxl: {
            width: '4rem',
            height: '4rem',
        },
    },
});

const Icon = styled.svg.attrs(
    ({
        size = 'medium',
        viewBox = '0 0 24 24',
        filled = false,
        color,
        transparentPath = false,
        fillStroke = false,
    }: IconProps) => ({
        size,
        viewBox,
        filled,
        color,
        transparentPath,
        fillStroke,
    }),
)<IconProps>`
    ${sizeVariant}
    ${({ theme, color, transparentPath, fillStroke }) =>
        color &&
        css`
            color: ${colorVariant({
                color,
                theme,
            })};
            > path {
                fill: ${
                    transparentPath
                        ? 'transparent'
                        : colorVariant({
                              color,
                              theme,
                          })
                };
                ${
                    fillStroke &&
                    css`
                        stroke: ${colorVariant({
                            color,
                            theme,
                        })};
                    `
                }
        `}
`;

export default Icon;
