export default function demosReducer(state={demos: [], youtube_videos: []}, action){

  switch(action.type){
    case "RENDER_DEMOS":
      return {...state, demos: action.payload}
    case "RENDER_YOUTUBE_VIDEOS":
     
      return {...state, youtube_videos: action.payload}
    default:
      return state
  }
}
