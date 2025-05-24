import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, Platform, TouchableOpacity } from 'react-native';
// import { useTailwind } from 'tailwind-rn'; // Assuming tailwind-rn is set up

const TaskModal = ({ isVisible, onClose, onSubmit, emailSubject = "" }) => {
  // const tailwind = useTailwind();
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState(''); // Simple text input for MVP
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isVisible && emailSubject) {
      setTaskTitle(`Task regarding: ${emailSubject}`);
    } else if (!isVisible) {
      // Reset fields when modal is closed
      setTaskTitle('');
      setDueDate('');
      setNotes('');
    }
  }, [isVisible, emailSubject]);

  const handleSubmit = () => {
    if (!taskTitle.trim()) {
      // Simple validation: alert or inline message
      alert('Please enter a task title.');
      return;
    }
    onSubmit({ title: taskTitle, dueDate, notes });
    onClose(); // Close modal after submit
  };

  // Placeholder styles, to be replaced by Tailwind or a more robust styling solution
  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
      width: '90%',
      backgroundColor: 'white', // tailwind('bg-white')
      borderRadius: 8,          // tailwind('rounded-lg')
      padding: 20,              // tailwind('p-5')
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,             // tailwind('text-xl')
      fontWeight: 'bold',       // tailwind('font-bold')
      marginBottom: 16,         // tailwind('mb-4')
      textAlign: 'center',
    },
    inputLabel: {
      fontSize: 16,             // tailwind('text-base')
      marginBottom: 4,          // tailwind('mb-1')
      color: '#374151',       // tailwind('text-gray-700')
    },
    input: {
      borderWidth: 1,
      borderColor: '#D1D5DB',   // tailwind('border-gray-300')
      paddingHorizontal: 12,    // tailwind('px-3')
      paddingVertical: Platform.OS === 'ios' ? 12 : 8, // tailwind('py-2')
      borderRadius: 6,          // tailwind('rounded-md')
      marginBottom: 12,         // tailwind('mb-3')
      fontSize: 16,             // tailwind('text-base')
    },
    notesInput: {
      height: 100,
      textAlignVertical: 'top', // For Android
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around', // Or 'flex-end' with margins
      marginTop: 16,            // tailwind('mt-4')
    },
    // Using TouchableOpacity for custom button styling if needed
    // Or rely on default Button component styling for MVP
  });

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Create Task</Text>
          
          <Text style={styles.inputLabel}>Task Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />

          <Text style={styles.inputLabel}>Due Date (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Tomorrow, 2023-12-31"
            value={dueDate}
            onChangeText={setDueDate}
          />

          <Text style={styles.inputLabel}>Notes (Optional)</Text>
          <TextInput
            style={[styles.input, styles.notesInput]}
            placeholder="Add any notes"
            value={notes}
            onChangeText={setNotes}
            multiline={true}
            numberOfLines={3}
          />

          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} color="#6B7280" /> 
            <Button title="Save Task" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
