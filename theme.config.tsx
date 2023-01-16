import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img width="24" height="24" src="/logo.png"></img>
      <span> Fleek Docs</span>
    </>
  ),
  chat: {
    link: 'https://discord.gg/fleekxyz',
  },
  docsRepositoryBase: 'https://github.com/fleekxyz/fleekxyz-support',
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
