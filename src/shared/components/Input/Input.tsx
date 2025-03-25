import React from 'react';

import {StyleSheet, TextInput, TextInputProps} from 'react-native';
interface Props extends TextInputProps {
  text?: string;
}

// только для примера компонента
export const Input = (props: Props) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      value={props.text}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
