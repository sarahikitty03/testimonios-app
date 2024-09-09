import { StyleSheet, Text, View, Image } from 'react-native';

export default function Testimonio(props){
    return(
        <View style={styles.container}>
            <View style={styles.imagenContainer}>
              <Image style={styles.imagen} source={props.imagen}/>  
            </View>
            <View style={styles.textcontainer}>
                <Text style={styles.tituloimagen}>
                  <Text style={{ fontWeight: 'bold'}}>{props.nombreTitulo}</Text> {props.titulo}</Text>
                <Text style={styles.puestoimagen}>{props.puesto} <Text style={{ fontWeight: 'bold'}}>{props.puestoNombre}</Text></Text>
                <Text style={styles.descripcionimagen}>{props.descripcion}</Text>
            </View>    
        </View>
        
    );
}

const styles = StyleSheet.create({
    imagenContainer: {
      flex:1,
      alignSelf:'center',
    },
    imagen:{
      height:250,
      width:'100%',
    },
    tituloimagen: {
      fontSize: 20,
      marginBottom: 4
    },
    puestoimagen: {
      fontSize: 20,
      marginBottom: 8
    },
    descripcionimagen: {
      fontSize: 20,
      marginBottom: 12
    },
    container: {
      flex:1,
      flexDirection:'row',
      gap: 8,
      minHeight:250,
      backgroundColor:'#fff',
      marginVertical: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    textcontainer: {
      flex:2,
      alignSelf:'center',
      textAlign: 'center'
    }
  });
  