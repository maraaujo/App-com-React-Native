import React from "react";
import { StyleSheet, Image, Dimensions, Text, View, ScrollView, FlatList,rederItem} from "react-native";
import Topo from "../Topo/Topo";
import Detalhes from "../Detalhes/Detalhes"
import Item from "../Item/Item";
import Botao from "../Botao/Botao";
import Texto from "../Texto/Texto";


export default function Cesta({topo, detalhes,itens}){
  return <>
   <FlatList 
    data={itens.lista}
    renderItem={Item}
    keyExtractor={({nome})=>nome}
    ListHeaderComponent={() =>{
      return <>
        <Topo {...topo}/>
        <View style={estilos.cesta}>
          <Detalhes {...detalhes}/>
          <Botao {...detalhes}/>
          <Texto style={estilos.titulo}>{itens.titulo}</Texto>
        </View>
      </>
    }}
   />
   
  </>
}

const estilos = StyleSheet.create({
  titulo:{
    color:"#464646",
    fontWeight:"bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    marginLeft: 90,
}, 
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  
});