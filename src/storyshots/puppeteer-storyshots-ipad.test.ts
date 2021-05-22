import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import { devices, Page } from 'puppeteer'

const customizePage = (page: Page) => page.emulate(devices['iPad'])

initStoryshots({
  suite: 'Image storyshots: iPad',
  test: imageSnapshot({ customizePage }),
})
