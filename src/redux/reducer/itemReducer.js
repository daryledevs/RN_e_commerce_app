import { 
  ADD_ITEM,
  EDIT_ITEM,
  UPDATE_AVAILABLE_ITEM,
  DELETE_ITEM
} from '../action/action_type';

const initialState = [
  {
    id: 1,
    imageURL : 'https://reactjs.org/logo-og.png',
    name: 'Item 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
    star: require('./star.png'),
    ratings: 6,
    reviews: 70,
    availableItem: 5,
    price: 500,
    place: 'Manila, Metro Manila'
  },
  {
    id: 2,
    imageURL : 'https://reactjs.org/logo-og.png',
    name: 'Item 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
    star: require('./star.png'),
    ratings: 5.5,
    reviews: 100,
    availableItem: 4,
    price: 400,
    place: 'Manila, Metro Manila'
  },
  {
    id: 3,
    imageURL : 'https://reactjs.org/logo-og.png',
    name: 'Item 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptatum beatae aliquid consectetur suscipit, sint sapiente dolores, unde officia omnis quae placeat laboriosam distinctio maxime itaque at harum voluptas?',
    star: require('./star.png'),
    ratings: 4.5,
    reviews: 30,
    availableItem: 3,
    price: '300',
    place: 'Manila, Metro Manila'
  }
]


const itemReducer = (state = initialState, { type, payload }) =>{
  switch (type) {
    case ADD_ITEM:
      const { newItem } = payload;
      return { ...state, newItem };

    case EDIT_ITEM:
        const { changeItem } = payload;
        return { ...state, changeItem };
    
    case UPDATE_AVAILABLE_ITEM:
  
      return state;
    
    case DELETE_ITEM:
    
      return state;
    
    default:
      return state;
  }
}

export const selectAllItems = (state) => state.item;
export default itemReducer;