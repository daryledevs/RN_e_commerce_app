import { Pressable, View, Image, Text, StyleSheet } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const ListItems = (props) => {
  const { setHideHeader } = props;
  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [setHideHeader]);
  
  function foo(id){
    setHideHeader(false);
    navigation.navigate('Item Details', {itemId: id, setHideHeader});
  }
  return (
    <Pressable style={props.lastId == props.id ? styles.lastItem : styles.itemContainer}
      onPress={() => foo(props.id)}
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
            source={props.star}
            style={styles.itemStarImage}
          />
          <Text>({props.ratings})</Text>
          <Text>{props.reviews}</Text>
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
    width: 16, height: 16
  },
  itemRatingsReviews:{
    flexDirection: 'row',
    alignItems: 'center',
  }
})
export default ListItems