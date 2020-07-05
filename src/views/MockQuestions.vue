<template>
  <test-panel
    title="Mock Exam"
    description="In order to pass the exam, you’ll need to get 40 out of 50 questions
      right on a multiple-choice knowledge test. Everytime you retake the exame the
      questions will be different."
    :questions="$store.getters.mockQuestions"
    oneTestTitle="Start Mock Test"
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
