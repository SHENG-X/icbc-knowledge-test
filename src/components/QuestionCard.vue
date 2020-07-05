<template>
  <div class="question" >
    <div class="question-answer">
      <div class="md-title">
        {{
          `${num + 1}. ${question.text.__cdata}`
        }}
      </div>
      <div class="image" v-if="question.image && question.image._file!=''">
        <img :src="require(`../${question.image._file}`)" alt="">
      </div>
      <div class="answers" ref="options">
        <div class="answers-row"
          ref="op0"
          @click="()=>checkAnswer(0)">
          <span class="ans-text">
            <span class="ans-idx">
              A.
            </span>
            <span class="ans-content">
              {{ ansewers[0] }}
            </span>
          </span>
        </div>
        <div class="answers-row"
          ref="op1"
          @click="()=>checkAnswer(1)">
          <span class="ans-text">
            <span class="ans-idx">
              B.
            </span>
            <span class="ans-content">
              {{ ansewers[1] }}
            </span>
          </span>
        </div>
        <div class="answers-row"
          ref="op2"
          @click="()=>checkAnswer(2)">
          <span class="ans-text">
            <span class="ans-idx">
              C.
            </span>
            <span class="ans-content">
              {{ ansewers[2] }}
            </span>
          </span>
        </div>
        <div class="answers-row"
          ref="op3"
          @click="()=>checkAnswer(3)">
          <span class="ans-text">
            <span class="ans-idx">
              D.
            </span>
            <span class="ans-content">
              {{ ansewers[3] }}
            </span>
          </span>
        </div>
      </div>
      <div class="more-info" v-if="selected && !correct">
        <a :href="question.link._src" target="_blank">
          {{ question.chapter.__cdata }}
        </a>
        <div v-if="question.source.__cdata!=''">
          {{ question.source.__cdata }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export default {
  props: {
    question: {
      type: Object,
      default: null,
    },
    num: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
    setSelect: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      correct: true,
    };
  },
  computed: {
    ansewers() {
      return this.shuffle([
        this.question.answers.answer.__cdata,
        this.question.answers.distractor_1.__cdata,
        this.question.answers.distractor_2.__cdata,
        this.question.answers.distractor_3.__cdata,
      ]);
    },
  },
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    checkAnswer(op) {
      if (this.selected) {
        return;
      }
      if (this.question.answers.answer.__cdata === this.ansewers[op]) {
        this.$refs[`op${op}`].classList.add('correct');
      } else {
        this.correct = false;
        this.$refs[`op${op}`].classList.add('wrong');
        this.ansewers.forEach((answer, idx) => {
          if (this.question.answers.answer.__cdata === answer) {
            this.$refs[`op${idx}`].classList.add('correct');
          }
        });
      }
      this.setSelect(true);
      this.$refs.options.classList.add('question-answered');
    },
  },
};
</script>

<style lang="scss" scoped>
  .question{
      display: flex;
      flex-grow: 1;
      .ans-text:first-letter{
        margin-left: 6px;
        text-transform: capitalize;
      }
    }
    .question-answer{
      display: flex;
      flex-direction: column;
      width: 100%;
      .md-title{
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        padding: 12px 0px;
      }
      .answers-row{
        &:hover{
          cursor: pointer;
          box-shadow: 0px 0px 15px 3px #eee;
        }
        min-height: 48px;
        width: 100%;
        margin-bottom: 12px;
        padding: 12px;
        border: 2px solid #eee;
        display: flex;
        align-items: center;
        border-radius: 8px;
      }
      .ans-idx {
        padding-right: 5px;
      }
    }
    .image{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
      img {
        height: 150px;
      }
    }
    .correct{
        background: rgba(#0e0, 0.3);
    }
    .wrong{
        background: rgba(#f00, 0.3);
    }
  .question-answered{
    pointer-events: none;
  }
</style>
