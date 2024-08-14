import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const num1 = ref(0)
    const num2 = ref(0)
    const operator = ref('sum')

    const res = computed(() => {
      if (operator.value === 'sum') {
        return num1.value + num2.value
      } else if (operator.value === 'subtract') {
        return num1.value - num2.value
      } else if (operator.value === 'multiply') {
        return num1.value * num2.value
      } else if (operator.value === 'divide') {
        return num1.value / num2.value
      } else return 0
    })

    return {
      num1,
      num2,
      res,
      operator,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model='num1' />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model='num2' />

      <div>=</div>

      <output>{{ res }}</output>
    </div>
  `,
})
