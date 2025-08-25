import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) {
      setResultado('⚠️ Preencha todos os campos');
      return;
    }

    const alturaMetro = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alturaMetro * alturaMetro);

    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
    
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.title}>Calculadora de IMC</Text>

        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <TouchableOpacity style={styles.button} onPress={calcularIMC}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#232F3E',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#232F3E',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '90%',
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF9900',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#232F3E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: '600',
    color: '#B12704',
    textAlign: 'center',
  },
});
