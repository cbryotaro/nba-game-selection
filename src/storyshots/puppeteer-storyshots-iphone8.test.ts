import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import { devices, Page } from 'puppeteer'

const customizePage = (page: Page) => page.emulate(devices['iPhone 8'])

initStoryshots({
  suite: 'Image storyshots: iPhone 8',
  test: imageSnapshot({ customizePage }),
})
