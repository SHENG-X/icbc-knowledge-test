<template>
  <div class="quiz-container">
    <md-card>
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
          <div>
            <md-card>
              <md-button
                @click="() => $router.push(route)"
              >
                {{ buttonTitle }}
              </md-button>
            </md-card>
          </div>
        </div>
      </md-card-content>

    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonTitle: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
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
}
</style>
