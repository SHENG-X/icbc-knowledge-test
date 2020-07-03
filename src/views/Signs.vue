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
import signs from '../json/signs.json';
import QuestionCard from '../components/QuestionCard.vue';

export default {
  components: {
    QuestionCard,
  },
  data: () => ({
    menuVisible: false,
    questions: signs,
  }),
};
</script>

<style lang="scss" scoped>
</style>
