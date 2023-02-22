export type State = {
  currentValue: string
  operator: string | null
  previousValue: string | null
}

export const initialState: State = {
  currentValue: '0',
  operator: null,
  previousValue: null
}

export const handleNumber = (value: string, state: State): State => {
  return {
    ...state,
    currentValue:
      state.currentValue === '0' ? `${value}` : `${state.currentValue}${value}`
  }
}

const handleEqual = (state: State): State => {
  const { currentValue, previousValue = '0', operator } = state

  const current = parseFloat(currentValue)
  const previous = parseFloat(previousValue as string)
  const resetState = { operator: null, previousValue: null }

  switch (operator) {
    case '+':
      return {
        ...resetState,
        currentValue: `${previous + current}`
      }
    case '-':
      return {
        ...resetState,
        currentValue: `${previous - current}`
      }
    case '*':
      return {
        ...resetState,
        currentValue: `${previous * current}`
      }
    case '/':
      return {
        ...resetState,
        currentValue: `${previous / current}`
      }
    default:
      return state
  }
}

const calculator = (type: string, value: string, state: State): State => {
  switch (type) {
    case 'number':
      return handleNumber(value, state)
    case 'clear':
      return initialState
    case 'toggleSign':
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`
      }
    case 'percentage':
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      }
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0'
      }
    case 'equal':
      return handleEqual(state)
    default:
      return state
  }
}

export default calculator
