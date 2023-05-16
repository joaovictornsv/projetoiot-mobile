import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    marginLeft: 24,
    marginRight: 24
  },

  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#0C0F14'
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FBFEFF',
    marginBottom: 80
  },

  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#151922',
    padding: 18,
    width: 360,
    borderRadius: 12,
    marginBottom: 14,
    borderLeftColor: '#D27842',
    borderLeftWidth: 20,
  },
  
  cartTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },

  cardDescription: {
    color: 'white',
  },

  removeButtom: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 46,
    height: 46,
    borderRadius: 6,
  },

  emptyAlert: {
    color: '#BBBBBB',
    fontSize: 20,
  }

})