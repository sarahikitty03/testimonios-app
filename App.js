import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Testimonio from './Componentes/testimoniopersona';

export default function App() {
  return (
    <View style={styles.container}>
          <Image source={require('./Imagenes/Logo.png')} style={styles.logo} />
      <Text style={styles.tituloText}>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</Text>
      <ScrollView syle={styles.ScrollView}>
        <Testimonio
          imagen={require('./Imagenes/1.png')} 
          descripcion='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."'
          puesto="Ingeniero de software en"
          puestoNombre="Amazon"
          nombreTitulo="Shawn Wang"
          titulo="en Singapur"/>

        <Testimonio
          imagen={require('./Imagenes/2.png')} 
          descripcion='"FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador, en una empresa increíble."'
          puesto="Ingeniera de software en"
          puestoNombre="ChatDesk"
          nombreTitulo="Sarah Chima"
          titulo="en Nigeria"/>

        <Testimonio
          imagen={require('./Imagenes/3.png')} 
          puesto="Ingeniera de software en"
          puestoNombre="Spotify"
          descripcion='"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo. de mis sueños como ingeniero de software en Spotify."'
          nombreTitulo="Emma Bostian"
          titulo="en Suecia"/>
      <StatusBar style="auto" />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
  },

  logo: {
    height: 80,
    width: '100%',
  },

  tituloText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  ScrollView: {
    width: '100%',
  },
});
