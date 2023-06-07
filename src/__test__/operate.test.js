import operate from '../logic/operate';

describe('operate', () => {
  it('should add two numbers', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  });

  it('should subtract two numbers', () => {
    expect(operate(5, 3, '-')).toEqual('2');
  });

  it('should multiply two numbers', () => {
    expect(operate(2, 3, 'x')).toEqual('6');
  });

  it('should divide two numbers', () => {
    expect(operate(6, 3, '÷')).toEqual('2');
  });

  it('should return an error message if attempting to divide by zero', () => {
    expect(operate(6, 0, '÷')).toEqual("Can't divide by 0.");
  });

  it('should find the modulo of two numbers', () => {
    expect(operate(7, 3, '%')).toEqual('1');
  });

  it('should return an error message if attempting to find modulo with zero', () => {
    expect(operate(7, 0, '%')).toEqual(
      "Can't find modulo as can't divide by 0.",
    );
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate(2, 3, '#')).toThrowError("Unknown operation '#'");
  });
});
