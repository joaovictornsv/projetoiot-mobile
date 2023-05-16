import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';

const renderItem = (item: any) => (
  <View style={styles.card}>
    <View>
      <Text style={styles.cartTitle}>{item.title}</Text>
    </View>
  </View>
)
;

export default function FavoritesScreen() {
  const [accessList] = useState([])

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.title}>Acessos recentes</Text>
        {
          accessList.length
            ? <FlatList
              data={accessList}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={item => item.id}
            />
            : <Text style={styles.emptyAlert}>Você não possui nenhum acesso.</Text>
        }

      </View>

    </View>
  )
}
