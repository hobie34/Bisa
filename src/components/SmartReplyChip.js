import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { useTailwind } from 'tailwind-rn'; // Assuming tailwind-rn is set up

const SmartReplyChip = ({ replyText, onPress }) => {
  // const tailwind = useTailwind(); // Would use this if Tailwind was available

  // Placeholder styles, to be replaced by Tailwind or a more robust styling solution
  const styles = StyleSheet.create({
    chipContainer: {
      backgroundColor: '#E0E7FF', // A light blue, similar to a suggestion chip, e.g., tailwind('bg-indigo-100')
      paddingHorizontal: 12, // e.g., tailwind('px-3')
      paddingVertical: 8,    // e.g., tailwind('py-2')
      borderRadius: 16,      // e.g., tailwind('rounded-full')
      marginRight: 8,        // e.g., tailwind('mr-2')
      marginBottom: 8,       // e.g., tailwind('mb-2')
    },
    chipText: {
      color: '#4338CA', // A darker blue for text, e.g., tailwind('text-indigo-700')
      fontSize: 14,        // e.g., tailwind('text-sm')
    },
  });

  return (
    <TouchableOpacity
      style={styles.chipContainer} // Replace with tailwind styles
      onPress={() => onPress(replyText)}
      accessibilityLabel={`Suggested reply: ${replyText}`}
      accessible={true}
    >
      <Text style={styles.chipText}>{replyText}</Text>
    </TouchableOpacity>
  );
};

export default SmartReplyChip;
