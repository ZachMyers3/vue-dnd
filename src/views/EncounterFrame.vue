<template>
  <div class="iframe-wrapper">
    <vue-friendly-iframe
      ref="iframeEl"
      src="https://www.improved-initiative.com/p/zyxcnm4v"
      @load="onLoad"
      frameborder="0"
      gesture="media"
      allow="encrypted-media"
    ></vue-friendly-iframe>
  </div>
  <!-- <vue-friendly-iframe
    class="d-flex pa-2"
    src="https://www.improved-initiative.com/p/zyxcnm4v"
    @load="onLoad"
  ></vue-friendly-iframe> -->
</template>
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
