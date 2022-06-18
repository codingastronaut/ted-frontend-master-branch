import { Link as ReactLink } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface HrefProps {
    pathname: string;
    query: { poolId: string };
}

export interface LinkProps {
    children: ReactNode | ReactNode[];
    href: string | HrefProps;
    target?: string;
}

const Container = styled.a<Omit<LinkProps, 'href'>>`
    display: inherit;
    text-decoration: none;
    color:green;
`;

const Link = ({ children, href, ...rest }: LinkProps): ReactElement => (
    <ReactLink to={href}>
        <Container {...rest}>{children}</Container>
    </ReactLink>
);

export default Link;
