import 'styled-components';



declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof import('./theme').breakpoints;
    fontSizes: typeof import('./theme').fontSizes;
    fontFamilies: typeof import('./theme').fontFamilies;
    fontWeights: typeof import('./theme').fontWeights;
    gradients: typeof import('./theme').gradients;
    radii: typeof import('./theme').radii;
    dimensions: {
      heroMin: string;
      heroMinMd: string;
      heroMinSm: string;
      heroMinXs: string;
      heroMax: string;
      contentBoxWidth: string;
      contentBoxWidthMd: string;
      contentBoxWidthLg: string;
    };
    spacing: typeof import('./theme').lightTheme.spacing;
    maxWidth: typeof import('./theme').lightTheme.maxWidth;
    overlays: typeof import('./theme').lightTheme.overlays;
    colors: {
      gold: string;
      goldSecondary: string;
      goldGradient: string;
      white: string;
      darkBlue: string;
      darkBlueAlt: string;
      teal: string;
      tealDark: string;
      grey: string;
      greyDark: string;
      lightGrey: string;
      goldAccent: string;
      goldAccentHover: string;
      grayAccent: string;
      grayBorder: string;
      success: string;
      boxShadow: string;
      boxShadowGold: string;
      boxShadowGoldGlow: string;
      background: string;
      backgroundAlt: string;
      foreground: string;
      card: string;
      cardForeground: string;
      popover: string;
      popoverForeground: string;
      primary: string;
      primaryForeground: string;
      secondary: string;
      secondaryForeground: string;
      muted: string;
      mutedForeground: string;
      accent: string;
      accentForeground: string;
      destructive: string;
      destructiveForeground: string;
      border: string;
      input: string;
      inputBackground: string;
      switchBackground: string;
      ring: string;
      chart1: string;
      chart2: string;
      chart3: string;
      chart4: string;
      chart5: string;
      sidebar: string;
      sidebarForeground: string;
      sidebarPrimary: string;
      sidebarPrimaryForeground: string;
      sidebarAccent: string;
      sidebarAccentForeground: string;
      sidebarBorder: string;
      sidebarRing: string;

      // Status badge colors
      statusInProgressBg: string;
      statusInProgressText: string;
      statusUpcomingBg: string;
      statusUpcomingText: string;
      statusDefaultBg: string;
      statusDefaultText: string;
    };
    opacity: typeof import('./theme').lightTheme.opacity;
    letterSpacing: typeof import('./theme').lightTheme.letterSpacing;
    aspect: typeof import('./theme').lightTheme.aspect;
    transition: typeof import('./theme').lightTheme.transition;
    zIndex: typeof import('./theme').lightTheme.zIndex;
  }
}
