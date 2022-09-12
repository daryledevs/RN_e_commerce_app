import React from 'react';
import { View, Text, FlatList } from 'react-native';
// redux and tools
import { selectAllItems } from '../../../../redux/reducer/itemReducer';
import { useSelector } from 'react-redux';
// component
import ListItems from './ListItems';

const List = ({ setHideHeader }) => {
  const item = useSelector(selectAllItems);
  const [getId, setGetId] = React.useState(0);
  let length = item.length - 1;
  let { id } = item[length];
  
  React.useEffect(() => {
    setGetId(id);
    setHideHeader(true)
  }, [setGetId, length, id])

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