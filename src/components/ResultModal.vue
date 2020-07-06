<template>
  <modal
    name="result-modal"
    :clickToClose="false"
  >
    <div
      v-if="passed"
      class="md-display-3 pass-fail pass"
    >
       Passed
    </div>
    <div
      v-else
      class="md-display-3 pass-fail fail"
    >
       Failed
    </div>
    <div class="md-title percentage">
      {{ percentage }} - {{correctCount}} out of {{questionSize}} correct
    </div>
    <div class="close-button">
      <md-button
        class="md-raised md-primary"
        @click="() => $modal.hide('result-modal')"
      >
        <md-icon>close</md-icon>
        <span>Close</span>
      </md-button>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    correctCount: {
      type: Number,
      required: true,
    },
    questionSize: {
      type: Number,
      require: true,
    },
  },
  computed: {
    percentage() {
      return `${((this.correctCount / this.questionSize) * 100).toFixed(0)} %`;
    },
    passed() {
      return this.correctCount / this.questionSize > 0.9;
    },
  },
};
</script>

<style lang="scss" scoped>
.pass-fail {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: 600;
}
.pass {
  color: #4b8869 !important;
  &:before {
    font-family: Material Icons;
    content: "\e5ca";
    border: 1px solid;
    border-radius: 100%;
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 600;
  }
}
.fail {
  color: #A82E2E !important;
  &:before {
    font-family: Material Icons;
    content: "\e14c";
    border: 1px solid;
    border-radius: 100%;
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 600;
  }
}
.percentage {
  display: flex;
  justify-content: center;
}
.close-button {
  margin: 24px 0;
  display: flex;
  justify-content: center;
}
</style>
