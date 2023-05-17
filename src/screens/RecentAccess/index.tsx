import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';

const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];

const renderItem = (item: any) => {
  const date = new Date(item.date);
  const formatedDate = (
    date.getDate() + " " + months[(date.getMonth())] + " " + date.getFullYear() + " - " +
    date.getHours() + ":" + date.getMinutes()
  );

  return (
  <View style={styles.card}>
    <View>
      {item.user_name && <Text style={styles.cartTitle}>{item.user_name}</Text>}
      <Text style={styles.cardDescription}>{formatedDate}</Text>
    </View>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: item.allowed ? '#79B4B7': '#D77FA1' }}>
      {item.allowed ? 'Liberado' : 'Bloqueado'}
    </Text>
  </View>
)}
;

export default function RecentAccessScreen() {
  const [accessList] = useState([
    {
      id: Math.random()*100,
      user_name: 'John',
      date: new Date().toISOString(),
      allowed: true
    },
    {
      id: Math.random()*100,
      date: new Date().toISOString(),
      allowed: false
    }
  ])

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
