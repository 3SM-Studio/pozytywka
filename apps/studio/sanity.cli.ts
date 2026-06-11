import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'dklo77bh',
    dataset: 'development',
  },
  deployment: {
    autoUpdates: false,
  },
})
