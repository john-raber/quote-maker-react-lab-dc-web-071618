export default (state = [], action) => {
  let idx;
  let newState;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      idx = state.indexOf(state.find(q => q.id === action.quoteId));
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      idx = state.indexOf(state.find(q => q.id === action.quoteId));
      newState = [...state];
      newState[idx].votes = state[idx].votes + 1;
      return newState;

    case "DOWNVOTE_QUOTE":
      idx = state.indexOf(state.find(q => q.id === action.quoteId));
      newState = [...state];
      newState[idx].votes = state[idx].votes > 0 ? state[idx].votes - 1 : 0;
      return newState;

    default:
      return state;
  }
};
