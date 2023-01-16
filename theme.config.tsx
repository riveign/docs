import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
 
export default {
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://docs.fleek.xyz${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Fleek.xyz'} />
      <link rel="icon" href="https://framerusercontent.com/modules/8lURkGaLHuTnWArKu6mc/rV5DHjjsTGqoQVhBu38M/assets/NgRGJcWfo5FgvKHmn9cW55eJbE.png"></link>
      <meta property="og:description" content="Welcome to Fleek.xyz's documentation. Build scalable, next-gen web3 applications." />
      <meta property="og:image" content="https://framerusercontent.com/modules/8lURkGaLHuTnWArKu6mc/rV5DHjjsTGqoQVhBu38M/assets/6G0ANVJCByPWie2H9WgR3gSi0.jpg"></meta>
          <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:title" content="Docs - Fleek.xyz">
      <meta property="twitter:description" content="Welcome to Fleek.xyz's documentation. Build scalable, next-gen web3 applications.">
      <meta property="twitter:image" content="https://framerusercontent.com/modules/8lURkGaLHuTnWArKu6mc/rV5DHjjsTGqoQVhBu38M/assets/6G0ANVJCByPWie2H9WgR3gSi0.jpg">
    </>
  },
}


const config: DocsThemeConfig = {
  logo: (
    <>
      <img width="selected" height="18" src="/logo.png"></img>
      <span>   Fleek Docs</span>
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

