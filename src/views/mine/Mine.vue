<template>
    <div id="main">
        <!-- 头部 -->
        <Header :title="title"></Header>

        <!-- 中间 -->
        <div id="content">
            <Login></Login>
        </div>

        <!-- 尾部 -->
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import Tabbar from '../../components/tabbar/Tabbar'
import Login from '../../components/login/Login'

export default {
    name: 'Mine',
    data() {
        return {
            title: '我的喵喵'
        };
    },
    methods: {
    },
    components: {
        Header,
        Tabbar,
        Login
    },
};
</script>

<style scoped lang="scss">
</style>
