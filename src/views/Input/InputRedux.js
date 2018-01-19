const CHANGE_INPUTING = 'CHANGE_INPUTING';

export const inputingReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_INPUTING:
      return action.payload;
  }
  return state;
}

export const changeInputingAction = (value) => {
  return {
    type: CHANGE_INPUTING,
    payload: value,
  }
}
