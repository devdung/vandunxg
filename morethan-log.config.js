const CONFIG = {
  // profile setting
  profile: {
    name: 'vandunxg',
    image: '/profile.png',
    discription: 'Freelancer',
    linkedin: 'devdung',
    email: 'vandunxg@gmail.com',
    github: 'devdung',
    instagram: 'vanduxng',
  },
  projects: [
    {
      name: 'vandunxg blog',
      href: 'https://vandunxg.web.app'
    }
  ],
  // blog setting
  blog: {
    title: 'vandunxg',
    description: 'welcome to vandunxg!',
  },

  // CONFIG configration
  link: 'https://vandunxg.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration
  notionConfig: {
    pageId: 'bf75aa3010894d05a7b386de6372a94c',
    // if you prefer not to make your database public, use this!!!
    accessToken: '54eb0071565f864586b97e1aedae03af44c39dcc7bf62fcee81e6a5ab154f7ca0d9b7acd89c801ea481167ef744825dd705cc1677fa4792a6cd7d64961ac45501de2d6d183239464beb99b24def9',
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '' // ex. G-9N3FE0117Q
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '' // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'devdung/vandunxg',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
