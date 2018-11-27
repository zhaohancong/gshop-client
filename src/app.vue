<template>
    <div>
      <!--显示当前路由组件-->
      <router-view/>
      <FootGuide/>
    </div>
</template>

<script>
    import FootGuide from './components/FootGuide/FootGuide'
    export default {
      components:{/*局部注册只能在当前组件使用  */
        FootGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/css" scoped>

</style>
