import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Calculator} from './Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText, getByText} = render(<Calculator />);

    expect(getByPlaceholderText('Первое число')).toBeTruthy();
    expect(getByPlaceholderText('Второе число')).toBeTruthy();
    expect(getByText('+')).toBeTruthy();
    expect(getByText('-')).toBeTruthy();
    expect(getByText('*')).toBeTruthy();
    expect(getByText('/')).toBeTruthy();
    expect(getByText('Очистить')).toBeTruthy();
  });

  it('performs calculations correctly', () => {
    const {getByPlaceholderText, getByText} = render(<Calculator />);

    const firstInput = getByPlaceholderText('Первое число');
    const secondInput = getByPlaceholderText('Второе число');

    // Проверка сложения
    fireEvent.changeText(firstInput, '5');
    fireEvent.changeText(secondInput, '3');
    expect(getByText('Результат: 8')).toBeTruthy();

    // Проверка вычитания
    fireEvent.press(getByText('-'));
    expect(getByText('Результат: 2')).toBeTruthy();

    // Проверка умножения
    fireEvent.press(getByText('*'));
    expect(getByText('Результат: 15')).toBeTruthy();

    // Проверка деления
    fireEvent.press(getByText('/'));
    expect(getByText('Результат: 1.6666666666666667')).toBeTruthy();
  });

  it('handles clear button correctly', () => {
    const {getByPlaceholderText, getByText, queryByText} = render(
      <Calculator />,
    );

    const firstInput = getByPlaceholderText('Первое число');
    const secondInput = getByPlaceholderText('Второе число');

    fireEvent.changeText(firstInput, '5');
    fireEvent.changeText(secondInput, '3');
    expect(getByText('Результат: 8')).toBeTruthy();

    fireEvent.press(getByText('Очистить'));
    expect(queryByText(/Результат:/)).toBeNull();
  });

  it('handles invalid input correctly', () => {
    const {getByPlaceholderText, queryByText} = render(<Calculator />);

    const firstInput = getByPlaceholderText('Первое число');
    const secondInput = getByPlaceholderText('Второе число');

    fireEvent.changeText(firstInput, 'abc');
    fireEvent.changeText(secondInput, '123');
    expect(queryByText(/Результат:/)).toBeNull();

    fireEvent.changeText(firstInput, '123');
    fireEvent.changeText(secondInput, 'xyz');
    expect(queryByText(/Результат:/)).toBeNull();
  });

  it('handles division by zero', () => {
    const {getByPlaceholderText, getByText, queryByText} = render(
      <Calculator />,
    );

    const firstInput = getByPlaceholderText('Первое число');
    const secondInput = getByPlaceholderText('Второе число');

    fireEvent.changeText(firstInput, '5');
    fireEvent.changeText(secondInput, '0');
    fireEvent.press(getByText('/'));
    expect(queryByText(/Результат:/)).toBeNull();
  });
});
