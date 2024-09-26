// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Calculadora = () => {
//     const [displayValue, setDisplayValue] = useState('');

//     const handlePress = (value) => {
//       if (value === 'C') {
//         setDisplayValue('');
//       } else if (value === '=') {
//         try {
//           setDisplayValue(eval(displayValue).toString());
//         } catch (e) {
//           setDisplayValue('Erro');
//         }
//       } else if (value === '<') {
//         setDisplayValue(displayValue.slice(0, -1));
//       } else {
//         setDisplayValue(displayValue + value);
//       }
//     };

//     const buttons = [
//       'C', '<', '/', 'X',
//       '7', '8', '9', '-',
//       '4', '5', '6', '+',
//       '1', '2', '3', '=',
//       '0', '.'
//     ];

//     return (
//       <View style={styles.container}>
//         <Text style={styles.display}>{displayValue}</Text>
//         <View style={styles.buttonsContainer}>
//           {buttons.map((button) => (
//             <TouchableOpacity
//               key={button}
//               style={[
//                 styles.button,
//                 button === '0' ? styles.buttonZero : null,
//                 button === '=' ? styles.buttonEqual : null,
//               ]}
//               onPress={() => handlePress(button === 'X' ? '*' : button)}
//             >
//               <Text style={styles.buttonText}>{button}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#333',
//     },
//     display: {
//       width: '90%',
//       minHeight: 50,
//       backgroundColor: '#fff',
//       textAlign: 'right',
//       fontSize: 32,
//       padding: 10,
//       borderRadius: 5,
//       marginBottom: 20,
//     },
//     buttonsContainer: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//     },
//     button: {
//       width: '20%',
//       margin: 5,
//       padding: 15,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#444',
//       borderRadius: 5,
//     },
//     buttonText: {
//       color: '#fff',
//       fontSize: 24,
//     },
//     buttonZero: {
//       width: '40%',
//        // Ocupa duas colunas
//     },
//     buttonEqual: {
//     height: '44%' ,// Ocupa duas colunas
//     backgroundColor: '#ff9800', // Cor diferente para destaque
//     },
//   });
//   export default Calculadora;

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

