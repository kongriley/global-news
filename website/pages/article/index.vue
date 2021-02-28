<template>
  <div>
    <div class="flex justify-center pt-16 pb-12 z-10">
      <div class="inline-flex items-center border-2 text-gray-400 divide-x rounded w-1/2">
        <input
          v-model="article"
          class="px-4 w-full h-full focus:outline-none focus:text-gray-600"
          placeholder="http://www.xinhuanet.com/2021-02/27/c_1127147854.htm"
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
    <div class="flex justify-center pb-6">
      <div class="w-3/4">
        <div class="text-2xl font-semibold text-center pb-2">
          China's new recombinant coronavirus vaccine (adenovirus vector) has been conditionally approved by the State Food and Drug Administration for listing and registration applications
        </div>
        <div class="text-xl text-gray-600 text-center pb-8">
        我国重组新冠病毒疫苗（腺病毒载体）获国家药监局附条件批准上市注册申请
        </div>
        <div class="text-lg">
          The recombinant new crown vaccine (adenovirus vector) adopts a single-dose immunization program, which can be stored stably between 2 and 8 degrees Celsius, and is easy to transport and store. On March 16, 2020, the vaccine started a phase I clinical trial in Wuhan, and on April 12 in Wuhan. The vaccine has previously been authorized for emergency use in Pakistan and Mexico.
        </div>
      </div>
    </div>

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
export default {

}
</script>

<style>

</style>
