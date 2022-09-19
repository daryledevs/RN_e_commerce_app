import React from 'react';
import { View, Text, FlatList } from 'react-native';
// redux and tools
import { selectAllItems } from '../../../../redux/reducer/itemReducer';
import { useSelector } from 'react-redux';
// component
import ListItems from './ListItems';
import { useNavigation } from '@react-navigation/native';

const List = ({ setHideHeader }) => {
  const navigation = useNavigation();
  const item = useSelector(selectAllItems);
  const [getId, setGetId] = React.useState(0);
  let length = item.length - 1;

  React.useEffect(() => {

    if(length >= 0){
      let { id } = item[length];
      setGetId(id);
    }

    setHideHeader(true);

    navigation.setOptions({
      headerShown: false
    });

  }, [setGetId,])

  return (
    <FlatList
      data={item}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(itemData) => 
        <ListItems 
          { ...itemData.item }
          setHideHeader={setHideHeader}
          lastId={getId}
        />
      }
    />
  )
}

export default List