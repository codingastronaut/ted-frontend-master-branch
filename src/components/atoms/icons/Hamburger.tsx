import { ReactElement } from 'react';
import Icon, { IconProps } from 'src/components/atoms/Icon';

const Hamburger = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} {...rest}>
        <rect x="2" y="11" width="20" height="2" rx="1" />
        <rect x="2" y="7" width="20" height="2" rx="1" />
        <rect x="2" y="15" width="20" height="2" rx="1" />
    </Icon>
);

export default Hamburger;
