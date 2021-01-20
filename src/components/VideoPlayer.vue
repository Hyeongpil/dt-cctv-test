<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'
import 'videojs-contrib-hls.js/src/videojs.hlsjs'
export default {
    name: "VideoPlayer",
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>