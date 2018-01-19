const CHANGE_TYPE = 'CHANGE_TYPE';

export const typeReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_TYPE: 
      return action.payload;
  }
  return state;
}

export const changeType = (type) => {
  return {
    type: CHANGE_TYPE,
    payload: type,
  }
}