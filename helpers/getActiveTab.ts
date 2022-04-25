import {tabs} from '../constants'

export const isActiveTab = (activeTab: string) => {
  if (activeTab === tabs[0]) return tabs[0]
  if (activeTab === tabs[1]) return tabs[1]
  if (activeTab === tabs[2]) return tabs[2]
  if (activeTab === tabs[3]) return tabs[3]
}
