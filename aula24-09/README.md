
# Projeto React Native - Tarefa01

Este projeto é uma calculadora simples, desenvolvida em React Native, que permite ao usuário inserir uma expressão matemática e visualizar o resultado.

## Pré-requisitos

- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [GitHub Codespaces](https://docs.github.com/en/codespaces)
- Acesso à internet para o uso do túnel e geração do QR code.

## Estrutura do Projeto

- `App.js`: Componente principal da aplicação, contendo a lógica da calculadora e o layout.
- `styles`: Objeto de estilo com as configurações de layout.

### Instruções para Configuração

1. **Acessar o Codespace**:  
   Entre no Codespace do repositório UC13-mobile já configurado.

2. **Criar a pasta para a aula**:  
   No Codespace, navegue até a pasta raiz do projeto `UC13-mobile` e crie uma nova pasta para a aula de hoje:
   
   ```bash
   mkdir aula24-09
   cd aula24-09
   ```

3. **Criar o Projeto Expo**:  
   Para iniciar um novo projeto com o template blank, execute o seguinte comando:

   ```bash
   npx create-expo-app@latest tarefa01 --template blank
   ```

4. **Rodar o Projeto**:  
   Entre na pasta do projeto `tarefa01` e execute o comando abaixo para iniciar o projeto:

   ```bash
   cd tarefa01
   npx expo start --tunnel
   ```

   O Expo vai gerar um QR code. Use o aplicativo Expo Go no seu dispositivo móvel para escanear o QR code e testar o app.

## Estrutura do App.js

O arquivo `App.js` contém a implementação da calculadora simples. Ele utiliza o hook `useState` para controlar a expressão inserida pelo usuário e o resultado calculado. O layout é gerado utilizando componentes nativos do React Native como `View`, `Text`, `TextInput` e `Button`.

### Funcionalidades:

- **Input de Expressão**: Um campo de texto onde o usuário digita a expressão matemática.
- **Botão de Calcular**: Ao pressionar o botão, a expressão é avaliada e o resultado é exibido.
- **Validação**: Se a expressão for inválida, uma mensagem de erro é exibida.

```javascript
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    if(expressao) {
      try {
        const calc = Function(`'use Strict'; return(${expressao})`)();
        setResultado(calc);
      } catch(error) {
        setResultado('Erro ao calcular a expressão');
        alert('Erro: ' +  error.message);
      }
    } else {
      setResultado('Preencha os dados corretamente');
      alert('Preencha a expressão');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Calculadora Simples</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite a Expressão'
        keyboardType='text'
        value={expressao}
        onChangeText={setExpressao}
      />
      <Button title='Calcular Expressão' onPress={calcular} color='green'/>
      <Text style={styles.result}>
        {resultado}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
```
