import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bedrock Modding Wiki",
  description: "A wiki focused on reverse engineering and modding MCBE",
  base: "/Bedrock-Modding-Wiki/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginners Guide', link: '/beginners-guide/first-client-function' }
    ],

    sidebar: [
      {
        text: 'Beginners Guide',
        items: [
          { text: 'Find your first client function', link: '/beginners-guide/first-client-function' },
          { text: 'Find functions from a vtable', link: '/beginners-guide/functions-from-a-vtable' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/frederoxDev/Bedrock-Modding-Wiki' }
    ],

    search: {
      provider: "local"
    }
  }
})
