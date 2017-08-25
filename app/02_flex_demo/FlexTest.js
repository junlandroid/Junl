/**
 * Created by HY-58 on 2017/8/23.
 */

import React, {Component} from "react";
import {StyleSheet,View, Text} from "react-native";

export default class FlexTest extends Component{
    render(){
        return(
            <View style={FlexTestStyle.container}>
                <Text style={FlexTestStyle.item}>1</Text>
                <Text style={FlexTestStyle.item}>2</Text>
                <Text style={FlexTestStyle.item}>3</Text>
                <Text style={FlexTestStyle.item}>4</Text>
                <Text style={FlexTestStyle.item_flex_end}>5</Text>

            </View>
        )
    }
}

const FlexTestStyle = StyleSheet.create({
    container: {
        backgroundColor:"#0ff",
        flexDirection:"row",//主轴方向  默认为纵向
        flex:1,
    },
    item:{
        backgroundColor: "#f0f",
        flexGrow: 1,//相当于Android控件中的weight属性
        margin: 10,
        height: 100,
    },
    item_flex_end:{
        backgroundColor:"#ff0",
        flexGrow:1,
        margin:4,
        height:100,
        alignSelf:"flex-end",//对齐方式
    },
});