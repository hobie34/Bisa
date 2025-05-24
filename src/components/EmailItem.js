import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useTailwind } from 'tailwind-rn'; // Assuming tailwind-rn is set up
// For now, using StyleSheet as direct Tailwind setup is blocked by tool issues

// Placeholder for MaterialIcons, actual import might differ based on setup
// import Icon from 'react-native-vector-icons/MaterialIcons'; 
// Using a simple text 'P' for priority for now if Icon import is problematic

const EmailItem = ({
  sender,
  subject,
  snippet,
  time,
  priority,
  onPress,
  // onSwipeLeft, // Gesture handling would be added later
  // onSwipeRight, // Gesture handling would be added later
}) => {
  // const tailwind = useTailwind(); // Would use this if Tailwind was available

  // Placeholder styles, to be replaced by Tailwind or a more robust styling solution
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16, // Corresponds to 'p-4'
      backgroundColor: 'white', // Corresponds to 'bg-white'
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB', // Corresponds to 'border-gray-200'
    },
    priorityDot: {
      width: 8, // Corresponds to 'w-2'
      height: 8, // Corresponds to 'h-2'
      backgroundColor: '#EF4444', // Corresponds to 'bg-red-500'
      borderRadius: 4, // Corresponds to 'rounded-full'
      marginRight: 8, // Corresponds to 'mr-2'
    },
    contentContainer: {
      flex: 1,
    },
    senderText: {
      fontSize: 16, // Corresponds to 'text-base' (assuming 16px default)
      fontWeight: '500', // Corresponds to 'font-medium'
      color: '#4B5563', // Corresponds to 'text-gray-700'
    },
    subjectText: {
      fontSize: 16, // Corresponds to 'text-base'
      color: '#4B5563', // Corresponds to 'text-gray-700'
      marginTop: 2,
    },
    snippetText: {
      fontSize: 14, // Corresponds to 'text-sm' (assuming 14px default)
      color: '#6B7280', // Corresponds to 'text-gray-500'
      marginTop: 2,
    },
    timeText: {
      fontSize: 14, // Corresponds to 'text-sm'
      color: '#6B7280', // Corresponds to 'text-gray-500'
      marginLeft: 8,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container} // Replace with tailwind('flex-row items-center p-4 bg-white border-b border-gray-200')
      accessibilityLabel={`Email from ${sender}: ${subject}. Snippet: ${snippet}`}
      accessible={true}
    >
      {priority && (
        // <Icon name="error" size={16} color="#EF4444" style={styles.priorityDot} /> // If using vector icons
        <View style={styles.priorityDot} accessibilityLabel="Priority email" />
      )}
      <View style={styles.contentContainer}>
        <Text style={styles.senderText} numberOfLines={1}>{sender}</Text>
        <Text style={styles.subjectText} numberOfLines={1}>{subject}</Text>
        <Text style={styles.snippetText} numberOfLines={1}>{snippet}</Text>
      </View>
      <Text style={styles.timeText}>{time}</Text>
    </TouchableOpacity>
  );
};

export default EmailItem;
