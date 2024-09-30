import React from "react";
import { View, ActivityIndicator } from "react-native";

function Routes(){
    const loading = false;
    const signed = false;


return(
    signed ? <View>Logado</View> : <View> Não Logado</View>
)

}

export default Routes;