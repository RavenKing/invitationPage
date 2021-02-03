<template>
<div id="app">
    <div id="header">BroccoLi&Co
    </div>
    <HelloWorld />
    <footer class="wlui-footer">
        Copyright@2021 www.xxx.cn All Rights Reserved
    </footer>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style>
#header {
    background: #2e2f30;
    text-align: left;
    color: white;
    font-size: 24px;
    padding: 10px;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.wlui-footer {
    text-align: center;
    font-size: 14px;
    background: #2e2f30;
    line-height: 36px;
    color: white;
    clear: both;
    z-index: 2;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
}
</style>
