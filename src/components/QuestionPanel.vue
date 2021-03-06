<template>
  <md-card v-if="questions">
    <md-card-header>
      <div class="md-title">
        <span>
          Question {{ currentIdx + 1 }} of {{ questionSize }}
        </span>
        <md-button
          v-if="showCloseButton"
          @click="() => setCurrentQuestionSet([])"
        >
          <md-icon>close</md-icon>
        </md-button>
      </div>
    </md-card-header>
    <md-card-content>
      <question-card
        :question="currentQuestion"
        :num="currentIdx"
        :selected="selected"
        :setSelect="setSelect"
        :correctAnswered="correctAnswered"
        :setCorrectAnswered="setCorrectAnswered"
        :key="currentQuestion._id"
      />
    </md-card-content>

    <md-card-actions>
      <md-button
        v-show="selected && $route.name !== 'archived' && !currentArchived"
        class="md-raised"
        @click="handleArchive"
      >
        Archive
      </md-button>
      <md-button
        v-show="$route.name === 'archived'"
        class="md-raised md-accent"
        @click="removeArchive"
      >
        Remove
      </md-button>
      <md-button
        v-if="currentIdx !== questions.length -1"
        class="md-raised md-primary"
        @click="nextQuestion"
      >
        Next
      </md-button>
      <md-button
        v-if="selected && currentIdx === questions.length -1"
        class="md-raised md-primary"
        @click="handleContinue"
      >
        Continue
      </md-button>
    </md-card-actions>

    <notifications
      group="qw"
      :style="{'padding-top': '64px'}"
    />

    <result-modal
      :correctCount="correctAnswered"
      :questionSize="questions.length"
    />

  </md-card>
</template>

<script>
import QuestionCard from '@/components/QuestionCard.vue';
import ResultModal from '@/components/ResultModal.vue';

export default {
  components: {
    QuestionCard,
    ResultModal,
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
    showCloseButton: {
      type: Boolean,
      default: true,
    },
    correctAnswered: {
      type: Number,
      required: true,
    },
    setCorrectAnswered: {
      type: Function,
      required: true,
    },
    continueFunction: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      currentIdx: 0,
      selected: false,
    };
  },
  watch: {
    selected(val) {
      if (val === true) {
        if (this.currentIdx === this.questions.length - 1) {
          setTimeout(() => {
            this.$modal.show('result-modal');
          }, 160);
        }
      }
    },
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIdx];
    },
    currentArchived() {
      let archived = false;
      this.$store.getters.archivedQuestions.forEach((q) => {
        if (JSON.stringify(q) === JSON.stringify(this.currentQuestion)) {
          archived = true;
        }
      });
      return archived;
    },
    questionSize() {
      return this.questions.length;
    },
  },
  methods: {
    nextQuestion() {
      if (this.selected) {
        this.setSelect(false);
        this.currentIdx += 1;
      } else {
        this.$notify({
          group: 'qw',
          type: 'error',
          duration: 2000,
          speed: 1000,
          title: 'Selection Required',
          text: 'Please select an answer to continue.',
        });
      }
    },
    setSelect(select) {
      this.selected = select;
    },
    handleArchive() {
      this.$store.commit('archiveQuestion', this.questions[this.currentIdx]);
      this.$notify({
        group: 'qw',
        type: 'success',
        duration: 300,
        speed: 300,
        title: 'Archived',
        text: 'Question was saved.',
      });
    },
    removeArchive() {
      this.setSelect(false);
      this.$store.commit('removeArchived', this.questions[this.currentIdx]);
    },
    handleContinue() {
      if (this.continueFunction) {
        this.continueFunction();
      } else {
        this.setCurrentQuestionSet([]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card-header {
  padding: 8px 16px 8px 16px;
  border-bottom: 1px solid #eee;
  .md-title {
      margin: 0 !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      .md-button {
        --button-size: 28px;
        min-width: var(--button-size);
        max-width: var(--button-size);
        .md-icon {
          margin: 0;
          font-size: var(--button-size);
        }
      }
    }
}
</style>
