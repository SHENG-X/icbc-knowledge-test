<template>
  <div>
    <QuestionCard
      v-for="(q, index) in questions"
      :question="q"
      :num="index"
      :key="q._id"
    />
  </div>
</template>

<script>
import rules from '../json/rules.json';
import QuestionCard from '../components/QuestionCard.vue';

export default {
  components: {
    QuestionCard,
  },
  data: () => ({
    menuVisible: false,
    questions: rules,
  }),
};
</script>

<style lang="scss" scoped>
</style>
