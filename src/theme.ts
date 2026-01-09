// src/theme.ts
// Theme file for styled-components, supporting light and dark modes, breakpoints, and font sizes.

export const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1024px',
  '2xl': '1280px',
};

export const fontSizes = {
  base: '1rem', // 16px
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  md: '1.0625rem', // 17px
  lg: '1.25rem', // 20px
  xl: '1.5rem', // 24px
  '2xl': '1.875rem', // 30px
  logo: '1.375rem', // 22px
  hero: '4.5rem', // 72px
  h1: '3.5rem', // 56px
  h2: '2.75rem', // 44px
  h3: '2rem', // 32px
  h4: '1.5rem', // 24px
  h5: '1.25rem', // 20px
  h6: '1.125rem', // 18px
  small: '0.875rem', // 14px
  xsmall: '0.75rem', // 12px
  // Custom sizes used in components
  '0.65': '0.65rem', // 10.4px
  '0.8': '0.8rem', // 12.8px
  '0.8125': '0.8125rem', // 13px
  '0.85': '0.85rem', // 13.6px
  '0.9': '0.9rem', // 14.4px
  '0.95': '0.95rem', // 15.2px
  '0.97': '0.97rem', // 15.52px
  '1.1': '1.1rem', // 17.6px
  '1.625': '1.625rem', // 26px
  '1.75': '1.75rem', // 28px
};

export const fontFamilies = {
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
  heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  monospace: "'Courier New', 'Monaco', 'Consolas', monospace"
};

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const gradients = {
  hero: 'linear-gradient(135deg, #0A1628 0%, #1a2942 100%)',
  feature: 'linear-gradient(135deg, #eff6ff 0%, #fff 100%)',
  teal: 'linear-gradient(135deg, #0a3a3f 0%, #0d4a50 100%)',
  tealOverlay: 'linear-gradient(135deg, rgba(10, 58, 63, 0.95) 0%, rgba(13, 74, 80, 0.95) 100%)',
};

export const radii = {
  sm: '0.5rem',
  md: '0.625rem',
  lg: '1rem',
  xl: '2rem',
  full: '999px',
  pill: '999px',
  thin: '2px',
  card: '14px',
};

const dimensions = {
  heroMin: '550px',
  heroMinMd: '500px',
  heroMinSm: '400px',
  heroMinXs: '350px',
  heroMax: '750px',
  contentBoxWidth: '580px',
  contentBoxWidthMd: '520px',
  contentBoxWidthLg: '480px',
};

const common = {
  borderRadius: radii.md,
  maxWidth: {
    container: '1200px',
    content: '900px',
    wide: '1400px',
    home: '1320px',
  },
  overlays: {
    hero: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)',
  },
  breakpoints,
  fontSizes,
  fontFamilies,
  fontWeights,
  gradients,
  radii,
  dimensions,
  spacing: {
    xxs: '0.125rem', // 2px
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    xxl: '3rem', // 48px
    xxxl: '5rem', // 80px
    section: '7.5rem', // 120px
    card: '2rem', // 32px
    pill: '0.5rem 1rem',
    hero: '5.5rem', // 88px
    dividerW: '8rem', // 128px
    dividerWidth: '6rem', // 96px - standard divider width
    dividerH: '0.25rem', // 4px
    mb2: '2rem',
  },
};

