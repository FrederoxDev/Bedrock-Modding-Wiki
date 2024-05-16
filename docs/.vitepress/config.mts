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

    outline: {
      level: [2, 3]
    },

    sidebar: [
      {
        text: 'Beginners Guide',
        items: [
          { text: 'Find your first client function', link: '/beginners-guide/first-client-function' },
          { text: 'Find functions from a vtable', link: '/beginners-guide/functions-from-a-vtable' },
          { text: 'Configuring your compiler', link: '/beginners-guide/configuring-your-compiler.md' }
        ]
      },
      {
        text: 'Advanced Topics',
        items: [
          { text: 'EnTT', link: '/advanced-topics/entt' },
          { text: 'Microsoft STL Reversing', link: '/advanced-topics/microsoft-stl-reversing.md' },
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
