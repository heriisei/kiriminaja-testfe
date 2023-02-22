import { describe, expect, it } from 'vitest'
import { $fetch, isDev } from '@nuxt/test-utils'

describe('HomePage', () => {
  it('renders the homepage', async () => {
    expect(await $fetch('/')).toMatch('hai')
  })
})