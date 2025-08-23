<template>
  <test-panel
    title="Road Sign Quizzes"
    description="The quiz sets below will help you learn and practice knowledge
      of road signs. On the actual written test, you are required to correctly
      answer at least 80% of the questions."
    :questions="$store.getters.signQuestions"
    :questionSetSize="25"
  />
</template>

<script>
import TestPanel from '@/components/TestPanel.vue';

export default {
  components: {
    TestPanel,
  },
};
</script>
