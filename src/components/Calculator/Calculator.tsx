export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

export const handleNumber = (value : string, state : any) => {
  if (state.currentValue === '0') {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`,
  };
};

export const handleEqual = (state : any) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null,
  };

  if (operator === '/') {
    return {
      currentValue: previous / current,
      ...resetState,
    };
  }

  if (operator === '*') {
    return {
      currentValue: previous * current,
      ...resetState,
    };
  }

  if (operator === '+') {
    return {
      currentValue: previous + current,
      ...resetState,
    };
  }

  if (operator === '-') {
    return {
      currentValue: previous - current,
      ...resetState,
    };
  }

  return state;
}

export const handleOperator = (value : string, state : any) => {
  return {
    operator: value,
    previousValue: state.currentValue,
    currentValue: '0',
  };
};

export const handleClearValue = () => {
  return {
    currentValue: '0',
  };
};

export const handleClearAll = () => {
  return {
    currentValue: '0',
    operator: null,
    previousValue: null,
  };
};

export const handleDot = (state : any) => {
  if (state.currentValue.indexOf('.') >= 0) {
    return {};
  }

  return { currentValue: `${state.currentValue}.` };
};

export const handlePercentage = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  if (currentValue === 0) {
    return {};
  }

  return {
    currentValue: state.currentValue / 100,
  };
};

export const handleToggleSign = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  if (currentValue === 0) {
    return {};
  }

  return {
    currentValue: state.currentValue * -1,
  };
};

export const handleSquareRoot = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  return {
    currentValue: Math.sqrt(currentValue),
  };
};

export const handleSquare = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  return {
    currentValue: Math.pow(currentValue, 2),
  };
};

export const handleInverse = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  if (currentValue === 0) {
    return {};
  }

  return {
    currentValue: 1 / currentValue,
  };
};

export const handleBackspace = (state : any) => {
  const { currentValue } = state;

  return {
    currentValue: currentValue.substring(0, currentValue.length - 1),
  };
};

export const handleMemorySave = (state : any) => {
  return {
    memory: state.currentValue,
  };
};

export const handleMemoryRead = (state : any) => {
  return {
    currentValue: state.memory,
  };
};

export const handleMemoryClear = () => {
  return {
    memory: '0',
  };
};

export const handleMemoryPlus = (state : any) => {
  const currentValue = parseFloat(state.currentValue);
  const memory = parseFloat(state.memory);

  return {
    memory: memory + currentValue,
  };
};

export const handleMemoryMinus = (state : any) => {
  const currentValue = parseFloat(state.currentValue);
  const memory = parseFloat(state.memory);

  return {
    memory: memory - currentValue,
  };
};

export const handleSqrt = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  return {
    currentValue: Math.sqrt(currentValue),
  };
};

export const handleSin = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  return {
    currentValue: Math.sin(currentValue),
  };
};

export const handleCos = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  return {
    currentValue: Math.cos(currentValue),
  };
};

export const handleTan = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  return {
    currentValue: Math.tan(currentValue),
  };
};

export const handleLog = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  return {
    currentValue: Math.log(currentValue),
  };
};

export const handleExp = (state : any) => {
  const currentValue = parseFloat(state.currentValue);

  return {
    currentValue: Math.exp(currentValue),
  };
};

export const handlePi = (state : any) => {
  return {
    currentValue: Math.PI,
  };
};

export const handleE = (state : any) => {
  return {
    currentValue: Math.E,
  };
};

export const handleRand = (state : any) => {
  return {
    currentValue: Math.random(),
  };
};
