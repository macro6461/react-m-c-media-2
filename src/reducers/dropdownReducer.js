export default function dropdownReducer(state={hovered: false, mobileScreen: false, hamburgerClicked: false}, action){

  switch(action.type){
    case "CHANGE_DROPDOWN":
      return {...state, hovered: action.payload}
    case "DETECT_SCREEN_CHANGE":
      if (window.innerWidth > 500){
        return {...state, mobileScreen: false}
      } else {
        return {...state, mobileScreen: true}
      }
    case "DETECT_HAMBURGER_CLICKED":

    return {...state, hamburgerClicked: action.payload}
    default:
      return state
  }
}
