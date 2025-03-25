import {Button} from '@/shared/components/Button/Button';
import {Input} from '@/shared/components/Input';
import React, {useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';

export const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [result, setResult] = useState<number>(0);

  const handleNumberInput = (text: string) => {
    return text.replace(/(?!^)-|[^\d-]/g, '');
  };

  const calculateSum = () => {
    const sum = Number(firstNumber) + Number(secondNumber);
    setResult(sum);
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        keyboardType="numeric"
        text={firstNumber}
        onChangeText={value => setFirstNumber(handleNumberInput(value))}
        placeholder="Введите первое число"
      />
      <Text>+</Text>
      <Input
        style={styles.input}
        keyboardType="numeric"
        text={secondNumber}
        onChangeText={value => setSecondNumber(handleNumberInput(value))}
        placeholder="Введите второе число"
      />
      <Button onPress={calculateSum} disabled={!firstNumber || !secondNumber}>
        Сложить
      </Button>
      <Text style={styles.result}>Результат: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },

  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
