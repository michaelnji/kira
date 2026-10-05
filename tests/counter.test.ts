import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCounterStore } from '~/stores/counter'

describe('counter store', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('increments and doubles', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
    expect(store.double).toBe(2)
  })
})
