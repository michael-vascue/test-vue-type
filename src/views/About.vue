<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
// import { Video } from "../interfaces/video.interface";

@Component
export default class VideoCardComponent extends Vue {
  @Prop() readonly video: { id: string };
  @Prop() readonly loading: boolean;

  created(): void {
    console.log(this.static_url); // !COMPLAINS HERE!
  }

  get _video(): { id: string } {
    return this.video;
  }

  get _loading(): boolean {
    return this.loading || false;
  }
}
</script>
