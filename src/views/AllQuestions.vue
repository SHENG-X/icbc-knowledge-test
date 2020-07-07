<template>
  <test-panel
    title="All Questions"
    description="These are all the questions that we have.
      It is important for you understand all the questions
      before you take the knowledge test."
    :questions="$store.getters.allQuestions"
    oneTestTitle="Practice All Quesions"
    :showCloseButton="false"
    :continueFunction="() => {$router.push('/')}"
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
