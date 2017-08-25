/**
 * Navigator导航器
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
            author:'Junl'//列表页点击 item 传递参数到详情页
        };
    }

    _pressButton() {
        const {navigator} = this.props;
        if (navigator) {
            //入栈
            navigator.push({
                name: 'Detail',
                component: Detail,
                params: {
                    author: this.state.author//设置到Detail组件
                }
            });
        }
    }

    render() {
        return (
            <ScrollView style={NavigatorStyle.scrollView}>
                <Text style={NavigatorStyle.textStyle} onPress={this._pressButton.bind(this)}>列表1</Text>
                <Text style={NavigatorStyle.textStyle} onPress={this._pressButton.bind(this)}>列表2</Text>
                <Text style={NavigatorStyle.textStyle} onPress={this._pressButton.bind(this)}>列表3</Text>
            </ScrollView>
        )
    }
}

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    //组件挂载完毕
    componentDidMount(){
        //获取从列表页传递的参数
        this.setState({
            author: this.props.author
        });
    }

    _pressButton() {
        const {navigator} = this.props;
        //为什么这里可以取到props.navigator,请看上文
        //<Component {...route.params} navigator={navigator}/>
        //这里传递了navigator作为props
        if (navigator) {
            //出栈，相当于将当前的页面pop出去，也就是返回上一个List页面
            navigator.pop();
        }
    }

    render() {
        return (
            <ScrollView>
                <Text style={NavigatorStyle.textStyle} onPress={this._pressButton.bind(this)}>作者是：{this.state.author}</Text>
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
