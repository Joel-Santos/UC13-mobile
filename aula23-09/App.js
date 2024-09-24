import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  function calcularIMC(){
    if(peso && altura){
      const imc = (parseFloat(peso) / parseFloat(Math.pow(altura/100,2))).toFixed(2);
      setResultado(imc)
    }else{
      setResultado('Preencha os dados corretamente')
      alert('erooo')
    }
  

  }
  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC</Text>
      <TextInput 
        placeholder='Peso (kg)'
        keyboardType='numeric'
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput 
        placeholder='Altura (cm)'
        keyboardType='numeric'
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      <Text>
        {resultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
