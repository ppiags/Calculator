import {calculate, handleNumberInput, OPERATIONS} from './utils';

describe('Calculator Utils', () => {
  describe('handleNumberInput', () => {
    it('should allow only numbers and minus sign at the start', () => {
      expect(handleNumberInput('123')).toBe('123');
      expect(handleNumberInput('-123')).toBe('-123');
      expect(handleNumberInput('1-23')).toBe('123');
      expect(handleNumberInput('abc123')).toBe('123');
      expect(handleNumberInput('123abc')).toBe('123');
    });
  });

  describe('calculate', () => {
    it('should perform addition correctly', () => {
      expect(calculate('2', '3', '+')).toBe(5);
      expect(calculate('-2', '3', '+')).toBe(1);
      expect(calculate('2', '-3', '+')).toBe(-1);
    });

    it('should perform subtraction correctly', () => {
      expect(calculate('5', '3', '-')).toBe(2);
      expect(calculate('-5', '3', '-')).toBe(-8);
      expect(calculate('5', '-3', '-')).toBe(8);
    });

    it('should perform multiplication correctly', () => {
      expect(calculate('2', '3', '*')).toBe(6);
      expect(calculate('-2', '3', '*')).toBe(-6);
      expect(calculate('2', '-3', '*')).toBe(-6);
    });

    it('should perform division correctly', () => {
      expect(calculate('6', '2', '/')).toBe(3);
      expect(calculate('-6', '2', '/')).toBe(-3);
      expect(calculate('6', '-2', '/')).toBe(-3);
    });

    it('should return null when dividing by zero', () => {
      expect(calculate('6', '0', '/')).toBeNull();
    });

    it('should handle decimal numbers', () => {
      expect(calculate('1.5', '2', '+')).toBe(3.5);
      expect(calculate('2', '0.5', '*')).toBe(1);
    });
  });

  describe('OPERATIONS', () => {
    it('should contain all basic arithmetic operations', () => {
      expect(OPERATIONS).toEqual(['+', '-', '*', '/']);
      expect(OPERATIONS).toHaveLength(4);
    });
  });
});
