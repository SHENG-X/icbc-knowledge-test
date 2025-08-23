<template>
  <test-panel
    title="Road Rule Quizzes"
    description="The quiz sets below will help you learn and practice knowledge
      of road rules. On the actual written test, you are required to correctly
      answer at least 80% of the questions."
    :questions="$store.getters.ruleQuestions"
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
