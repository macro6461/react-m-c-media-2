export function changeDropdown(data){
  return {
    type: "CHANGE_DROPDOWN",
    payload: data
  }
}

export function detectScreenChange(data){
  return {
    type: "DETECT_SCREEN_CHANGE",
    payload: data
  }
}

export function detectHamburgerClicked(data){
   
  return {
    type: "DETECT_HAMBURGER_CLICKED",
    payload: data
  }
}
