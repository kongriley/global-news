<template>
  <div>
    <headline-load ref="load"/>
    <div class="text-center text-3xl font-medium pt-16 pb-12">
      Top news from <span class="font-bold">{{ selectedSource }}</span>, in <span class="font-bold">General</span>
    </div>

    <div class="flex justify-center pb-6" v-for="article in articles[selectedSource]" :key="articles[selectedSource].indexOf(article)">
      <div class="w-3/4 rounded-lg bg-gray-200 p-6">
        <div class="text-xl font-semibold text-center pb-2">
          {{ article.title }}
        </div>
        <div class="text-lg text-gray-600 text-center pb-8">
          {{ article.trans_title }}
        </div>
        <div class="text-md">
          {{ article.summary }}
        </div>
      </div>
    </div>

    <div class="flex justify-center pb-8">
      <div class="inline-flex border rounded">
        <NuxtLink
          to="/"
          class="px-3 py-2 rounded cursor-pointer select-none bg-blue-400 text-white"
        >
          Return to home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import HeadlineLoad from '../../components/HeadlineLoad.vue'
export default {
  components: { HeadlineLoad },
  data () {
    return {
      selectedSource: '',

      articles: {
        'The New York Times': [
          {
            title: 'The 26th meeting of the Standing Committee of the 13th National People\'s Congress was held in Beijing',
            summary: 'In order to promote the improvement of the taxation legal system, implement the legal principles of taxation, improve the standardization and legalization of stamp duty, reduce discretionary power, and make tax collection and management more scientific and standardized, the State Council has proposed a proposal for review of the draft stamp duty law. From May to July last year, the Standing Committee of the National People\'s Congress organized a decision to completely ban the illegal trade and consumption of wild animals, and a law enforcement inspection of the Wild Animal Protection Law.'
          },
          {
            title: '',
            summary: ''
          },
          {
            title: '',
            summary: ''
          }
        ],
        '新华网 / Xinhua': [
          {
            title: 'The 26th meeting of the Standing Committee of the 13th National People\'s Congress was held in Beijing',
            trans_title: '十三届全国人大常委会第二十六次会议在京举行',
            summary: 'In order to promote the improvement of the taxation legal system, implement the legal principles of taxation, improve the standardization and legalization of stamp duty, reduce discretionary power, and make tax collection and management more scientific and standardized, the State Council has proposed a proposal for review of the draft stamp duty law. From May to July last year, the Standing Committee of the National People\'s Congress organized a decision to completely ban the illegal trade and consumption of wild animals, and a law enforcement inspection of the Wild Animal Protection Law.'
          },
          {
            title: 'China\'s new recombinant coronavirus vaccine (adenovirus vector) has been conditionally approved by the State Food and Drug Administration for listing and registration applications',
            trans_title: '我国重组新冠病毒疫苗（腺病毒载体）获国家药监局附条件批准上市注册申请',
            summary: 'The recombinant new crown vaccine (adenovirus vector) adopts a single-dose immunization program, which can be stored stably between 2 and 8 degrees Celsius, and is easy to transport and store. On March 16, 2020, the vaccine started a phase I clinical trial in Wuhan, and on April 12 in Wuhan.'
          },
          {
            title: '2020 national economy and social development hand in "extraordinary answer"',
            trans_title: '2020年国民经济和社会发展交出“非凡答卷”',
            summary: 'According to the Statistical Bulletin of National Economic and Social Development in 2020 released by the National Bureau of Statistics on February 28th, in 2020, facing the once-in-a-century COVID-19 epidemic, China coordinated the epidemic prevention and control and economic and social development, and achieved positive economic growth among the only major economies in the world. It is estimated that the annual per capita GDP will be 72,447 yuan, an increase of 2.0% over the previous year, and it will exceed 10,000 US dollars for two consecutive years.'
          }
        ]
      }
    }
  },
  mounted () {
    this.selectedSource = this.$store.state.selectedSource

    let time = 3000
    if (this.$store.state.selectedLang === 'English') {
      time = 1000
    }

    setInterval(() => {
      this.$refs.load.increment()
    }, time)
  }
}
</script>

<style>

</style>
