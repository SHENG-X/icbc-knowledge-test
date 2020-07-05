<template>
  <div>
    <home-route-card
      title="All Questions"
      description="These are all the questions that we have.
        It is important for you understand all the questions
        before you take the knowledge test."
      buttonTitle="Practice All Quesions"
      route="/all"
    />
    <home-route-card
      title="Mock Exam"
      description="In order to pass the exam, you’ll need to get 40 out of 50 questions
        right on a multiple-choice knowledge test. Everytime you retake the exame the
        questions will be different."
      buttonTitle="Start Mock Test"
      route="/mock"
    />
    <home-route-card
      title="Road Sign Quizzes"
      description="The blow quiz sets will help you learn and practice knowledge
        of road signs.On the actual written test, you are reuqired to correctly
        answer at least 90% of the questions."
        buttonTitle="Practice Sign Quesions"
        route="/signs"
    />
    <home-route-card
      title="Road Rule Quizzes"
      description="The blow quiz sets will help you learn and practice knowledge
        of road rules.On the actual written test, you are reuqired to correctly
        answer at least 90% of the questions."
        buttonTitle="Practice Rule Quesions"
        route="/rules"
    />
  </div>
</template>

<script>
import HomeRouteCard from '@/components/HomeRouteCard.vue';

export default {
  components: {
    HomeRouteCard,
  },

};
</script>

<style lang="scss" scoped>
</style>
