import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should clear the calculator data object when the AC button is pressed', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, 'AC')).toEqual(
      {
        total: null,
        next: null,
        operation: null,
      },
    );
  });

  it('should update the next value when a number button is pressed', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '7')).toEqual({
      total: '10',
      next: '57',
      operation: '+',
    });
  });

  it('should handle the case when the user presses 0 after 0 is already the next value', () => {
    expect(calculate({ total: '10', next: '0', operation: '+' }, '0')).toEqual(
      {},
    );
  });

  it('should update the next value when the "." button is pressed', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '.')).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });
  });

  it('should handle the case when the "." button is pressed and there is no next value', () => {
    expect(calculate({ total: '10', next: null, operation: '+' }, '.')).toEqual(
      {
        total: '10',
        next: '0.',
        operation: '+',
      },
    );
  });

  it('should calculate the result when the "=" button is pressed', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '=')).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('should update the operation when an operation button is pressed', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '-')).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });

  it('should handle the case when an operation button is pressed after "=" button is pressed', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '=')).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
    expect(
      calculate({ total: '15', next: null, operation: null }, '+'),
    ).toEqual({
      total: '15',
      next: null,
      operation: '+',
    });
  });

  it('should handle the case when an operation button is pressed and there is an existing operation', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '-')).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
    expect(calculate({ total: '10', next: '5', operation: '+' }, 'x')).toEqual({
      total: '15',
      next: null,
      operation: 'x',
    });
    expect(calculate({ total: '10', next: '5', operation: '+' }, '÷')).toEqual({
      total: '15',
      next: null,
      operation: '÷',
    });
    expect(calculate({ total: '10', next: '5', operation: '+' }, '%')).toEqual({
      total: '15',
      next: null,
      operation: '%',
    });
  });
});
