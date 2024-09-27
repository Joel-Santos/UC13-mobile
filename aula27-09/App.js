import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import biscoito from "./assets/biscoito.png";
import biscoitoAberto from "./assets/biscoitoAberto.png";

const frasesDesmotivacionais = [
  "A vida é curta. Mas a fila do banco é longa.",
  "Se a vida te der limões, jogue de volta e exija chocolate.",
  "Todo mundo é um gênio. Mas se você julgar um peixe pela sua habilidade de subir em árvores, ele vai passar a vida inteira pensando que é um idiota.",
  "O otimismo é a fé que leva à desilusão.",
  "Sonhe pequeno! Assim você não se decepciona tanto.",
  "O fracasso é o primeiro passo para o sucesso. Mas é também o último passo para a maioria das pessoas.",
  "Acredite em si mesmo... a menos que você seja um idiota.",
  "Se a vida te derrubar, é melhor preparar o colchão.",
  "O importante é participar... a menos que você não consiga nem isso.",
  "Não se preocupe com o amanhã. Pode ser que você não chegue lá mesmo.",
  "Trabalhe duro e em silêncio, deixe seu sucesso fazer barulho. Ou não, porque ninguém vai ouvir.",
  "Se não for para ser infeliz, eu nem saio da cama.",
  "A felicidade é uma ilusão. Assim como o trabalho em equipe.",
  "Não se preocupe, ninguém está prestando atenção em você... e isso é bom.",
  "A única coisa mais triste do que não ter um sonho é acordar para ele.",
  "Você nunca sabe o que vai encontrar. Mas geralmente é um dia comum e sem graça.",
  "A vida é como um jogo de xadrez: você é o peão e sempre acaba sendo sacrificado.",
  "Todo esforço vale a pena... exceto quando não vale.",
  "Se você não sabe o que fazer da vida, não se preocupe. Ninguém sabe.",
  "Desistir é para os fracos. Então, seja forte e desista com estilo!",
  "Às vezes, tudo o que você precisa é de um bom sono... e um plano B."
];

export default function App() {
  const [img, setImage] = useState(biscoito);
  const [frase, setFrase] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={img}
      />
      <Text> {frase} </Text>
      <TouchableOpacity>
        <View>
            <Text>Clique no pitoco e teste a sua sorte!</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
            <Text>Reiniciar</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textofrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});