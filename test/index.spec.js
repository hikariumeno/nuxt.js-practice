import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  test('is a Title instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.contains('h1')).toBe(true)
  })
})
