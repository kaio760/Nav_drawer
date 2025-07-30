import { useNavigation,  } from '@react-navigation/native';
import { StyleSheet,
   Text,
   View,
   TouchableOpacity,
  } from 'react-native';
 
 
export default function Home() {
 
  const navigation = useNavigation();
 
 
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Home</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  botao:{
   backgroundColor:'#fff',
    width:100,
    height:50,
    margin:2,
    padding:12,
    borderRadius:43,
  }
});
 