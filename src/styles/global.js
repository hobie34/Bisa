// src/styles/global.js
import { StyleSheet, Platform } from 'react-native';
import Constants from '../utils/constants'; // Importing our defined constants

export const globalStyles = StyleSheet.create({
  // Colors - Referencing from Constants for single source of truth
  primary: { color: Constants.Colors.primary },
  secondary: { color: Constants.Colors.secondary },
  accent: { color: Constants.Colors.accent },
  textDefault: { color: Constants.Colors.neutralGray },
  textHeader: { color: Constants.Colors.neutralDarkGray },
  backgroundDefault: { backgroundColor: Constants.Colors.neutralWhite },
  darkModeBackground: { backgroundColor: Constants.Colors.darkModeBackground },
  darkModeText: { color: Constants.Colors.darkModeText },

  // Typography
  bodyText: {
    fontFamily: Constants.Typography.fontFamily + (Platform.OS === 'ios' ? '-Regular' : ''), // Append weight for non-standard font handling if needed
    fontSize: Constants.Typography.body,
    color: Constants.Colors.neutralGray,
  },
  headingText: {
    fontFamily: Constants.Typography.fontFamily + (Platform.OS === 'ios' ? '-Medium' : ''),
    fontSize: Constants.Typography.heading,
    color: Constants.Colors.neutralDarkGray,
    fontWeight: Constants.Typography.weights.medium, // fontWeight for Android and when specific font file for weight isn't available/linked
  },
  metadataText: {
    fontFamily: Constants.Typography.fontFamily + (Platform.OS === 'ios' ? '-Regular' : ''),
    fontSize: Constants.Typography.metadata,
    color: Constants.Colors.neutralGray,
  },
  fontBold: {
    fontWeight: Constants.Typography.weights.bold,
  },
  fontMedium: {
    fontWeight: Constants.Typography.weights.medium,
  },

  // Spacing (as style objects for direct use)
  pMain: { padding: Constants.Spacing.paddingMain },
  pSecondary: { padding: Constants.Spacing.paddingSecondary },
  mListItems: { margin: Constants.Spacing.marginListItems }, // General margin for items
  mSections: { margin: Constants.Spacing.marginSections }, // General margin for sections

  // Containers
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Constants.Colors.neutralWhite, // Default background
  },
  container: {
    flex: 1,
    padding: Constants.Spacing.paddingMain,
    backgroundColor: Constants.Colors.neutralWhite,
  },
  card: {
    backgroundColor: Constants.Colors.neutralWhite,
    borderWidth: 1,
    borderColor: '#E2E8F0', // Light gray for border, could be added to Constants.Colors
    borderRadius: 8, // Consistent border radius
    padding: Constants.Spacing.paddingMain,
    marginBottom: Constants.Spacing.marginListItems, // Common for cards in a list
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1, // For Android shadow
  },

  // Buttons
  buttonPrimary: {
    backgroundColor: Constants.Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: Constants.Spacing.paddingMain,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Constants.TouchTargets.minSize, // Ensure touch target size
  },
  buttonTextPrimary: {
    fontFamily: Constants.Typography.fontFamily + (Platform.OS === 'ios' ? '-Medium' : ''),
    fontSize: Constants.Typography.body,
    color: Constants.Colors.neutralWhite,
    fontWeight: Constants.Typography.weights.medium,
  },
  
  // Input Fields (Basic Styling)
  input: {
    height: Constants.TouchTargets.minSize, // Ensure touch target size
    borderColor: Constants.Colors.neutralGray,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: Constants.Spacing.paddingSecondary,
    fontSize: Constants.Typography.body,
    backgroundColor: Constants.Colors.neutralWhite,
    marginBottom: Constants.Spacing.paddingSecondary,
  },

  // Priority Indicator (example)
  priorityIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Constants.Colors.accent,
    marginRight: Constants.Spacing.paddingSecondary,
  },

  // Common Flexbox
  flexRow: { flexDirection: 'row' },
  alignItemsCenter: { alignItems: 'center' },
  justifyContentSpaceBetween: { justifyContent: 'space-between' },

});

// Also exporting constants for direct use if needed elsewhere (though globalStyles is preferred for StyleSheet usage)
export { Constants };