export const lightTheme = {
  ...common,
  colors: {
    gold: '#D4AF37',
    goldSecondary: '#AA8A2E',
    goldGradient: 'linear-gradient(135deg, #D4AF37 0%, #AA8A2E 100%)',
    white: '#fff',
    darkBlue: '#0A1628',
    darkBlueAlt: '#0B1C2D',
    teal: '#0a3a3f',
    tealDark: '#0d4a50',
    grey: '#f5f5f5',
    greyDark: '#e5e7eb',
    lightGrey: '#f8f9fa',
    goldAccent: '#C9A24D',
    goldAccentHover: '#A68A3E',
    grayAccent: '#8B95A5',
    grayBorder: '#e5e7eb',
    success: '#2a7c2e',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    boxShadowGold: '0 8px 32px rgba(201,162,77,0.08)',
    boxShadowGoldGlow: '0 0 40px rgba(201,162,77,0.4)',
    background: '#ffffff',
    backgroundAlt: '#F7F8FA',
    foreground: 'oklch(0.145 0 0)',
    card: '#ffffff',
    cardForeground: 'oklch(0.145 0 0)',
    popover: 'oklch(1 0 0)',
    popoverForeground: 'oklch(0.145 0 0)',
    primary: '#030213',
    primaryForeground: 'oklch(1 0 0)',
    secondary: 'oklch(0.95 0.0058 264.53)',
    secondaryForeground: '#030213',
    muted: '#ececf0',
    mutedForeground: '#717182',
    accent: '#e9ebef',
    accentForeground: '#030213',
    destructive: '#d4183d',
    destructiveForeground: '#ffffff',
    border: 'rgba(0, 0, 0, 0.1)',
    input: 'transparent',
    inputBackground: '#f3f3f5',
    switchBackground: '#cbced4',
    ring: 'oklch(0.708 0 0)',
    chart1: 'oklch(0.646 0.222 41.116)',
    chart2: 'oklch(0.6 0.118 184.704)',
    chart3: 'oklch(0.398 0.07 227.392)',
    chart4: 'oklch(0.828 0.189 84.429)',
    chart5: 'oklch(0.769 0.188 70.08)',
    sidebar: 'oklch(0.985 0 0)',
    sidebarForeground: 'oklch(0.145 0 0)',
    sidebarPrimary: '#030213',
    sidebarPrimaryForeground: 'oklch(0.985 0 0)',
    sidebarAccent: 'oklch(0.97 0 0)',
    sidebarAccentForeground: 'oklch(0.205 0 0)',
    sidebarBorder: 'oklch(0.922 0 0)',
    sidebarRing: 'oklch(0.708 0 0)',

    // Status badge colors
    statusInProgressBg: '#e8f5e9',
    statusInProgressText: '#388e3c',
    statusUpcomingBg: '#e3f2fd',
    statusUpcomingText: '#1976d2',
    statusDefaultBg: '#f5f5f5',
    statusDefaultText: '#616161',
  },
  opacity: {
    low: 0.2,
    med: 0.3,
    high: 0.6,
  },
  letterSpacing: {
    tight: '0.02em',
    normal: '0.05em',
    wide: '0.04em',
    wider: '0.125rem', // 2px
  },
  aspect: {
    wide: '16/9',
    fourThree: '4/3',
  },
  transition: {
    fast: 'all 0.3s',
    slow: 'all 0.5s',
    button: 'background 0.2s, color 0.2s',
  },
  zIndex: {
    base: 1,
    overlay: 10,
    modal: 100,
  },
};

const theme = lightTheme;
export default theme;

export const darkTheme = {
  ...common,
  colors: {
    background: 'oklch(0.145 0 0)',
    foreground: 'oklch(0.985 0 0)',
    card: 'oklch(0.145 0 0)',
    cardForeground: 'oklch(0.985 0 0)',
    popover: 'oklch(0.145 0 0)',
    popoverForeground: 'oklch(0.985 0 0)',
    primary: 'oklch(0.985 0 0)',
    primaryForeground: 'oklch(0.205 0 0)',
    secondary: 'oklch(0.269 0 0)',
    secondaryForeground: 'oklch(0.985 0 0)',
    muted: 'oklch(0.269 0 0)',
    mutedForeground: 'oklch(0.708 0 0)',
    accent: 'oklch(0.269 0 0)',
    accentForeground: 'oklch(0.985 0 0)',
    destructive: 'oklch(0.396 0.141 25.723)',
    destructiveForeground: 'oklch(0.637 0.237 25.331)',
    border: 'oklch(0.269 0 0)',
    input: 'oklch(0.269 0 0)',
    ring: 'oklch(0.439 0 0)',
    chart1: 'oklch(0.488 0.243 264.376)',
    chart2: 'oklch(0.696 0.17 162.48)',
    chart3: 'oklch(0.769 0.188 70.08)',
    chart4: 'oklch(0.627 0.265 303.9)',
    chart5: 'oklch(0.645 0.246 16.439)',
    sidebar: 'oklch(0.205 0 0)',
    sidebarForeground: 'oklch(0.985 0 0)',
    sidebarPrimary: 'oklch(0.488 0.243 264.376)',
    sidebarPrimaryForeground: 'oklch(0.985 0 0)',
    sidebarAccent: 'oklch(0.269 0 0)',
    sidebarAccentForeground: 'oklch(0.985 0 0)',
    sidebarBorder: 'oklch(0.269 0 0)',
    sidebarRing: 'oklch(0.439 0 0)',

    // Status badge colors (dark mode variants)
    statusInProgressBg: '#23472b',
    statusInProgressText: '#a5d6a7',
    statusUpcomingBg: '#1a2a3a',
    statusUpcomingText: '#90caf9',
    statusDefaultBg: '#222',
    statusDefaultText: '#bbb',
  },
};

import 'styled-components';

export type ThemeType = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
