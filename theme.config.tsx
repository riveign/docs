import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Script from 'next/script'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img width="18" height="18" src="/logo.png"></img>
      <span>   Fleek Docs</span>
    </>
  ),
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://docs.fleek.xyz${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Fleek.xyz'} />
      <link rel="icon" href="https://framerusercontent.com/modules/8lURkGaLHuTnWArKu6mc/rV5DHjjsTGqoQVhBu38M/assets/NgRGJcWfo5FgvKHmn9cW55eJbE.png"></link>
      <meta property="og:description" content="Welcome to Fleek.xyz's documentation. Build scalable, next-gen web3 applications." />
      <meta property="og:image" content="https://framerusercontent.com/modules/8lURkGaLHuTnWArKu6mc/rV5DHjjsTGqoQVhBu38M/assets/6G0ANVJCByPWie2H9WgR3gSi0.jpg"></meta>
      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:title" content="Docs - Fleek.xyz"></meta>
      <meta property="twitter:description" content="Welcome to Fleek.xyz's documentation. Build scalable, next-gen web3 applications."></meta>
      <meta property="twitter:image" content="https://framerusercontent.com/modules/8lURkGaLHuTnWArKu6mc/rV5DHjjsTGqoQVhBu38M/assets/6G0ANVJCByPWie2H9WgR3gSi0.jpg"></meta>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WPCYYTKV5P"></script>
      <script id="google-tag-manager" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-WPCYYTKV5P');
          `,
        }}
      />
    </>
  },
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

