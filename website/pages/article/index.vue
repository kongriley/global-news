<template>
  <div>
    <parse-load ref="load"/>
    <div class="flex justify-center pt-16 pb-12 z-10">
      <div class="inline-flex items-center border-2 text-gray-400 divide-x rounded w-1/2">
        <input
          v-model="url"
          class="px-4 w-full h-full focus:outline-none focus:text-gray-600"
          placeholder="Input a specific article URL"
        >
        <button type="submit" class="px-3 py-2 focus:outline-none z-0 rounded bg-green-400 text-white">
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

    <div class="flex justify-center pb-6" v-if="$store.state.parsed">
      <div class="w-3/4">
        <div class="text-2xl font-semibold text-center pb-2">
          {{ $store.state.title }}
        </div>
        <div class="text-xl text-gray-600 text-center pb-8" v-if="$store.state.trans_title">
          {{ $store.state.trans_title }}
        </div>
        <div class="text-lg">
          {{ $store.state.summary }}
        </div>
      </div>
    </div>
    <!--
    <div class="flex justify-center pb-6">
      <div class="w-3/4">
        <div class="text-2xl font-semibold text-center pb-2">
          Two killed in an accident on the Jujan - Yaguachi road
        </div>
        <div class="text-xl text-gray-600 text-center pb-8">
          Dos muertos en accidente en la vía Jujan - Yaguachi
        </div>
        <div class="text-lg">
          A bus and a vehicle hit each other around noon on Friday the 26th. Two people died and three injuries were registered after the collision between an interprovincial transport bus and a light vehicle on the Jujan-Tres Postes road - Yaguachi. Agents of the Ecuadorian Transit Commission (CTE) went to the site and evidenced the presence of two bodies.
        </div>
      </div>
    </div>
    -->

    <div class="flex justify-center">
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
import ParseLoad from '../../components/ParseLoad.vue'
export default {
  components: { ParseLoad },
  data () {
    return {
      url: this.$store.state.url
    }
  },
  mounted () {
    this.$store.dispatch('parse').then(() => {
      this.$refs.load.finish()
    }).catch((err) => {
      this.$refs.load.throwErr(err.message)
    })
  }
}
</script>

<style>

</style>
