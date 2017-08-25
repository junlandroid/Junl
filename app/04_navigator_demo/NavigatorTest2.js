/**
 * Navigator导航器
 *
 * 传值：列表页（传递id到详情页）--->详情页（根据id获取用户信息，在回传给列表页）--->列表页（接收用户信息）
 * Created by HY-58 on 2017/8/24.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,

    ScrollView,
} from "react-native";
import {
    Navigator,
}from"react-native-deprecated-custom-components";

export default class NavigatorTest extends Component {

    render() {
        let defaultName = 'List';
        let defaultComponent = List;
        return (
            <Navigator
                //初始化路由，路由中包含name和component
                initialRoute={{name: defaultName, component: defaultComponent}}
                //配置场景，动画
                congfigureScene={
                    (route) => {
                        //这个是页面之间的跳转动画，具体有哪些，可以看目录，源码目录：
                        // D:\RN_software\app-project\HelloRN-master\node_modules\react-native\Libraries\CostomComponent
                        //该工程目录下不存在，可能是API发生了变换
                        return Navigator.SceneConfigs.VerticalUpSwipeJump;
                    }
                }
                renderScene={
                    (route, navigator) => {//回调出来的
                        let Component = route.component;
                        //"..." ===>为ES6的语法，遍历该对象，拿出所有属性，赋值为Component组件
                        return <Component {...route.params} navigator={navigator}/>;
                    }
                }
            />
        );
    }
}

//列表页组件
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:1,
            user:null,//设置初始值 用来接收详情页回传的数据
        };
    }

    _pressButton() {
        const {navigator} = this.props;
        const self = this;
        if (navigator) {
            //入栈
            navigator.push({
                name: 'Detail',
                component: Detail,
                params: {
                    id:this.state.id,
                    getUser:function (user) {//params参数中可以传递方法，通过key-value形式
                        self.setState({//self指代列表页面，用this的话指当前params环境
                            user: user
                        })
                    }
                }
            });
        }
    }

    render() {
        if (this.state.user) {
            //如果user不为空
            return (
                <View>
                    <Text style={NavigatorStyle.textStyle}>用户信息：{JSON.stringify(this.state.user)}</Text>
                </View>
            );
        } else {
            return (
                <ScrollView style={NavigatorStyle.scrollView}>
                    <Text style={NavigatorStyle.textStyle} onPress={this._pressButton.bind(this)}>列表1</Text>
                    <Text style={NavigatorStyle.textStyle} onPress={this._pressButton.bind(this)}>列表2</Text>
                    <Text style={NavigatorStyle.textStyle} onPress={this._pressButton.bind(this)}>列表3</Text>
                </ScrollView>
            )
        }
    }
}

const USER_MODEL = {
    1:{user:'junl',age:25},
    2:{user:"fff",age:25}
};
class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:null,//用来接收传递过来的参数
        };
    }

    //组件挂载完毕
    componentDidMount(){
        //获取从列表页传递的参数
        this.setState({
            id:this.props.id
        });
    }

    _pressButton() {
        const {navigator} = this.props;
        if (this.props.getUser) {
            let user = USER_MODEL[this.props.id];
            this.props.getUser(user);
        }
    }

    if(navigator){
        navigator.pop();
    }


    render() {
        return (
            <ScrollView>
                <Text style={NavigatorStyle.textStyle}>传递过来的id是：{this.state.id}</Text>>
                <Text style={NavigatorStyle.textStyle} onPress={this._pressButton.bind(this)}>点击我跳回去</Text>
            </ScrollView>
        );
    }
}

const NavigatorStyle = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    textStyle: {
        fontSize:20,
    },
})
