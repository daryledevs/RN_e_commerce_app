import { Pressable, View, Image, Text, StyleSheet } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import star from '../../../../redux/reducer/star.png'
const ListItems = (props) => {
  const navigation = useNavigation();

  function viewItem(id){
    navigation.navigate('Item Details', {itemId: id});
  }
  
  return (
    <Pressable style={props.lastId == props.id ? styles.lastItem : styles.itemContainer}
      onPress={() => viewItem(props.id)}
    >
      <View>
        <Image
          source={{
            uri: props.imageURL
          }}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>{props.name}</Text>
        <View style={styles.itemRatingsReviews}>
          <Image
            source={require('../../../../redux/reducer/star.png')}
            style={styles.itemStarImage}
          />
          <Text>({props.ratings ? props.ratings : 0})</Text>
          <Text>{props.reviews ? props.reviews : 0}</Text>
        </View>
      </View>
    </Pressable>
  )
}

// don't forget the item container design
const styles = StyleSheet.create({
  itemContainer: {
    padding: 5,
    marginBottom: 5
  },
  lastItem:{
    padding: 5,
  },
  itemTitle:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemImage: {
    width: '100%', height: 400
  },
  itemStarImage:{
    width: 14, height: 14
  },
  itemRatingsReviews:{
    flexDirection: 'row',
    alignItems: 'center',
  }
})
export default ListItems