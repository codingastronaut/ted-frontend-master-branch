import { ReactElement } from "react";
import { NavItem as NavItemType } from "src/config/navigation";
import NavItem from "src/components/NavItem";
import { Variant as TypographyVariant } from "src/components/Typography";

interface NavMenuProps {
  color: string;
  items: NavItemType[];
  variant: "primary" | "secondary" | "tertiary";
  textVariant?: TypographyVariant;
}

const NavMenu = ({
  color,
  items,
  variant = "primary",
  textVariant = "link",
}: NavMenuProps): ReactElement | null => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map(({ title, href }) => (
        <NavItem
          key={`${variant}-${href}`}
          title={title}
          href={href}
          color={color}
          variant={variant}
          textVariant={textVariant}
        />
      ))}
    </>
  );
};

export default NavMenu;
