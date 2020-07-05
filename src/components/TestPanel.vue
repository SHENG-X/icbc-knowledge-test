<template>
  <div class="quiz-container">
    <md-card v-show="!currentQuestionSet.length">
      <md-card-header>
        <div class="md-title">
          <span>
            {{ title }}
          </span>
        </div>
      </md-card-header>

      <md-card-content>
        <div class="description">
          {{ description }}
        </div>
        <div class="test-sets">
          <div v-if="oneTestTitle.length">
            <md-card>
              <md-button
                @click="() => setCurrentQuestionSet(questions)"
              >
                {{ oneTestTitle }}
              </md-button>
            </md-card>
          </div>
          <div v-else>
            <md-card v-for="(questions, index) in questionSets" :key="index">
              <md-button
                @click="() => setCurrentQuestionSet(questions)"
              >
                Practice Set #{{ index + 1 }}
              </md-button>
            </md-card>
          </div>
        </div>
      </md-card-content>

    </md-card>

    <div class="panel-container">
      <question-panel
        v-if="currentQuestionSet.length"
        :questions="currentQuestionSet"
        :setCurrentQuestionSet="setCurrentQuestionSet"
        :showCloseButton="showCloseButton"
      />
    </div>
  </div>
</template>

<script>
import QuestionPanel from './QuestionPanel.vue';

export default {
  components: {
    QuestionPanel,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
    questionSetSize: {
      type: Number,
      default: 35,
    },
    oneTestTitle: {
      type: String,
      default: '',
    },
    onTestDescription: {
      type: String,
      default: '',
    },
    showCloseButton: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentQuestionSet: [],
    };
  },
  computed: {
    questionSets() {
      if (this.oneTestTitle) {
        return this.questions;
      }
      const size = this.questionSetSize;
      const questionsCopy = JSON.parse(JSON.stringify(this.questions));
      const questionSetsLocal = [];
      while (questionsCopy.length > size) {
        questionSetsLocal.push(questionsCopy.splice(0, size));
      }
      questionSetsLocal.push(questionsCopy);
      return questionSetsLocal;
    },
  },
  mounted() {
    if (this.oneTestTitle) {
      this.setCurrentQuestionSet(this.questions);
    }
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
  display: flex;
  justify-content: center;
  .md-card {
    margin: 0;
    width: 580px;
    max-width: 100%;
  }
  &>.md-card {
    .md-card-header {
      .md-title {
        margin: 0;
        font-size: 18px;
        font-weight: 500;
      }
      border-bottom: 1px solid #eee;
      padding: 6px 16px;
    }
    .md-card-content {
      padding-bottom: 12px;
      .description {
        margin: 12px 0px;
      }
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
    width: 580px;
    max-width: 100%;
    padding-bottom: 16px;
  }
}
</style>
