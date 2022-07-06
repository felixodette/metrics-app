const foo = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'TEST':
      return { ...state, test: payload };
    default:
      return state;
  }
};

export default foo;
