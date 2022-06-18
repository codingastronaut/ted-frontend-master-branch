import { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from 'src/core/GlobalStyle';
import theme from 'src/core/theme';

import ColorModeProvider from '../ColorModeProvider';

const ThemeProvider = ({ children }: { children: ReactElement }): ReactElement => (
    <ColorModeProvider>
        {(colorMode) => (
            <StyledThemeProvider theme={{ ...theme, mode: colorMode }}>
                <GlobalStyle colorMode={colorMode} />
                {children}
            </StyledThemeProvider>
        )}
    </ColorModeProvider>
);

export default ThemeProvider;
