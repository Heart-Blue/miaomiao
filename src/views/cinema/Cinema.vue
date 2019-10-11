<template>
    <div id="main">
        <!-- 头部 -->
        <Header :title="title"></Header>

        <!-- 中间 -->
        <div id="content">
            <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>

            <CiList></CiList>
        </div>

        <!-- 尾部 -->
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from '../../components/header/Header'
import Tabbar from '../../components/tabbar/Tabbar'
import CiList from '../../components/ciList/CiList'

export default {
    name: 'Cinema',
    data() {
        return {
            title: '喵喵影院'
        };
    },
    methods: {
    },
    components: {
        Header,
        Tabbar,
        CiList
    },
};
</script>

<style scoped lang="scss">
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
