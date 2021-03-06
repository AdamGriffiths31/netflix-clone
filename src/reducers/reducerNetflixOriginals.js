import { FETCH_NETFLIX_ORIGINALS } from '../requests'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_NETFLIX_ORIGINALS:
      const data = action.payload.data.results
      return { ...state, data }
    default:
      return state
  }
}
