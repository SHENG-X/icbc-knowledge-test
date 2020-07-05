<template>
  <div>
    <test-panel
      v-if="questions.length"
      title="Archived Questions"
      description="The questions below were you saved. It is
        important for you to understand these questinos to pass the actual exam."
      :questions="questions"
      oneTestTitle="Practice Archived Quesitons"
      :showCloseButton="false"
    />
    <div
      v-else
      class="md-title no-archived"
    >
      There is no archived question.
    </div>
  </div>
</template>

<script>
import TestPanel from '@/components/TestPanel.vue';

export default {
  components: {
    TestPanel,
  },
  computed: {
    questions() {
      return this.$store.getters.archivedQuestions;
    },
  },
};
</script>

<style lang="scss" scoped>
.no-archived {
  display: flex;
  justify-content: center;
}
</style>
