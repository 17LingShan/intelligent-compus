import { defineStore } from 'pinia'

const useTabsStore = defineStore('tabs', {
  state: (): TabsStore.TabsState => ({
    currentTab: 0,
    tabsList: [],
  }),

  getters: {
    getTabsList(): TabsStore.TabsList {
      return this.tabsList
    },
  },

  actions: {
    setCurrentTab(index: number) {
      this.currentTab = index
      console.log(this.tabsList[index].path)
      uni.switchTab({ url: this.tabsList[index].path })
    },
    setTabsList(tabsList: TabsStore.TabsList) {
      console.log(tabsList)
      this.tabsList = tabsList
      this.currentTab = 0
      uni.switchTab({ url: this.tabsList[0].path })
    },
  },
})

export default useTabsStore