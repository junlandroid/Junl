#ReactNative学习

        ##作者简介
        东方耀
        ##技术背景

        ##RN环境搭建
        1、安装jdk

        2、安装sdk

        3、安装c++环境

        4、安装node.js和git
        node.js下载地址：https://nodejs.org/en/ 选择v6.11.2

        git下载https://nodejs.org/en/

        设置全局使用指定的镜像

        npm config set registry https://registry.npm.taobao.org

        npm config set disturl https://npm.taobao.org/dist

        5、安装reactnative命令行工具

        从github download react-native 放在git同文件夹下，并解压。cd react-native-master		——>cd react-native-cli  ——>  npm install -g react-native-cli

        6、创建Project

        react-native init JunLiang

        7、运行packager 进入工程目录

        react-native start

        可以用浏览器访问：http://localhost:8081/index.android.bundle?platform=android看看是否可以看到打包后的脚本

        8、准备模拟器或者真机 运行项目

        react-native run-andriod

        问题：SDK location not fond

        解决方法：

        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
        模拟器双击R，或者ctrl+m弹出菜单，然后reload

        ##React 简介
        React主要有如下3哥特点：

        *作为UI（Just The UI）

        *虚拟DOM（Virtual DOM）

        差一部分更新 diff算法

        *数据流（Date Flow）单向数据流

        学习React需要哪些知识？

        JSX语法   类似XML

        ES6相关知识

        前端基础  CSS+DIV  JS

        ##ReactNative调试与打包发布

        ##ReactNative 之ReactJS
        ReactJS核心思想：组件化  维护自己的状态和UI 自动重新渲染

        多个组件组成了一个ReactJS应用

        React是全局对象  顶层Api与组件Api

        React.createClass创建组件类的方法

        React.render渲染，将指定组件渲染到指定DOM节点

        render:组建级的API，返回组件的内部结构

        React.render被ReactDOM.render替代

        ##ReactNative之ReactJS组件生命周期
        1、创建阶段

        2、实例化阶段

        3、更新阶段

        4、销毁阶段

        打开2个git命令行窗口

        1、启动JS service
        2、检测调试设备 adb devices  run-android

        终止命令行 ctrl+c

        instruction:说明

