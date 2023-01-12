import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img width="24" height="24" src="/logo.png"></img>
      <span> Fleek Docs</span>
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
