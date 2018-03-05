export default function demosReducer(state={demos: []}, action){

  switch(action.type){
    case "RENDER_DEMOS":
      return {...state, demos: action.payload}
    default:
      return state
  }
}
