<template>
  <test-panel
    title="Road Rule Quizzes"
    description="The blow quiz sets will help you learn and practice knowledge
      of road rules.On the actual written test, you are reuqired to correctly
      answer at least 90% of the questions."
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
