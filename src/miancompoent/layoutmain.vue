<template>
  <div class="hello">
      <el-row class="tac">
       <el-col :span="4" >
    <h5>dome列表</h5>
    <el-menu
      mode='vertical'
     :collapse="false" 
     :collapse-transition="true" 
      class="el-menu-vertical-demo"
      @select="cleakrouter"
      @open="handleOpen"
      v-for="item in router"
      :key='item.title'
      @close="handleClose">
      <el-submenu index="1" class="indesrt">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">测试用例</template> -->
          <el-menu-item :index="chillder.name" v-for="chillder in  item.childes" :key="chillder.name">{{chillder.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
     </el-col>
     <el-col :span="20">
       <router-view></router-view>
     </el-col>
    </el-row>
  </div>
</template>

<script>
import minxe from '../minixs/routermins'
export default {
  mixins:[minxe],
  name: 'layoutmain',
  props: {
    msg: String
  },
  methods: {
   handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
   handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    cleakrouter(key) {
      this.$router.push(`/${key}`)
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.indesrt{
  width: 100%;
  min-width:120px;
}
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 120px;
}

</style>
