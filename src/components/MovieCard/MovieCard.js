import React from "react";
import { Dimensions, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Alert } from "react-native";

const MovieCard = (props) => {    
    const imageURL = "https://www.themoviedb.org/t/p/original" + props.image
    return(
        <TouchableOpacity style={CardStyle.container} onPress={() => Alert.alert(props.title, props.overview)}>
            <ImageBackground style={CardStyle.image} source={{uri : imageURL}}>
                <View style={CardStyle.infos}>
                    <View style={CardStyle.header}>
                        <Text style={CardStyle.headerText}>{props.title}</Text>
                    </View>
                    <View style={CardStyle.popularity}>
                        <Text style={CardStyle.popularityText}>{props.popularity}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const CardStyle = StyleSheet.create({
    container: {
        height : Dimensions.get("window").height/4,
        marginBottom : 20,
        flexDirection : 'row',
    },
    image: {
        width : '100%',
        height : '100%',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        overflow : 'hidden'
    },
    infos : {
        position : 'absolute',
        bottom : 0,
        backgroundColor :'black',
        width : '100%',
        height : '20%',
        padding : 5,
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection :'row'
    },
    header: {
        
    },
    headerText : {
        textAlign :'center',
        fontWeight : 'bold',
        color : 'white'
    },
    popularityText : {
        textAlign :'center',
        color : 'white'
    }
})
export default MovieCard;