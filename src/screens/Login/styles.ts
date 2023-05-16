
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  authFormContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
  formInput: {
    padding: 10,
    backgroundColor: '#1F2738',
    color: '#FFFFFF',
    height: 55,
    borderRadius: 15,
    marginTop: 5
  },
  submitButton: {
    margin: 10,
    height: 50,
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center',
    backgroundColor: '#D27842',
    borderRadius: 15,
  },
  errorMsg: {
    marginLeft: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'white'
  },
});

export default styles;