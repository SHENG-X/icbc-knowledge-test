<template>
  <div class="card">
    <div class="question" >
      <div class="question-answer">
        <div class="title">
          {{
            `${num + 1}. ${question.text.__cdata}`
          }}
        </div>
        <div class="image" v-if="question.image && question.image._file!=''">
          <img :src="require(`../${question.image._file}`)" alt="">
        </div>
        <div class="answers" v-if="!$parent.practice">
          <div class="answers-row correct">
            A.
            <span class="ans-text">
              {{ question.answers.answer.__cdata }}
            </span>
          </div>
          <div class="answers-row">
            B.
            <span class="ans-text">
              {{ question.answers.distractor_1.__cdata }}
            </span>
          </div>
          <div class="answers-row">
            C.<span class="ans-text">
              {{ question.answers.distractor_2.__cdata }}
            </span>
          </div>
          <div class="answers-row">
            D.
            <span class="ans-text">
              {{ question.answers.distractor_3.__cdata }}
            </span>
          </div>
        </div>
        <div class="answers" v-else ref="options">
          <div class="answers-row"
            ref="op0"
            @click="()=>checkAnswer(0)">
            A.
            <span class="ans-text">
              {{ ansewers[0] }}
            </span>
          </div>
          <div class="answers-row"
            ref="op1"
            @click="()=>checkAnswer(1)">
            B.
            <span class="ans-text">
              {{ ansewers[1] }}
            </span>
          </div>
          <div class="answers-row"
            ref="op2"
            @click="()=>checkAnswer(2)">
            C.
            <span class="ans-text">
              {{ ansewers[2] }}
            </span>
          </div>
          <div class="answers-row"
            ref="op3"
            @click="()=>checkAnswer(3)">
            D.
            <span class="ans-text">
              {{ ansewers[3] }}
            </span>
          </div>
        </div>
        <div class="more-info" v-if="!$parent.practice || selected">
          <hr/>
          {{ question.chapter.__cdata }}
          <br/>
          <div v-if="question.source.__cdata!=''">
            <br/>
            {{ question.source.__cdata }}
          </div>
          <br/>
          <div v-if="question.link._src!=''">
            See book:
            <a :href="question.link._src" target="_blank">
              {{question.link._src}}
            </a>
          </div>
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
  },
  data() {
    return {
      selected: false,
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
        this.$refs[`op${op}`].classList.add('wrong');
      }
      this.selected = true;
      this.$refs.options.classList.add('question-answered');
    },
  },
};
</script>

<style lang="scss" scoped>
  .card{
    margin: 16px;
    padding: 32px;
    background: white;
    box-shadow: 0px 0px 12px 12px #eee;
    display: flex;
    justify-content: center;
    .question{
      display: flex;
      flex-grow: 1;
      max-width: 520px;
      .ans-text:first-letter{
        margin-left: 6px;
        text-transform: capitalize;
      }
    }
    .question-answer{
      display: flex;
      flex-direction: column;
      width: 100%;
      .title{
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        min-height: 60px;
      }
      .answers-row{
        &:hover{
          cursor: pointer;
          box-shadow: 0px 0px 6px 6px #eee;
        }
        min-height: 48px;
        width: 100%;
        margin: 12px 0;
        padding: 12px;
        border: 2px solid #eee;
        display: flex;
        align-items: center;
        border-radius: 8px;
      }
    }
    .image{
      display: flex;
      align-items: center;
      padding: 6px;
    }
    .correct{
        background: rgba(#0e0, 0.3);
    }
    .wrong{
        background: rgba(#f00, 0.3);
    }
  }
  .question-answered{
    pointer-events: none;
  }
</style>
