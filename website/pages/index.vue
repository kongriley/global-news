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

    <div class="text-center text-lg pb-4">
      Translate and summarize a specific article...
    </div>

    <form class="w-full" @submit.prevent="submitArticle">
      <div class="flex justify-center pb-10 z-10">
        <div class="inline-flex items-center border-2 text-gray-400 focus-within:border-black focus-within:text-gray-600 divide-x rounded w-1/2">
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

    <div class="text-center text-lg pb-4">
      or retrieve the latest headlines by category.
    </div>

    <div class="flex justify-center items-center">
      Language:
      <div class="inline-flex border divide-x rounded ml-4">
        <div class="px-3 py-2">
          English
        </div>
        <div class="px-3 py-2">
          Spanish
        </div>
        <div class="px-3 py-2">
          Mandarin
        </div>
      </div>
    </div>
    NEWS SOURCE OPTION???
    <div class="flex justify-center">
      Category: General | Politics | Business | Entertainment | Science | Sports
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: ''
    }
  },

  methods: {
    submitArticle () {
      if (this.article) {
        fetch(this.article).then((x) => {
          const html = x.text()
          const doc = new DOMParser().parseFromString(html, 'text/html')
          console.log(doc.body)
        })
      }
    }
  }
}
</script>
