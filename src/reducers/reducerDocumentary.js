import { FETCH_DOCUMENTARIES } from '../requests'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_DOCUMENTARIES:
      const data = action.payload.data.results;
      return { ...state, data };
    default:
      return state;
  }
}
