import Vue from 'vue'
// 按需导入
import { Button, Form, FormItem, Input, Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 全局挂载到自定义属性 $message
Vue.prototype.$message = Message 

