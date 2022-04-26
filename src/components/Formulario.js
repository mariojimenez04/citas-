import React, { useState } from 'react';
import {Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = ({modalvisible, setModalvisible, pacientes, setPacientes,}) => {
    const [ paciente, setPaciente ] = useState('');
    const [ propietario, setPropietario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ sintomas, setSintomas ] = useState('');
    const [ fecha, setFecha ] = useState(new Date());

    const handleCita = () => {
        //Validacion
        if( [paciente, propietario, email, sintomas,].includes('') ) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
            )

            return
        }

        const nuevoPaciente = {
            id: Date.now(),
            paciente,
            propietario,
            email,
            telefono,
            sintomas,
            fecha
        }

        setPacientes(...pacientes, nuevoPaciente);
        setModalvisible(!modalvisible);

        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setSintomas('')
        setFecha(new Date())
    }

    return (
        <Modal
            animationType='slide'
            visible={modalvisible}
        >
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva {''}
                        <Text>Cita</Text>
                    </Text>

                    <Pressable 
                        //onPress={ () => setModalvisible(!modalvisible)} <-(!modalvisible nega la condicion)
                        onPress={ () => setModalvisible(false) }
                        style={styles.btnCancell}
                    >
                        <Text style={styles.btnCancellText}>
                            Cancelar cita
                        </Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre paciente</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nombre de la mascota'
                            placeholderTextColor={'#666'}
                            value={ paciente }
                            onChangeText={ setPaciente }
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nombre del dueño'
                            placeholderTextColor={'#666'}
                            value={ propietario }
                            onChangeText={ setPropietario }
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Tu email'
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={ email }
                            onChangeText={ setEmail }
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Tu teléfono'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            value={ telefono }
                            onChangeText={ setTelefono }
                            maxLength={12}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput 
                            style={[styles.input, styles.sintomasInput]}
                            placeholder='Síntomas de la mascota'
                            placeholderTextColor={'#666'}
                            value={ sintomas }
                            onChangeText={ setSintomas }
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha alta</Text>
                        
                        <View style={styles.fechaContenedor}>
                            <DatePicker 
                                date={ fecha }
                                locale='es'
                                onDateChange={ (date) => setFecha(date)}
                            />
                        </View>
                    </View>

                    <Pressable 
                        style={ styles.btnCita}
                        onPress={ handleCita }
                    >
                        <Text style={styles.btnCitaTexto}>
                            Agregar Paciente
                        </Text>
                    </Pressable>
                </ScrollView> 
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6d28d9',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#fff'
    },
    tituloBold: {
        fontWeight: '900',
    },
    campo: {
        marginVertical: 5,
        marginHorizontal: 30
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    label: {
        color: '#fff',
        marginTop: 10,
        fontSize: 20,
        fontWeight: '600',
    },
    sintomasInput: {
        height: 100
    },
    fechaContenedor: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
    },
    btnCancell: {
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: '#5827a4',
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10
    },
    btnCancellText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        textTransform: 'uppercase',
        fontSize: 15
    },
    btnCita: {
        marginVertical: 30,
        backgroundColor: '#f59e0b',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnCitaTexto: {
        color: '#5827a4',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 15
    }
})

export default Formulario
