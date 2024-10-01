import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import biscoitoFechado from './assets/biscoito.png';
import biscoitoAberto from './assets/biscoitoAberto.png';
const frasesTI = [
  "Na dúvida, reinicie o computador.",
  "Desculpe, não posso. Estou em modo de depuração.",
  "Café: a linguagem de programação mais popular.",
  "O que um programador faz no banheiro? Ele compila.",
  "Se funciona, não mexa! É a regra de ouro da TI.",
  "Meu código é como uma cebola: ele faz você chorar!",
  "A vida de um dev: 90% esperando, 10% programando.",
  "Solução: mais café!",
  "O verdadeiro bug é achar que você já fez tudo.",
  "Em caso de dúvida, sempre escolha a opção 'seria um bug'.",
  "Erro 404: produtividade não encontrada.",
  "Programar é 10% de escrever código e 90% de descobrir porque não funciona.",
  "Se eu tivesse um dólar para cada erro de digitação, estaria milionário.",
  "A resposta para tudo na TI: 'isso deve ser um bug'.",
  "A única coisa mais difícil que programar é explicar o que você fez.",
  "Código sem comentário é como receita sem ingredientes.",
  "Hoje é um bom dia para arrumar meu código… amanhã!",
  "Sinto que meu computador e eu temos uma relação de amor e ódio.",
  "Quem precisa de uma vida social quando você tem um compilador?",
  "A única linguagem que entendo fluentemente é a de erros.",
  "Desenvolvedores: sempre prontos para um Ctrl+Z na vida.",
  "Se você não tem um problema, é porque não está programando o suficiente.",
  "A rotina de um dev: café, código, bug, repetição.",
  "Não sou viciado em tecnologia, só estou sempre em modo 'online'.",
  "Quando o cliente diz 'não é bem isso que eu pedi'...",
  "O bug não é um erro, é uma feature não documentada!",
  "Um dia, o código irá se entender… hoje não é esse dia.",
  "A única constante na TI é a mudança… e os bugs.",
  "Desenvolvimento ágil: quem disse que não podemos correr?",
  "Se você acha que seu dia foi ruim, lembre-se do servidor que caiu.",
  "Trabalhar em TI é como ser um super-herói, mas sem a capa.",
  "Em TI, temos dois tipos de pessoas: as que sabem programar e as que pedem ajuda.",
  "O que os programadores fazem nas férias? Eles debugam!",
  "Erros de código são como festas: sempre aparecem inesperadamente.",
  "Código limpo é código que você não consegue encontrar quando precisa.",
  "O ciclo da vida do programador: café, código, repetir até o colapso.",
  "Na programação, as únicas constantes são o café e a procrastinação.",
  "Meu projeto é como uma pizza: está sempre faltando um pedaço.",
  "Se não está quebrado, é porque você não olhou direito.",
  "A melhor parte de programar? A sensação de que você pode resolver tudo… até que não pode.",
  "Todo programador tem uma caixa de bugs que nunca vai abrir.",
  "Trabalho em TI: onde a única coisa mais quebrada que o código é a nossa saúde mental."
];

export default function App() {
  const [img, setImg] = useState(biscoitoFechado);
  const [frase, setFrase] = useState('');

  function quebrarBiscoito() {
    const index = Math.floor(Math.random() * frasesTI.length)
    //alert(frasesTI[index])
    setFrase(frasesTI[index])
    setImg(biscoitoAberto)
  }
  function reiniciar() {
    setImg(biscoitoFechado)
    setFrase('')
  }
  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />
      <Text style={styles.textofrase}>
        {frase}
      </Text>
      <TouchableOpacity onPress={quebrarBiscoito} style={styles.botao}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Clique neste botão
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={reiniciar} style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]}>
        <View style={styles.btnArea} >
          <Text style={[styles.btnTexto, { color: 'green' }]}>
            Reiniciar
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
    textAlign: 'center',
  }
});
