import { defineComponent, onUnmounted, ref, computed } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const time = ref(Date.now())

    const intervalId = setInterval(() => {
      time.value = Date.now()
    }, 1000)

    const timeFormatted = computed(() =>
      Intl.DateTimeFormat(navigator.language, {
        timeStyle: 'medium',
      }).format(time.value),
    )

    onUnmounted(() => {
      clearInterval(intervalId)
    })

    return {
      timeFormatted,
    }
  },

  template: `<div class="clock">{{ timeFormatted }}</div>`,
})
