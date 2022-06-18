import { createGlobalStyle, DefaultTheme, ThemeProps } from 'styled-components';

import { ColorMode } from 'src/providers/ColorModeProvider/ColorModeContext';

import { colorVariant } from 'src/utils/styles';

import { baseFontSize } from './theme/fontSizes';

interface GlobalStylesProps extends ThemeProps<DefaultTheme> {
    colorMode: ColorMode;
}

const GlobalStyle = createGlobalStyle<GlobalStylesProps>`

:root {
    --scrollbarBG: #19b690;
  }

    body {
        margin: 0;
        padding: 0;
        font-size: ${baseFontSize}px;
        -webkit-font-smoothing: antialiased;
        background-color: transparent;
        word-break: break-all;
    }
    a {
        text-decoration: none;
    }
    
    body.no-scroll {
        overflow-y: hidden;
    }

    * {
        box-sizing: border-box;
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    svg {
        fill: currentColor;
    }

    textarea, select, input {
      outline: unset;
      border: 0;
      width: 100%;
      font-size: 1rem;
      line-height: 1.5rem;
      border-radius: 8px;
      &:disabled {
        opacity: 32%;
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    *::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    * {
        scrollbar-width: thin;
        scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    }
    *::-webkit-scrollbar-track {
    }
    *::-webkit-scrollbar-thumb {
        background-color: var(--thumbBG) ;
        border-radius: 5px;
        cursor: pointer;
    }
`;

export default GlobalStyle;
