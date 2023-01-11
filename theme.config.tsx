import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <span>Fleek</span>
    </>
  ),
  project: {
    link: 'https://github.com/fleekHQ/fleek',
  },
  chat: {
    link: 'https://discord.gg/fleekxyz',
  },
  docsRepositoryBase: 'https://github.com/fleekHQ/fleek',
  footer: {
    text: 'Fleek',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Fleek'
    }
  },
}

export default config
