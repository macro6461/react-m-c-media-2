import baseURL from '../secrets.js'

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

export function fetchDemos(){
    
  return (dispatch) =>{
    fetch(`${baseURL}/videos`)
    .then(res => res.json())
    .then(json => dispatch(fetchDemosRequestResolved(json)))
  }
}

export function fetchDemosRequestResolved(data){
  console.log(data)
  return {
    type: "RENDER_DEMOS",
    payload: data
  }
}
