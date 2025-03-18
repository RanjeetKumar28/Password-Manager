/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const colors = {
  // General Backgrounds
  background: "#F5F5F5", // Light Gray for app background
  surface: "#FFFFFF", // White for card surfaces
  
  // Primary & Secondary Colors
  primary: "#1976D2", // Blue for primary elements (buttons, highlights)
  onPrimary: "#FFFFFF", // Text color on primary background
  
  secondary: "#FF9800", // Orange for secondary elements
  onSecondary: "#FFFFFF", // Text color on secondary background

  // Text Colors
  textPrimary: "#212121", // Dark Gray for main text
  textSecondary: "#757575", // Medium Gray for subtitles and hints
  textDisabled: "#BDBDBD", // Light Gray for disabled text

  // Chips (Light and Border)
  chip: {
    light: {
      success: "#E6F9E6", // Light Green for success chip
      failure: "#FDE7E9", // Light Red for failure chip
      warning: "#FFF8E1", // Light Yellow for warning chip
      info: "#E3F2FD", // Light Blue for info chip
    },
    border: {
      success: "#4CAF50", // Dark Green border for success chip
      failure: "#E53935", // Dark Red border for failure chip
      warning: "#FFA000", // Dark Yellow border for warning chip
      info: "#1976D2", // Dark Blue border for info chip
    },
  },

  // Additional Utility Colors
  divider: "#E0E0E0", // Light Gray for dividers
  shadow: "rgba(0, 0, 0, 0.1)", // Shadow color
  overlay: "rgba(0, 0, 0, 0.5)", // Overlay for modals
};

export default colors;

