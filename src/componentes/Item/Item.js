import React from "react";
import { mouseProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import Texto from "../Texto/Texto";
import { View, Image,StyleSheet,FlatList} from "react-native";


export default function Item ({item:{nome, imagem}}){
    return <View style={estilos.item}>
        <Image source={imagem} style={estilos/imagem}/>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
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
    item:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        marginHorizontal: 16,
        paddingHorizontal: 16,
    },
    imagem:{
        width: 46,
        height: 46
    },
    nome:{
        marginLeft:11,
        fontSize: 16,
        color: "#464646"

    }
})