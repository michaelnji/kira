import { defineStore } from 'pinia'

// Example store; replace with real domain stores.
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  return { count, double, increment }
})
