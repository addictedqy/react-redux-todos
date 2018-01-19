const ADD_ITEM = 'ADD_INPUTING';
const DEL_ITEM = 'DEL_ITEM';
const CHANGE_CHECKED = 'CHANGE_CHECKED';
const ALL_CHECKED = 'ALL_CHECKED';
const ALL_UNCHECKED = 'ALL_UNCHECKED';

export const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: 
      return state.concat([{title: action.payload, checked: false}]);

    case DEL_ITEM:
      const newState = state.concat([]);
      newState.splice(action.payload, 1);
      return newState;

    case CHANGE_CHECKED: 
      const changeState = state.concat([]);
      changeState[action.payload].checked = !changeState[action.payload].checked;
      return changeState;

    case ALL_CHECKED:
      const allState = state.concat([]);
      return allState.map((item, i) => {
        return {
          title: item.title,
          checked: true,
        }
      });

    case ALL_UNCHECKED:
      const unallState = state.concat([]);
      return unallState.map((item, i) => {
        return {
          title: item.title,
          checked: false,
        }
      });
  }
  return state;
}

export const addAction = (value) => {
  return {
    type: ADD_ITEM,
    payload: value,
  }
}

export const delAction = (index) => {
  return {
    type: DEL_ITEM,
    payload: index,
  }
}

export const changeChecked = (index) => {
  return {
    type: CHANGE_CHECKED,
    payload: index,
  }
}

export const allChecked = () => {
  return {
    type: ALL_CHECKED,
    payload: null,
  }
}

export const allUnchecked = () => {
  return {
    type: ALL_UNCHECKED,
    payload: null,
  }
}
