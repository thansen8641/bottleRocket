const restaurants = []
const dataLoaded = false


export const initState = {
  restaurants,
  dataLoaded
}


export default (state = initState, action) => {
  switch (action.type) {
    case "SET_RESTAURANT_DATA":
      var toReturn = {...state}
      toReturn.restaurants = action.data
      toReturn.dataLoaded = true
      return toReturn

    default:
      return state
  }
}

