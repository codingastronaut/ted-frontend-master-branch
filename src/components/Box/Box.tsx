import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import * as system from 'styled-system';

import type { ColorModes } from 'src/providers/ColorModeProvider';

import { colorVariant } from 'src/utils/styles';

export interface BoxProps
    extends system.SpaceProps,
        system.LayoutProps,
        system.FlexboxProps,
        system.GridProps,
        Pick<system.ColorProps, 'opacity'>,
        system.BorderProps,
        system.ShadowProps,
        system.PositionProps,
        system.GridGapProps,
        system.TextAlignProps,
        system.TypographyProps {
    color?: ColorModes;
    borderColor?: ColorModes;
    bg?: ColorModes;
}

const Box = styled.div
    .attrs(({ color }: BoxProps) => ({ color }))
    .withConfig({
        shouldForwardProp: (prop) => !defaultFilteredProps.includes(String(prop)),
    })<BoxProps>`
    ${system.space}
    ${system.color}
    ${system.layout}
    ${system.flexbox}
    ${system.grid}
    ${system.border}
    ${system.shadow}
    ${system.position}
    ${system.textAlign}
    ${system.typography}

    ${({ theme, color }) =>
        color &&
        `
            color: ${colorVariant({
                color,
                theme,
            })};
      `}

    ${({ theme, borderColor }) =>
        borderColor &&
        `
            border-color: ${colorVariant({
                color: borderColor,
                theme,
            })};
      `}
    
    ${({ theme, bg }) =>
        bg &&
        `
            background-color: ${colorVariant({
                color: bg,
                theme,
            })};
      `}
`;

export default Box;
