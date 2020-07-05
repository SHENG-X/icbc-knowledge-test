<template>
  <test-panel
    title="Road Sign Quizzes"
    description="The blow quiz sets will help you learn and practice knowledge
      of road signs.On the actual written test, you are reuqired to correctly
      answer at least 90% of the questions."
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
