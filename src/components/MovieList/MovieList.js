import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import MovieListStyle from './MovieListStyle';
import MovieCard from '../MovieCard/MovieCard'

import axios from 'react-native-axios';

function MovieList()
{
    const [data, setData] = useState(null);

    const apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=aa26d41cf627f0c7e57fc2c7a333a3fc&language=en-US&page=1';
    useEffect(() => {
        axios.get(apiURL)
        .then((res) => setData(res.data.results))
        .catch((error) => console.error(error));
    }, [])

    const renderItem = ({item}) => <MovieCard title={item.original_title} overview={item.overview} popularity={item.popularity} 
                                image={item.backdrop_path}
                                />

    return(
        <View style={MovieListStyle.main_contianer}>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            />
        </View>
    )
}

export default MovieList;