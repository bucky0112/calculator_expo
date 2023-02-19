export type State = {
  currentValue: string;
  operator: string | null;
  previousValue: string | null;
}

export const initialState: State = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

export const handleNumber = (value: string, state: State): State => {
  if (state.currentValue === '0') {
    return { currentValue: `${value}`, operator: state.operator, previousValue: state.previousValue };
  }

  return {
    currentValue: `${state.currentValue}${value}`,
    operator: state.operator,
    previousValue: state.previousValue,
  };
};

const handleEqual = (state: State): State => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue || '0');
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case '+':
      return {
        currentValue: `${previous + current}`,
        ...resetState,
      };
    case '-':
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case '*':
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case '/':
      return {
        currentValue: `${previous / current}`,
        ...resetState,
      };

    default:
      return state;
  }
};

// calculator function
const calculator = (type: string, value: string, state: State): State => {
  switch (type) {
    case 'number':
      return handleNumber(value, state);
    case 'clear':
      return initialState;
    case 'posneg':
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
        operator: state.operator,
        previousValue: state.previousValue,
      };
    case 'percentage':
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        operator: state.operator,
        previousValue: state.previousValue,
      };
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0',
      };
    case 'equal':
      return handleEqual(state);
    default:
      return state;
  }
};

export default calculator;
