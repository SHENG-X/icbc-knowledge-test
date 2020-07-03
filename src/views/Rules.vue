<template>
  <div class="quiz-container">
    <md-card v-show="!currentQuestionSet.length">
      <md-card-header>
        <div class="md-title">
          <span>
            Road Rules Quizzes
          </span>
        </div>
        <hr/>
      </md-card-header>

      <md-card-content>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </div>
        <div class="test-sets">
          <md-card v-for="(questions, index) in questionSets" :key="index">
            <md-button
              @click="() => setCurrentQuestionSet(questions)"
            >
              Practice Set #{{ index + 1 }}
            </md-button>
          </md-card>
        </div>
      </md-card-content>

    </md-card>

    <div class="panel-container">
      <question-panel
        v-if="currentQuestionSet.length"
        :questions="currentQuestionSet"
        :setCurrentQuestionSet="setCurrentQuestionSet"
      />
    </div>
  </div>
</template>

<script>
import QuestionPanel from '../components/QuestionPanel.vue';
import rules from '../json/rules.json';

export default {
  components: {
    QuestionPanel,
  },
  data() {
    return {
      questions: rules,
      currentQuestionSet: [],
    };
  },
  computed: {
    questionSets() {
      const size = 35;
      const questionsCopy = JSON.parse(JSON.stringify(this.questions));
      const questionSetsLocal = [];
      while (questionsCopy.length > size) {
        questionSetsLocal.push(questionsCopy.splice(0, size));
      }
      questionSetsLocal.push(questionsCopy);
      return questionSetsLocal;
    },
  },
  methods: {
    setCurrentQuestionSet(questions) {
      this.currentQuestionSet = questions;
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz-container {
  position: relative;
  .md-card {
    margin: 0;
  }
  &>.md-card {
    .md-card-content {
      padding-bottom: 12px;
    }
    .test-sets {
      .md-card {
        width: 100%;
        height: 52px;
        margin: 12px 0px;
        .md-button {
          margin: 0;
          width: 100%;
          height: 100%;
          ::v-deep .md-button-content {
            @extend .md-button;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
  .panel-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // .md-card {
    //   min-height: 100%;
    // }
  }
}
</style>
