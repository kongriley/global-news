const axios = require('axios')

export const state = () => ({
  url: '',
  title: '',
  trans_title: '',
  summary: '',

  parsed: false,

  selectedLang: '',
  selectedSource: '',

  languages: [
    {
      language: 'English',
      sites: [
        {
          site: 'The New York Times',
          categories: [
            'General',
            'Politics'
          ]
        },
        {
          site: 'CNN',
          categories: [
            'General',
            'Politics',
            'Business',
            'Entertainment',
            'Science'
          ]
        }
      ]
    },
    {
      language: 'Spanish',
      sites: [
        {
          site: 'El Mundo',
          categories: [
            'General',
            'Entertainment'
          ]
        },
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
          site: '新华网 / Xinhua',
          categories: [
            'General',
            'Politics',
            'Business',
            'Entertainment',
            'Science'
          ]
        },
        {
          site: '新浪网 / Sina',
          categories: [
            'General',
            'Entertainment'
          ]
        }
      ]
    }
  ]

})

export const mutations = {
  setUrl (state, url) {
    state.url = url
  },
  setTitle (state, title) {
    state.title = title
  },
  setTransTitle (state, transTitle) {
    state.trans_title = transTitle
  },
  setSummary (state, summary) {
    state.summary = summary
  },
  setParsed (state, parsed) {
    state.parsed = parsed
  },
  setSelectedSource (state, selectedSource) {
    state.selectedSource = selectedSource
  },
  setSelectedLang (state, selectedLang) {
    state.selectedLang = selectedLang
  }
}

export const actions = {
  parse ({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('setParsed', false)
      commit('setTransTitle', '')
      axios('http://127.0.0.1:5000/parse?url=' + state.url).then((res) => {
        console.log(res)
        commit('setTitle', res.data.title)
        if (res.data.trans_title) {
          commit('setTransTitle', res.data.trans_title)
        }
        commit('setSummary', res.data.summary)
        commit('setParsed', true)
        resolve()
      }).catch(() => {
        reject(new Error('Error parsing!'))
      })
    })
  }
}
