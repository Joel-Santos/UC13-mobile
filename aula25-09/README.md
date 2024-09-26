
# Projeto React Native - Aula25-09

Este projeto é uma calculadora com interface simples, desenvolvida em React Native, que permite ao usuário realizar operações matemáticas básicas e visualizar o resultado na tela.

## Pré-requisitos

- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [GitHub Codespaces](https://docs.github.com/en/codespaces)
- Acesso à internet para o uso do túnel e geração do QR code.

## Estrutura do Projeto

- `Calculadora.js`: Componente principal da aplicação, contendo a lógica da calculadora e o layout com todos os botões e display.
- `styles`: Objeto de estilo com as configurações de layout.

### Instruções para Configuração

1. **Acessar o Codespace**:  
   Entre no Codespace do repositório UC13-mobile já configurado.


2. **Criar o Projeto Expo**:  
   Para iniciar um novo projeto com o template blank, execute o seguinte comando:

   ```bash
   npx create-expo-app@latest calculadora --template blank
   ```

3. **Rodar o Projeto**:  
   Entre na pasta do projeto `aula25-09` e execute o comando abaixo para iniciar o projeto:

   ```bash
   cd aula25-09
   npx expo start --tunnel
   ```

   O Expo vai gerar um QR code. Use o aplicativo Expo Go no seu dispositivo móvel para escanear o QR code e testar o app.

4. **Estruturar as Pastas**:
   A seguinte estrutura foi adotada nesta aula:

```bash
 aula25-09/
│
├── .expo/                     # Arquivos de configuração específicos do Expo
├── assets/                    # Imagens e outros arquivos estáticos
├── components/                # Componentes reutilizáveis (Calculadora.js)
├── node_modules/              # Pacotes e dependências instaladas
│
├── .gitignore                 # Arquivos e pastas a serem ignorados pelo Git
├── App.js                     # Arquivo principal da aplicação
├── app.json                   # Configurações do projeto Expo
├── babel.config.js            # Configurações do Babel para transpilar o código
├── package-lock.json          # Lockfile de dependências (npm)
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto
```

## Estrutura do Calculadora.js

O arquivo `Calculadora.js` contém a implementação da calculadora com interface. Ele utiliza o hook `useState` para controlar o valor exibido no display e as operações inseridas pelo usuário. O layout é gerado utilizando componentes nativos do React Native como `View`, `Text`, e `TouchableOpacity`.

### Funcionalidades:

- **Display de Expressão**: Uma área de texto que mostra a expressão matemática atual e o resultado.
- **Botões de Operações**: Botões para inserir números (`0-9`), operações (`+`, `-`, `*`, `/`), ponto (`.`), limpar (`C`), apagar (`<`), e calcular (`=`).
- **Validação de Expressão**: Se a expressão for inválida ao pressionar `=`, uma mensagem de erro será exibida.

```javascript
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculadora = () => {
    const [displayValue, setDisplayValue] = useState('');

    // Função para tratar os botões pressionados
    const handlePress = (value) => {
        if (value === 'C') {
            setDisplayValue('');
        } else if (value === '=') {
            try {
                setDisplayValue(eval(displayValue).toString());
            } catch (e) {
                setDisplayValue('Erro');
            }
        } else if (value === '<') {
            setDisplayValue(displayValue.slice(0, -1));
        } else {
            setDisplayValue(displayValue + value);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.display}>{displayValue}</Text>

            {/** Primeira linha de botões */}
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('C')}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('<')}>
                    <Text style={styles.buttonText}>&lt;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>

            {/** Segunda linha */}
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>

            {/** Terceira linha */}
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            {/** Quarta linha */}
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonEqualVertical]}
                    onPress={() => handlePress('=')}
                >
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>

            {/** Quinta linha */}
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, styles.buttonZero]} onPress={() => handlePress('0')}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonDot]} onPress={() => handlePress('.')}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#333',
        height: '80%'
    },
    display: {
        width: '90%',
        height:'40%',
        minHeight: 50,
        backgroundColor: '#fff',
        textAlign: 'right',

        fontSize: 32,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        marginTop:20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        width: '20%',
        margin: 5,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    buttonZero: {
        width: '43%', // Ocupa duas colunas
    },
    buttonDot: {
        width: '43%', // Ocupa uma coluna
    },
    buttonEqualVertical: {
        width: '20%',
        height: '100vh', // Ocupa duas linhas
        backgroundColor: '#ff9800', // Cor diferente para destaque
        padding: 15,
        alignItems: 'center',
        margin: 5,
        borderRadius: 5,
    },
});

export default Calculadora;
```

## Estrutura do App.js

```javascript
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './components/Calculadora';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
});

export default App;
```

Neste código, criamos uma calculadora simples com interface, onde o usuário pode realizar operações matemáticas básicas e visualizar o resultado no display.
