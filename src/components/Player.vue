<template>
  <v-card tile class="d-flex flex-column ma-5">
    <div
      id="overlay"
      style="height: 360px;margin-bottom: -360px;background-color: transparent;z-index: 10;"
    ></div>
    <youtube
      :video-id="ytid"
      :player-vars="{ autoplay: 1, controls: 0 }"
      ref="youtube"
      @playing="playing"
    ></youtube>

    <div class="d-flex justify-space-between align-center">
      <div style="width: 200px">
        <v-slider
          min="0"
          max="100"
          v-model="volume"
          color="white"
          dense
          :prepend-icon="volumeIcon"
          @click:prepend="toggleVolume()"
          class="mb-n5 px-3"
        ></v-slider>
      </div>
      <div>{{ formatSeconds(elapsed) }} / {{ formatSeconds(duration) }}</div>
      <div>
        <v-btn fab tile text>
          <v-icon>
            mdi-refresh
          </v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    ytid: String,
    start: Number,
    duration: Number,
  },
  data() {
    return {
      volume: 50,
      seeked: false,
      elapsed: 0,
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    volumeIcon() {
      if (this.volume == 0) {
        return "mdi-volume-mute";
      } else if (this.volume < 10) {
        return "mdi-volume-low";
      } else if (this.volume < 60) {
        return "mdi-volume-medium";
      }
      return "mdi-volume-high";
    },
  },
  methods: {
    toggleVolume() {
      if (this.volume == 0) {
        this.volume = 100;
      } else {
        this.volume = 0;
      }
    },
    startTimer() {
      var that = this;
      if (this.elapsed < this.duration) {
        this.elapsed++;
        setTimeout(function() {
          that.startTimer();
        }, 1000);
      }
    },
    formatSeconds(s) {
      var minutes = Math.floor((((s % 31536000) % 86400) % 3600) / 60);
      var seconds = (((s % 31536000) % 86400) % 3600) % 60;
      var fseconds = seconds < 10 ? "0" + seconds : seconds;
      return `${minutes}:${fseconds}`;
    },
    playing() {
      if (!this.seeked) {
        this.$refs.youtube.player.seekTo(this.start);
        console.log(" start: " + this.start);
        this.elapsed = this.start;
        this.seeked = true;
        this.$refs.youtube.player.setVolume(this.volume);
      }
    },
  },
  watch: {
    ytid() {
      this.seeked = false;
    },
    volume() {
      this.$refs.youtube.player.setVolume(this.volume);
    },
    duration() {
      this.startTimer();
    },
  },
};
</script>

<style></style>
