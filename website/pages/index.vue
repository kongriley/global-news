<template>
  <div>
    <div class="pt-24 pb-16">
      <div class="text-4xl text-center">
        Welcome!
      </div>
      <div class="text-xl text-center">
        Retrieve translated summaries of the top news around the world.
      </div>
    </div>

    <div class="text-center text-lg pb-6">
      Translate and summarize a specific article...
    </div>

    <form class="w-full" @submit.prevent="submitArticle">
      <div class="flex justify-center pb-16 z-10">
        <div class="inline-flex items-center border-2 text-gray-400 divide-x rounded w-1/2">
          <input
            v-model="article"
            class="px-4 w-full h-full focus:outline-none focus:text-gray-600"
            placeholder="Input a specific article"
          >
          <button type="submit" class="px-3 py-2 focus:outline-none z-0 rounded" :class="{'bg-green-400': article, 'text-white': article}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </form>

    <div v-if="translation">
      Article: {{ title }}
      Translation: {{ translation }}
    </div>

    <div class="text-center text-lg pb-6">
      or retrieve, translate, and summarize the latest news by category.
    </div>

    <div class="flex justify-center items-center pb-4">
      Language:
      <div class="inline-flex border divide-x rounded ml-4 text-gray-600">
        <div
          v-for="i of languages"
          :key="languages.indexOf(i)"
          class="px-3 py-2 rounded cursor-pointer select-none"
          :class="{'bg-blue-400': selectedLang == i.language, 'text-white': selectedLang == i.language}"
          @click="selectLang(i.language, languages.indexOf(i))"
        >
          {{ i.language }}
        </div>
      </div>
    </div>

    <div v-if="selectedLang" class="flex justify-center items-center pb-4">
      Site:
      <div class="inline-flex border divide-x rounded ml-4 text-gray-600">
        <div
          v-for="i of languages[selectedLangIndex].sites"
          :key="languages[selectedLangIndex].sites.indexOf(i)"
          class="px-3 py-2 rounded cursor-pointer select-none"
          :class="{'bg-blue-400': selectedSite == i.site, 'text-white': selectedSite == i.site}"
          @click="selectSite(i.site, languages[selectedLangIndex].sites.indexOf(i))"
        >
          {{ i.site }}
        </div>
      </div>
    </div>

    <div v-if="selectedSite" class="flex justify-center items-center pb-4">
      Category:
      <div class="inline-flex border divide-x rounded ml-4 text-gray-600">
        <div
          v-for="i of languages[selectedLangIndex].sites[selectedSiteIndex].categories"
          :key="languages[selectedLangIndex].sites[selectedSiteIndex].categories.indexOf(i)"
          class="px-3 py-2 rounded cursor-pointer select-none"
          :class="{'bg-blue-400': selectedCat == i, 'text-white': selectedCat == i}"
          @click="selectCat(i)"
        >
          {{ i }}
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="inline-flex border rounded">
        <div
          v-if="selectedCat"
          class="px-3 py-2 rounded cursor-pointer select-none bg-green-400 text-white"
          @click="submitCategory()"
        >
          Retrieve headlines!
        </div>
      </div>
    </div>

    <!--
      <div class="flex justify-center pt-32">
        Category: General | Politics | Business | Entertainment | Science | Sports
      </div>
    -->
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data () {
    return {
      article: '',

      title: '',
      translation: '',

      selectedLang: '',
      selectedLangIndex: 0,
      selectedSite: '',
      selectedSiteIndex: 0,
      selectedCat: '',

      languages: [
        {
          language: 'English',
          sites: [
            {
              site: 'The New York Times',
              categories: [
                'General',
                'Entertainment'
              ]
            },
            {
              site: 'CNN',
              categories: [
                'General',
                'Politics',
                'Business',
                'Entertainment',
                'Science',
                'Sports'
              ]
            }
          ]
        },
        {
          language: 'Spanish',
          sites: [
            {
              site: 'El País',
              categories: [
                'General',
                'Entertainment'
              ]
            }
          ]
        },
        {
          language: 'Mandarin',
          sites: [
            {
              site: '新浪微博 / Sina Weibo',
              categories: [
                'General',
                'Entertainment'
              ]
            }
          ]
        }
      ]

    }
  },

  methods: {
    submitArticle () {
      if (this.article) {
        axios.get('http://127.0.0.1:5000/transtitle?lang=en&url=' + this.article)
          .then((res) => {
            console.log(res)
            this.title = res.data.title
            this.translation = res.data.translation
            console.log(this.translation)
          })
      }
    },
    submitCategory () {
      console.log('YAYAYAY')
    },
    selectLang (lang, index) {
      this.selectedSite = ''
      this.selectedSiteIndex = 0
      this.selectedCat = ''
      if (this.selectedLang === lang) {
        this.selectedLang = ''
      } else {
        this.selectedLang = lang
        this.selectedLangIndex = index
      }
    },
    selectSite (site, index) {
      this.selectedCat = ''
      if (this.selectedSite === site) {
        this.selectedSite = ''
      } else {
        this.selectedSite = site
        this.selectedSiteIndex = index
      }
    },
    selectCat (cat, index) {
      if (this.selectedCat === cat) {
        this.selectedCat = ''
      } else {
        this.selectedCat = cat
      }
    }
  }
}
</script>

<style scoped>

</style>
