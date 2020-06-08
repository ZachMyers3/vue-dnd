<template>
  <v-card class="iframe-wrapper">
    <v-card-title>
      <v-row>
        <v-col>
          <v-text-field
            v-model="encounterId"
            label="ENCOUNTER ID"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn color="primary">Load</v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <div v-if="iFrameLoading">
      Loading encounter...
    </div>
    <vue-friendly-iframe
      v-else
      ref="iframeEl"
      :src="encounterURL"
      frameborder="0"
      gesture="media"
      allow="encrypted-media"
      @load="onLoad"
      @iframe-load="onLoad"
    ></vue-friendly-iframe>
  </v-card>
  <!-- <vue-friendly-iframe
    class="d-flex pa-2"
    src="https://www.improved-initiative.com/p/zyxcnm4v"
    @load="onLoad"
  ></vue-friendly-iframe> -->
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class EcounterFrame extends Vue {
  @Prop() private eid!: string;
  private encounterId = "";
  private encounterURL = "";
  private iFrameLoading = true;

  mounted(): void {
    this.encounterId = this.eid;
    this.encounterURL = `https://www.improved-initiative.com/p/${this.encounterId}`;
  }

  @Watch("eid")
  watchid(): void {
    this.encounterId = this.eid;
    this.encounterURL = `https://www.improved-initiative.com/p/${this.encounterId}`;
  }

  data() {
    return {
      encounterId: this.encounterId,
      encounterURL: this.encounterURL,
    };
  }

  onLoad() {
    console.log("loaded");
    this.iFrameLoading = false;
  }
}
</script>
<style lang="scss">
.iframe-wrapper {
  border: 1px solid gray;
  height: 90%;
  .vue-friendly-iframe {
    height: 100%;
    width: 100%;
    iframe {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
