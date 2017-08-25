/**
 * 网络加载数据
 * Created by HY-58 on 2017/8/24.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    Image,
} from "react-native";

export default class FetchTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,//自定义state变量及初始值
        }
    }

    //发起网络请求 获取数据
    fetchUserList() {
        const url = 'https://api.github.com/users/mralexgray/repos';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                    var users = responseJson;
                    ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                    var firstUser = users[0].owner;
                    console.log(firstUser);
                    this.setState({
                        user: firstUser,
                    });
                }
            )
    }

    //页面渲染完毕主动回调的方法
    componentDidMount() {
        this.fetchUserList();
    }

    render() {
        let item = this.state.user;
        //这里需要判断网络请求结果，如item为空，会发生空指针
        if (item) {
            //如不为空 则渲染item
            return (this.renderItem(item));
        }
        return (
            <Text style={{textAlign: "center", fontSize: 15, padding: 20}}>正在加载中...</Text>
        )
    }

    renderItem(item) {
        return (
            <View style={FetchTestStyle.container}>
                <Image style={FetchTestStyle.image_UserAvatar} source={{uri: item.avatar_url}}/>
                <View>
                    <Text style={FetchTestStyle.text_UserId}>用户id:{item.id}</Text>
                    <Text style={FetchTestStyle.text_UserType}>用户type:{item.type}</Text>
                </View>
            </View>
        );
    }
}

const FetchTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#f0f",
        height:100,
        flexDirection: "row",
        alignItems:"center",
    },
    image_UserAvatar:{
        width:80,
        height:80,
        borderRadius:80,
        resizeMode:"cover",
        marginHorizontal:12,
    },
    text_UserId:{
        color:"black",
        fontSize:16,
        lineHeight:20,
    },
    text_UserType:{
        color:"gray",
        fontSize:16,
        lineHeight:20,
    },


});


