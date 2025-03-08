<template>
    <div class="audio-player">
      <audio ref="audio" @play="setupAudioContext" @ratechange="onRateChange" controls>
        <source :src="audioSrc" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      
      <label>Speed: {{ speed.toFixed(2) }}x</label>
      <input type="range" min="0.5" max="2" step="0.01" v-model.number="speed" @input="updateSpeed" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      audioSrc: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        audioContext: null,
        source: null,
        speed: 1,
        pitch: 1,
        audioElement: null,
        gainNode: null,
        playbackRateNode: null,
      };
    },
    mounted() {
      this.loadSettings();
      this.setDefaultVolume();
    },
    methods: {
      setupAudioContext() {
        if (!this.audioContext) {
          this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
          this.audioElement = this.$refs.audio;
          const track = this.audioContext.createMediaElementSource(this.audioElement);
          this.playbackRateNode = this.audioContext.createGain();
          track.connect(this.playbackRateNode).connect(this.audioContext.destination);
        }
        this.updateSpeed();
        this.updatePitch();
      },
      updateSpeed() {
        if (this.audioElement) {
          this.audioElement.playbackRate = this.speed;
          localStorage.setItem('audioPlayerSpeed', this.speed);
        }
      },
      updatePitch() {
        if (this.audioContext) {
          this.audioContext.resume();
          this.audioElement.preservesPitch = false;
          this.audioElement.mozPreservesPitch = false;
          this.audioElement.webkitPreservesPitch = false;
          this.audioElement.playbackRate = this.pitch;
          localStorage.setItem('audioPlayerPitch', this.pitch);
        }
      },
      loadSettings() {
        const savedSpeed = localStorage.getItem('audioPlayerSpeed');
        const savedPitch = localStorage.getItem('audioPlayerPitch');
        if (savedSpeed !== null) {
          this.speed = parseFloat(savedSpeed);
        }
        if (savedPitch !== null) {
          this.pitch = parseFloat(savedPitch);
        }
      },
      setDefaultVolume() {
        if (this.$refs.audio) {
          this.$refs.audio.volume = 0.25;
        }
      },
      onRateChange() {
        if (this.audioElement && this.audioElement.playbackRate !== this.speed) {
          this.speed = this.audioElement.playbackRate;
        }
      }
    }
  };
  </script>
  
  <style>
  .audio-player {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
  }
  </style>