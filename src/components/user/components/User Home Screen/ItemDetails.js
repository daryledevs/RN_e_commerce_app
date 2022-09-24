import React from 'react'
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
// redux and tools
import { addToCart, cancelBuy, increaseQuantity, decreaseQuantity } from '../../../../redux/action/cartAction';
import { selectCartQuantity } from '../../../../redux/reducer/cartReducer';
import { selectAllItems } from '../../../../redux/reducer/itemReducer';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

const ItemDetails = ({ route }) => {
  const item = useSelector(selectAllItems);
  const cartQuantity =useSelector(selectCartQuantity);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { itemId } = route.params;
  const viewedItem = item.find((items) => items.id === itemId);
  
  const [addItemToCart, setAddItemToCart] = React.useState();

  React.useEffect(() => {
    if(viewedItem){
      setAddItemToCart({
        id: viewedItem.id,
        productName: viewedItem.name,
        productPrice: viewedItem.price,
        itemQuantity: cartQuantity,
      });
    }
    // we put dependency here because viewedItem is the only that is change from here
    // so useEffect only re-render when viewItem change through viewing the component itemDetails
    // so then, we prevent infinite loops and its respective error(s);
  }, [viewedItem, cartQuantity]);

  function addToCartHandler(){
    Alert.alert(
      "Added successfully!",
      "Item has been added to your cart.",
      [
        { text: "OK" }
      ]
    );
    dispatch(addToCart(addItemToCart));
    dispatch(cancelBuy());
    navigation.navigate('List');
  };

  function buyHandler(){
    dispatch(addToCart(addItemToCart));
    dispatch(cancelBuy());
    navigation.navigate('Cart');
  }

  function cancelHandler(){
    dispatch(cancelBuy());
    navigation.navigate('User');
  }

  function quantityHandler(num){
    if(num === 1 && cartQuantity < viewedItem.availableItem) return dispatch(increaseQuantity());
    if(num === 0 && cartQuantity > 0) return dispatch(decreaseQuantity()); 
  }
  return (
    <View>
        <Image
          source={{
            uri: viewedItem.imageURL
          }}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>{viewedItem.name}</Text>
          <Text>Available item: {viewedItem.availableItem}</Text>
        <View style={styles.quantityContainer}>
          <Button title='-' onPress={() => quantityHandler(0)}/>
          <Text style={styles.quantityContainer__text}>{cartQuantity}</Text>
          <Button title='+' onPress={() => quantityHandler(1)}/>
        </View>
        <View style={styles.itemRatingsReviews}>
          <Image
            source={viewedItem.star}
          />
          <Text>({viewedItem.ratings})</Text>
          <Text>{viewedItem.reviews}</Text>
        </View>
        <Text style={styles.itemTitle}>Description</Text>
        <Text>{viewedItem.description}</Text>
        <View style={styles.buttonStyle}>
          <Button title='Add to Cart' disabled={cartQuantity === 0 ? true: false} onPress={addToCartHandler} />
          <Button title='Buy now'disabled={cartQuantity === 0 ? true: false} onPress={buyHandler} />
          <Button title='Cancel' onPress={cancelHandler} />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  itemImage: {
    width: '100%', height: 400
  },
  itemTitle:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemRatingsReviews:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer__text:{
    fontSize: 20,
    marginHorizontal: 15
 }
})
export default ItemDetails