import { 
  ADD_BALANCE,
  ADD_TO_RECEIPT,
  UPDATE_BALANCE
 } from "../action/action_type"

const initialState = {
  userReceipt: [],
  userBalance: 5000,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_RECEIPT:
      return { ...state, userReceipt: [ ...state.userReceipt, action.payload ]};

    case ADD_BALANCE:
      return { ...state, userBalance: state.userBalance + action.payload };

    case UPDATE_BALANCE:
    return { ...state, userBalance: state.userBalance - action.payload };

    default:
      return state;
  }
}
export const selectUserBalance = (state) => state.user.userBalance;
export const selectUserReceipt = (state) => state.user.userReceipt;
export default userReducer;