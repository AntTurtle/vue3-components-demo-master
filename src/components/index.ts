import { type App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import HButton from './HButton.vue'
import vkButton from './vk-button.vue'
import vkContainer from './vk-container.vue'
// import vkEcharts from './vk-echarts.vue'
import vkElTree from './vk-elTree.vue'
// import vkSelectMuli from './vk-select-muli.vue'
import vkSelect from './vk-select.vue'

const components = [vkButton, vkContainer, vkElTree, vkSelect]

// https://cn.vuejs.org/guide/reusability/plugins

export default {
  install: (app: App) => {
    const version = Number(app.version.split('.')[0])
    if (version < 3) {
      console.warn('This plugin requires Vue 3')
    }
    app.use(ElementPlus)
    components.forEach((comp) => {
      app.component(comp.name || '', comp)
    })
  },
}
