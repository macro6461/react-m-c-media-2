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

export function fetchYoutubeVideos(){
  return (dispatch) =>{
    fetch(`${baseURL}/youtube_videos`)
    fetch('http://localhost:3000/youtube_videos')
    .then(res => res.json())
    .then(json => dispatch(fetchYoutubeRequestResolved(json)))
  }
}

export function fetchYoutubeRequestResolved(data){
  debugger
  return {
    type: "RENDER_YOUTUBE_VIDEOS",
    payload: data
  }
}
