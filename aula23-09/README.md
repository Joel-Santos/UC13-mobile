Projeto Calculadora de IMC em React Native
Descrição do Projeto
Este projeto é uma calculadora de IMC (Índice de Massa Corporal) construída com React Native e Expo. A aplicação permite ao usuário inserir seu peso e altura e calcular seu IMC com base nos dados fornecidos.

Este projeto foi criado utilizando o GitHub Codespaces para facilitar o desenvolvimento em um ambiente online.

Pré-requisitos
GitHub account com acesso a Codespaces.
Ambiente de desenvolvimento Expo CLI (instalado via npm).
Passos para criação do projeto usando Codespaces
Passo 1: Iniciando o Codespace
Acesse o seu repositório UC13-mobile no GitHub.
Clique no botão <> Code, e vá até a aba Codespaces.
Clique em Create codespace on main para iniciar o ambiente de desenvolvimento.
Passo 2: Instalação do Expo CLI
No terminal do Codespace já aberto na pasta do seu repositório, instale o Expo CLI:

bash
Copiar código
npm install -g expo-cli
Isso instala o Expo CLI globalmente para criar e gerenciar projetos React Native de forma simples.

Passo 3: Inicialização do projeto
No terminal, execute o seguinte comando para criar um novo projeto Expo vazio com o template "blank":

bash
Copiar código
npx create-expo-app@latest aula23-09 --template blank
Isso irá criar a pasta aula23-09 dentro do repositório. Navegue para a pasta criada:

bash
Copiar código
cd aula23-09
Passo 4: Estrutura do Projeto
Arquivos importantes criados:
App.js: Este arquivo contém toda a lógica do aplicativo React Native e será o foco das explicações a seguir.
package.json: Gerencia as dependências do projeto, incluindo React Native e outros pacotes.
Códificação Detalhada
Arquivo: App.js
Aqui está o código completo com explicações detalhadas linha por linha:

javascript
Copiar código
// Importação de módulos necessários
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
React: O React é a biblioteca usada para construir interfaces de usuário. Aqui, o useState é importado para gerenciar o estado interno do app, permitindo que os dados (peso, altura e resultado) sejam atualizados e renderizados dinamicamente.
Componentes React Native:
StyleSheet: usado para criar estilos para o layout do app.
Text: renderiza textos na tela.
View: serve como contêiner para agrupar componentes.
TextInput: permite a entrada de texto, onde o usuário insere peso e altura.
Button: renderiza um botão para calcular o IMC.
javascript
Copiar código
// Definição do componente principal
export default function App() {
  const [peso, setPeso] = useState('');       // Estado para armazenar o peso inserido pelo usuário
  const [altura, setAltura] = useState('');   // Estado para armazenar a altura inserida pelo usuário
  const [resultado, setResultado] = useState(''); // Estado para armazenar o resultado do IMC
export default function App(): Esta função exporta o componente principal do aplicativo. No React Native, a UI é construída com componentes, e essa função define a interface e lógica principal.
useState(''): São definidos três estados:
peso: armazenará o valor do peso que o usuário inserir.
altura: armazenará a altura.
resultado: armazenará o resultado do cálculo de IMC ou uma mensagem de erro.
javascript
Copiar código
// Função para calcular o IMC com base no peso e altura
  function calcularIMC() {
    if (peso && altura) { // Verifica se os campos de peso e altura foram preenchidos
      const imc = (parseFloat(peso) / parseFloat(Math.pow(altura / 100, 2))).toFixed(2); // Calcula o IMC
      setResultado(`Seu IMC é: ${imc}`); // Atualiza o resultado
    } else {
      setResultado('Preencha os dados corretamente'); // Mensagem de erro se faltar algum dado
      alert('Erro: Preencha todos os campos!'); // Exibe um alerta
    }
  }
Função calcularIMC:
Verifica se os valores de peso e altura foram preenchidos.
parseFloat(): converte as strings dos inputs em números.
Math.pow(altura / 100, 2): converte a altura de centímetros para metros e calcula o quadrado (necessário para a fórmula do IMC).
toFixed(2): garante que o IMC seja exibido com duas casas decimais.
Atualiza o estado resultado com o IMC calculado ou exibe uma mensagem de erro.
javascript
Copiar código
// Estrutura da interface do app
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text> {/* Título do app */}
      
      {/* Campo para inserção do peso */}
      <TextInput
        style={styles.input}
        placeholder='Peso (kg)'
        keyboardType='numeric'
        value={peso}
        onChangeText={setPeso}
      />

      {/* Campo para inserção da altura */}
      <TextInput
        style={styles.input}
        placeholder='Altura (cm)'
        keyboardType='numeric'
        value={altura}
        onChangeText={setAltura}
      />

      {/* Botão para calcular o IMC */}
      <View style={styles.buttonContainer}>
        <Button title="Calcular IMC" onPress={calcularIMC} color="#4CAF50" />
      </View>

      {/* Exibição do resultado */}
      <Text style={styles.result}>
        {resultado}
      </Text>
    </View>
  );
}
Retorno da Interface:
A interface é estruturada usando View, que agrupa todos os elementos visuais.
TextInput: dois campos de entrada para peso e altura.
Button: o botão aciona a função calcularIMC quando clicado.
Text: exibe o resultado do IMC ou mensagens de erro.
Estilos - StyleSheet
javascript
Copiar código
// Definição de estilos
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
Estilos personalizados:
container: define o layout geral, com alinhamento centralizado e cor de fundo clara.
title: estilo para o título do app, com fonte grande e cor escura.
input: define os campos de texto para peso e altura, com bordas, espaçamento e altura definidos.
buttonContainer: ajusta o espaçamento do botão.
result: estilo do texto que exibe o resultado do IMC, com tamanho de fonte maior e alinhamento central.
Passo 5: Rodando o projeto com o Expo Tunnel
Após a configuração e desenvolvimento, use o comando abaixo para rodar o aplicativo e acessá-lo de qualquer dispositivo via túnel público:

bash
Copiar código
npx expo start --tunnel
Esse comando cria um túnel que permite acessar o projeto remotamente através do QR code que será gerado.
Escaneie o QR code com o Expo Go app no seu dispositivo móvel para testar o app.