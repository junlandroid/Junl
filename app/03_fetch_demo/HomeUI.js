/**
 * 异步网络请求
 * Created by HY-58 on 2017/8/24.
 */

import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";

var REQUSET_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class HomeUI extends Component {

    constructor(props) {
        super(props);//这句不能省，接收父组件的props
        this.state = {
            movies: null,//这里放置自定义的state变量及初始值
        };
    }

    render() {
        if (!this.state.movies) {
            //如果movies为null，初始情况  渲染加载视图
            return this.renderLoadingView();
        }

        //从网络上获取数据的情况
        var movie = this.state.movies[0];
        return this.renderMovie(movie);
    }

    renderLoadingView() {
        return (
            <View style={HomeUIStyle.container}>
                <Text>正在加载电影...</Text>
            </View>
        )
    }

    //渲染一个电影信息
    renderMovie(movie) {
        return (
            <View style={HomeUIStyle.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={HomeUIStyle.thumbnail}
                />
                <View>
                    <Text style={HomeUIStyle.title}> 标题：{movie.title}</Text>
                    <Text style={HomeUIStyle.year}>{movie.year}年</Text>
                </View>

            </View>
        );
    }


    //组件加载完毕
    componentDidMount() {
        this.fetchData();
    }

    //在React的工作机制上，setState实际会触发一次重新渲染的流程，此时render（）函数被触发，发现this.state.movies不在是null
    //加载网络数据
    fetchData() {
        fetch(REQUSET_URL)
            .then((response) => response.json())//=>得到json数据
            .then((responseData) => {
                this.setState({//{}表示函数体
                    movies: responseData.movies//得到movies字段对应的数据 并设置给movies
                });
            })
            .done();//调用了done，表示抛出异常 而不是简单的忽略
        //↓
        //重新渲染 重走render()方法，发现this.state.movies不为null
    }
}

const HomeUIStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF",
        },
        thumbnail:{
            width:50,
            height:80,
        },
        title:{
            fontSize:20,//注意驼峰命名
            marginBottom:8,
            textAlign:"center",
        },
        year:{
            textAlign:"center",
        },
    }
)
