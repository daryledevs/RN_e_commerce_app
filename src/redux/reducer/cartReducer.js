import { 
  ADD_TO_CART, 
  REMOVE_CART_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_ITEMS,
  CANCEL_BUY
} from "../action/action_type"

const initialState = {
  itemList:[],
  quantity: 0,
  totalPrice: 0,
}


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, itemList: [...state.itemList, action.payload] }

    case REMOVE_CART_ITEM:
      return { ...state, itemList: action.payload }

    case INCREASE_QUANTITY:
      return { ...state, quantity: state.quantity += 1}

    case DECREASE_QUANTITY:
      return { ...state, quantity: state.quantity -= 1}

    case CLEAR_ITEMS:
      return { ...state, itemList: [] }

    case CANCEL_BUY:
      return { ...state, quantity: 0, totalPrice: 0}

    default:
      return state;
  }
}
export const selectCartItems = (state) => state.cart.itemList;
export const selectCartQuantity = (state) => state.cart.quantity;
export const selectCartTotalPrice = (state) => state.cart.totalPrice;
export default cartReducer;