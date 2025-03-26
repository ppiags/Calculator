import {Button} from '@/shared/components/Button/Button';
import {Input} from '@/shared/components/Input';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Operation, OPERATIONS, calculate, handleNumberInput} from './utils';

export const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState<Operation>('+');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    if (firstNumber && secondNumber) {
      setResult(calculate(firstNumber, secondNumber, operation));
    } else {
      setResult(null);
    }
  }, [firstNumber, secondNumber, operation]);

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        keyboardType="numeric"
        text={firstNumber}
        onChangeText={value => setFirstNumber(handleNumberInput(value))}
        placeholder="Первое число"
      />

      <View style={styles.operations}>
        {OPERATIONS.map(op => (
          <Button
            key={op}
            onPress={() => setOperation(op)}
            style={[
              styles.operationButton,
              operation === op && styles.selectedOperation,
            ]}>
            {op}
          </Button>
        ))}
      </View>

      <Input
        style={styles.input}
        keyboardType="numeric"
        text={secondNumber}
        onChangeText={value => setSecondNumber(handleNumberInput(value))}
        placeholder="Второе число"
      />

      <View style={styles.buttons}>
        <Button onPress={clear} style={styles.button}>
          Очистить
        </Button>
      </View>

      <View style={styles.resultContainer}>
        {result !== null && (
          <Text style={styles.result}>Результат: {result}</Text>
        )}
      </View>
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
  operations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  operationButton: {
    padding: 10,
    marginHorizontal: 5,
    minWidth: 40,
    alignItems: 'center',
  },
  selectedOperation: {
    backgroundColor: '#e0e0e0',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  resultContainer: {
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
  },
});
