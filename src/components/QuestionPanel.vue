<template>
  <md-card v-if="questions">
    <md-card-header>
      <div class="md-title">
        <span>
          Question {{ currentIdx + 1 }} of {{ questionSize }}
        </span>
        <md-button @click="() => setCurrentQuestionSet([])">
          <md-icon>close</md-icon>
        </md-button>
      </div>
      <hr/>
    </md-card-header>
    <md-card-content>
      <question-card
        :question="currentQuestion"
        :num="currentIdx"
        :key="currentQuestion._id"
      />
    </md-card-content>

    <md-card-actions>
      <md-button>
        Archive
      </md-button>
      <md-button
        @click="nextQuestion"
      >
        Next
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import QuestionCard from '@/components/QuestionCard.vue';

export default {
  components: {
    QuestionCard,
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
    setCurrentQuestionSet: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      currentIdx: 0,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIdx];
    },
    questionSize() {
      return this.questions.length;
    },
  },
  methods: {
    nextQuestion() {
      this.currentIdx += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.md-title {
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .md-button {
      min-width: 32px;
      max-width: 32px;
      .md-icon {
        margin: 0;
        font-size: 32px;
      }
    }
  }
</style>
