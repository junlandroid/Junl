/**
 * Created by HY-58 on 2017/8/23.
 */

import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
export default class FlexDiceTest extends Component {
    render() {
        return (
            <View style={FlexDiceTestStyle.container}>
                <Text style={FlexDiceTestStyle.item1}>1</Text>
                <Text style={FlexDiceTestStyle.item1}>2</Text>
                <Text style={FlexDiceTestStyle.item1}>3</Text>
                <Text style={FlexDiceTestStyle.item1}>4</Text>
                <Text style={FlexDiceTestStyle.item1}>5</Text>
                <Text style={FlexDiceTestStyle.item1}>6</Text>
                <Text style={FlexDiceTestStyle.item1}>7</Text>
                <Text style={FlexDiceTestStyle.item1}>8</Text>
                <Text style={FlexDiceTestStyle.item1}>9</Text>
            </View>
        )
    }
}
const FlexDiceTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 300,//不能加""
        width: 300,//不能加""
        flexDirection: "row",//主轴方向
        flexWrap: "wrap",//规定flex容器是单行或多行，同时横轴的方向决定了新行堆叠的方向
        justifyContent: "space-between",//设置元素在主轴方向的对其方式
    },
    item1: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,//不能加""
        width: 80,//不能加""
        textAlign: "center",//指定元素水平方向的对齐方式
        textAlignVertical: "center",//元素在垂直方向的对齐方式
        margin: 4,//不能加""
    },
})

