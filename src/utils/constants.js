// src/utils/constants.js

export const Colors = {
  primary: '#007BFF',     // Blue: for buttons, highlights, active states
  secondary: '#28A745',   // Green: for success states
  accent: '#DC3545',      // Red: for priority badges and alerts
  neutralWhite: '#FFFFFF',// White: for background
  neutralGray: '#6C757D', // Gray: for text
  neutralDarkGray: '#343A40', // Dark Gray: for headers

  // Dark Mode Palette (as specified in README)
  darkModeBackground: '#1A202C',
  darkModeText: '#E2E8F0',
};

export const Typography = {
  fontFamily: 'Inter', // Base font family (ensure Inter is linked in the project)
  
  // Font Sizes
  body: 16,
  heading: 20,
  metadata: 12,

  // Font Weights (map to string values typically used in React Native)
  weights: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
};

export const Spacing = {
  paddingMain: 16,    // Padding for main elements
  paddingSecondary: 8, // Padding for secondary elements
  marginListItems: 8, // Margin between list items
  marginSections: 24, // Margin between sections
};

export const TouchTargets = {
  minSize: 44, // Minimum 44x44px for buttons and gestures
};

// You can also combine them or export them individually based on preference
const Constants = {
  Colors,
  Typography,
  Spacing,
  TouchTargets,
};

export default Constants;
