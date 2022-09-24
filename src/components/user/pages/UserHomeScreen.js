import React from 'react';
import { FlatList } from 'react-native';
// redux and tools
import { selectAllItems } from '../../../redux/reducer/itemReducer';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// component
import ListItems from '../components/User Home Screen/ListItems';

const List = () => {
  const item = useSelector(selectAllItems);
  const [getId, setGetId] = React.useState(0);
  let length = item.length - 1;

  React.useEffect(() => {

    if(length >= 0){
      let { id } = item[length];
      setGetId(id);
    }

  }, [setGetId,])

  return (
    <FlatList
      data={item}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(itemData) => 
        <ListItems 
          { ...itemData.item }
          lastId={getId}
        />
      }
    />
  )
}

export default List