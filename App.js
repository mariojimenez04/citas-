import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App = () => {
  //Los hooks se colocan en la parte superior
  const [modalvisible, setModalvisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas
      </Text> 
      <Text style={styles.tituloBold}>Veterinaria</Text>

      <Pressable
        style={styles.btnPrimary}
        onPress={() => setModalvisible(true) }
      >
        <Text
          style={styles.btnSecondary}
        >Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? <Text style={styles.noPacientes}>No hay pacientes aún</Text> : 
      <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return(
            
            <Paciente 
              item={item}
            />
          )
        }}
      />
      
      }

      <Formulario 
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
      
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    color: '#374151'
  },
  tituloBold: {
    textAlign: 'center',
    fontWeight: '900',
    color: '#6b28d9',
    fontSize: 20
  },
  btnPrimary: {
    marginHorizontal: 20,
    backgroundColor: '#6d28d9',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  btnSecondary: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
