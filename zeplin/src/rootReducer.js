import { combineReducers } from 'redux';

const responsiveSidebarReducer = (state = false, action) => {
  switch (action.type) {
    case 'HIDE_RESPONSIVE_SIDEBAR':
      return false
    case 'TOGGLE_RESPONSIVE_SIDEBAR':
      return !state
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  responsiveSidebarShow: responsiveSidebarReducer,
})


export default rootReducer;
