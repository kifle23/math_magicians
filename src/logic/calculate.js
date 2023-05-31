import Big from 'big.js';

const calculate = (operator, op1, op2) => {
  const operand1 = Big(op1);
  const operand2 = Big(op2);
  switch (operator) {
    case '+':
      return operand1.plus(operand2).toString();
    case '-':
      return operand1.minus(operand2).toString();
    case 'x':
      return operand1.times(operand2).toString();
    case '÷':
      try {
        return operand1.div(operand2).toString();
      } catch (err) {
        return 'Undefined';
      }
    case '%':
      return operand1.mod(operand2).toString();
    default:
      throw new Error(`Invalid operator ${operator}`);
  }
};

export default calculate;
