import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useTailwind } from 'tailwind-rn';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Placeholder

const CategoryFolder = ({ folderName, unreadCount, iconName, onPress }) => {
  // const tailwind = useTailwind();

  // Placeholder styles, to be replaced by Tailwind or a more robust styling solution
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,    // tailwind('py-3') or similar
      paddingHorizontal: 16,  // tailwind('px-4') or similar
      // Potentially add a borderBottom or other separators if used in a list
    },
    iconContainer: {
      marginRight: 16,        // tailwind('mr-4')
    },
    iconPlaceholder: { // Simple placeholder if Icon component is not ready
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#E0E0E0', // Placeholder color
    },
    iconText: { // For text-based icon placeholder
      fontSize: 18,
      color: '#616161',
    },
    folderInfoContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    folderName: {
      fontSize: 16,             // tailwind('text-base')
      color: '#212121',       // tailwind('text-gray-800') or similar
    },
    unreadBadge: {
      backgroundColor: '#007BFF', // Primary color from README: Blue tailwind('bg-blue-500')
      borderRadius: 12,         // tailwind('rounded-full')
      paddingHorizontal: 8,     // tailwind('px-2')
      paddingVertical: 2,       // tailwind('py-0.5')
      minWidth: 24,             // Ensure badge has some width even for single digit
      justifyContent: 'center',
      alignItems: 'center',
    },
    unreadText: {
      color: 'white',           // tailwind('text-white')
      fontSize: 12,             // tailwind('text-xs')
      fontWeight: 'bold',       // tailwind('font-bold')
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container} // tailwind('flex-row items-center py-3 px-4')
      accessibilityLabel={`Category ${folderName}, ${unreadCount} unread items`}
      accessible={true}
    >
      <View style={styles.iconContainer}>
        {/* 
          Replace with actual Icon component when available:
          <Icon name={iconName || 'folder'} size={24} color="#616161" /> 
        */}
        <View style={styles.iconPlaceholder}>
          <Text style={styles.iconText}>{(iconName && iconName.length > 0 ? iconName.charAt(0).toUpperCase() : 'F')}</Text>
        </View>
      </View>
      <View style={styles.folderInfoContainer}>
        <Text style={styles.folderName}>{folderName}</Text>
        {unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CategoryFolder;
