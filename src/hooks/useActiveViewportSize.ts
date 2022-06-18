import { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";

import breakpoints, { Device } from "src/core/theme/breakpoints";

export type UseActiveViewportSizeReturn = Device | "_";

interface StripPxFromBreakpointProps {
  breakpoint: string;
}

const stripPxFromBreakpoint = ({
  breakpoint,
}: StripPxFromBreakpointProps): string =>
  breakpoint.substring(0, breakpoint.length - 2);

interface MediaQueryFactoryProps extends StripPxFromBreakpointProps {
  type: "min-width" | "max-width";
}
const mediaQueryFactory =
  ({ breakpoint, type }: MediaQueryFactoryProps) =>
  ({ children }: { children: ReactElement }): ReactElement | null => {
    const offset = type === "max-width" ? 1 : 0;
    const breakpointAsNumber: number = parseInt(
      stripPxFromBreakpoint({ breakpoint }),
      10
    );
    const isMatched = useMediaQuery({
      query: `(${[type]}: ${breakpointAsNumber - offset}px)`,
    });

    return isMatched ? children : null;
  };

export const TillMobile = mediaQueryFactory({
  breakpoint: breakpoints.mobile,
  type: "max-width",
});
export const FromMobile = mediaQueryFactory({
  breakpoint: breakpoints.mobile,
  type: "min-width",
});

export const TillMobileM = mediaQueryFactory({
  breakpoint: breakpoints.mobileM,
  type: "max-width",
});
export const FromMobileM = mediaQueryFactory({
  breakpoint: breakpoints.mobileM,
  type: "min-width",
});

export const TillMobileL = mediaQueryFactory({
  breakpoint: breakpoints.mobileL,
  type: "max-width",
});
export const FromMobileL = mediaQueryFactory({
  breakpoint: breakpoints.mobileL,
  type: "min-width",
});

export const TillTablet = mediaQueryFactory({
  breakpoint: breakpoints.tablet,
  type: "max-width",
});
export const FromTablet = mediaQueryFactory({
  breakpoint: breakpoints.tablet,
  type: "min-width",
});

export const TillTabletL = mediaQueryFactory({
  breakpoint: breakpoints.tabletL,
  type: "max-width",
});
export const FromTabletL = mediaQueryFactory({
  breakpoint: breakpoints.tabletL,
  type: "min-width",
});

export const TillLaptopS = mediaQueryFactory({
  breakpoint: breakpoints.laptopS,
  type: "max-width",
});
export const FromLaptopS = mediaQueryFactory({
  breakpoint: breakpoints.laptopS,
  type: "min-width",
});

export const TillLaptop = mediaQueryFactory({
  breakpoint: breakpoints.laptop,
  type: "max-width",
});
export const FromLaptop = mediaQueryFactory({
  breakpoint: breakpoints.laptop,
  type: "min-width",
});

export const TillDesktop = mediaQueryFactory({
  breakpoint: breakpoints.desktop,
  type: "max-width",
});
export const FromDesktop = mediaQueryFactory({
  breakpoint: breakpoints.desktop,
  type: "min-width",
});
export const FromDesktopM = mediaQueryFactory({
  breakpoint: breakpoints.desktopM,
  type: "min-width",
});

export const useActiveViewportSize = (): UseActiveViewportSizeReturn => {
  const isLargerThanMobile = useMediaQuery({
    query: `(min-width: ${breakpoints.mobile})`,
  });
  const isLargerThanMobileM = useMediaQuery({
    query: `(min-width: ${breakpoints.mobileM})`,
  });
  const isLargerThanMobileL = useMediaQuery({
    query: `(min-width: ${breakpoints.mobileL})`,
  });
  const isLargerThanTablet = useMediaQuery({
    query: `(min-width: ${breakpoints.tablet})`,
  });
  const isLargerThanTabletL = useMediaQuery({
    query: `(min-width: ${breakpoints.tabletL})`,
  });
  const isLargerThanLaptopS = useMediaQuery({
    query: `(min-width: ${breakpoints.laptopS})`,
  });
  const isLargerThanLaptop = useMediaQuery({
    query: `(min-width: ${breakpoints.laptop})`,
  });
  const isLargerThanDesktop = useMediaQuery({
    query: `(min-width: ${breakpoints.desktop})`,
  });
  const isLargerThanDesktopM = useMediaQuery({
    query: `(min-width: ${breakpoints.desktopM})`,
  });

  const breakpointsMap: { [key in Device]: boolean } = {
    mobile: isLargerThanMobile,
    mobileM: isLargerThanMobileM,
    mobileL: isLargerThanMobileL,
    tablet: isLargerThanTablet,
    tabletL: isLargerThanTabletL,
    laptopS: isLargerThanLaptopS,
    laptop: isLargerThanLaptop,
    desktop: isLargerThanDesktop,
    desktopM: isLargerThanDesktopM,
  } as const;

  let deviceType: UseActiveViewportSizeReturn = "_";

  // Return the largest device name that is of value true
  Object.entries(breakpointsMap).forEach(([key, value]) => {
    if (value) {
      deviceType = key as Device;
    }
  });

  return deviceType;
};
