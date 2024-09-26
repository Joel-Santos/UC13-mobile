
# **README.md - Projeto Calculadora de IMC em React Native**

## **Descrição do Projeto**
Este projeto consiste em uma **calculadora de IMC (Índice de Massa Corporal)**, criada com **React Native** e utilizando o **Expo**. A aplicação permite que o usuário insira seu peso e altura para calcular e exibir seu IMC.

O projeto foi desenvolvido dentro do ambiente **GitHub Codespaces**, aproveitando a conveniência de um ambiente de desenvolvimento baseado na nuvem.

---

## **Pré-requisitos**

- Conta no GitHub com acesso ao **Codespaces**.
- Ambiente Expo CLI instalado.

---

## **Passos para configuração e criação do projeto usando Codespaces**

### **Passo 1: Iniciando o Codespace**

1. No repositório `UC13-mobile`, inicie um novo Codespace:
   - Vá até o seu repositório no GitHub.
   - Clique no botão **`<> Code`**, selecione a aba **`Codespaces`** e clique em **`Create codespace on main`**.

2. Com o Codespace aberto, já estará no diretório do seu repositório. Você pode rodar os comandos no terminal.

---

### **Passo 2: Instalando o Expo CLI**

1. No terminal do Codespace, instale o **Expo CLI**:

   ```bash
   npm install -g expo-cli
   ```

   Isso vai instalar o Expo CLI globalmente para gerenciar projetos React Native.

---

### **Passo 3: Criando o Projeto Expo**

1. Crie o projeto Expo na pasta `aula23-09`:

   ```bash
   npx create-expo-app@latest aula23-09 --template blank
   ```

2. Navegue até a pasta criada:

   ```bash
   cd aula23-09
   ```

---

## **Explicação Detalhada do Código**

O arquivo principal de desenvolvimento do projeto é o **App.js**, onde toda a lógica da aplicação e a interface de usuário são construídas. Abaixo está a explicação detalhada de cada parte do código.

### **Código Completo - App.js**

```javascript
// Importação de módulos necessários
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
```

- **`import React, { useState } from 'react'`**: Importa o React e o **`useState`**, que é um hook usado para gerenciar o estado dentro do componente.
- **`import { StyleSheet, Text, View, TextInput, Button }`**: Importa componentes nativos do React Native para criar a interface do usuário.

---

```javascript
// Definição do componente principal da aplicação
export default function App() {
  const [peso, setPeso] = useState('');       // Estado que armazena o valor do peso inserido
  const [altura, setAltura] = useState('');   // Estado que armazena o valor da altura inserida
  const [resultado, setResultado] = useState(''); // Estado que armazena o resultado do cálculo
```

- **`export default function App()`**: Define o componente principal da aplicação.
- **`useState('')`**: O **`useState`** é usado para armazenar e atualizar os valores de **peso**, **altura** e **resultado**. O valor inicial de cada um é uma string vazia.

---

```javascript
// Função para calcular o IMC
  function calcularIMC() {
    if (peso && altura) {  // Verifica se os valores de peso e altura foram preenchidos
      const imc = (parseFloat(peso) / parseFloat(Math.pow(altura / 100, 2))).toFixed(2);  // Fórmula de cálculo do IMC
      setResultado(`Seu IMC é: ${imc}`);  // Atualiza o estado do resultado com o valor do IMC
    } else {
      setResultado('Preencha os dados corretamente');  // Exibe mensagem de erro se faltar algum dado
      alert('Erro: Preencha todos os campos!');  // Exibe alerta de erro
    }
  }
```

- **`calcularIMC`**: Função que realiza o cálculo do IMC (peso dividido pela altura ao quadrado). Se os campos estiverem preenchidos corretamente, ela exibe o resultado; caso contrário, retorna uma mensagem de erro.
- **`parseFloat(peso)`**: Converte o valor de peso (string) para número decimal.
- **`Math.pow(altura / 100, 2)`**: Converte a altura de centímetros para metros e a eleva ao quadrado.

---

```javascript
// Estrutura da interface do aplicativo
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>  {/* Exibe o título da aplicação */}
      
      {/* Campo de entrada para o peso */}
      <TextInput
        style={styles.input}
        placeholder='Peso (kg)'
        keyboardType='numeric'
        value={peso}
        onChangeText={setPeso}
      />

      {/* Campo de entrada para a altura */}
      <TextInput
        style={styles.input}
        placeholder='Altura (cm)'
        keyboardType='numeric'
        value={altura}
        onChangeText={setAltura}
      />

      {/* Botão para realizar o cálculo */}
      <View style={styles.buttonContainer}>
        <Button title="Calcular IMC" onPress={calcularIMC} color="#4CAF50" />
      </View>

      {/* Exibição do resultado do cálculo */}
      <Text style={styles.result}>
        {resultado}
      </Text>
    </View>
  );
}
```

- **`<View>`**: Agrupa os componentes visuais da interface.
- **`<TextInput>`**: Componente de entrada para capturar os valores de peso e altura. Ele utiliza o `keyboardType='numeric'` para garantir que o teclado numérico apareça.
- **`<Button>`**: Botão que, ao ser pressionado, chama a função `calcularIMC`.
- **`<Text>`**: Exibe o resultado do IMC ou uma mensagem de erro caso os dados estejam incompletos.

---

### **Estilos - StyleSheet**

```javascript
// Definição de estilos para a aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
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
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
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

- **`StyleSheet.create()`**: Define os estilos da aplicação. Cada propriedade de estilo corresponde a uma parte visual da interface, como o contêiner principal, o título, os campos de entrada e o resultado.
- **`container`**: Estilo da `View` principal, define a disposição dos elementos (centralizados) e o fundo da tela.
- **`input`**: Estilo dos campos de entrada de peso e altura, com borda arredondada e espaçamento.
- **`result`**: Estilo do texto que exibe o resultado do cálculo do IMC.

---

## **Passo 4: Rodando o Projeto com o Expo Tunnel**

Após finalizar a codificação, você pode rodar o projeto usando o Expo e disponibilizá-lo publicamente com um túnel:

```bash
npx expo start --tunnel
```

- Esse comando abre um túnel público para acessar o projeto a partir de qualquer dispositivo.
- Ao rodar o comando, será exibido um QR code no terminal. Escaneie o código com o app **Expo Go** no seu dispositivo móvel.

---
