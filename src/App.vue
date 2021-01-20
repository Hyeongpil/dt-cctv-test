<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <video-player :options="videoOptions"/>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import axios from 'axios'
export default {
  name: 'App',
  components: {
    VideoPlayer
  },
  data() {
    return {
       videoOptions: {
        autoplay: true,
        controls: true,
        html5: {
          vhs: {
            withCredentials: false,
            overrideNative: true
          },
          hls: {
            withCredentials: false,
            overrideNative: true
          }
        },
        sources: [{
          type: 'application/x-mpegURL',
          src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
          overrideNative: true
        }],
      }
    }
  },
  created() {
    this.checkConnection();
    // setInterval(() => {
    //   axios({
    //   url:'http://root:root@10.131.161.202:80/uuid',
    //   method:'get'
    // }).then((res)=>{
    //   console.log('res :',res);
    // }).catch((err)=>{
    //   console.log('err :',err);
    //   console.log('err.response :',err.response);
    // })
    // }, 10000);
    
    
  },
  methods: {
    checkConnection(){
      // let networkState = navigator.connection.type;
      // console.log('navigator.connection.type :',navigator.connection.type);
      // let states = {};
      // states[Connection.UNKNOWN]  = 'Unknown connection';
      // states[Connection.ETHERNET] = 'Ethernet connection';
      // states[Connection.WIFI]     = 'WiFi connection';
      // states[Connection.CELL_2G]  = 'Cell 2G connection';
      // states[Connection.CELL_3G]  = 'Cell 3G connection';
      // states[Connection.CELL_4G]  = 'Cell 4G connection';
      // states[Connection.CELL]     = 'Cell generic connection';
      // states[Connection.NONE]     = 'No network connection';
      // return states[networkState];
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
