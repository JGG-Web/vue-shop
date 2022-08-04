import Vue from 'vue'
// 按需导入
import { 
    Button,
    Form,
    FormItem, 
    Input, 
    Message, 
    Header, 
    Container, 
    Aside, 
    Main,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    BreadcrumbItem,
    Breadcrumb,
    Card,
    Col,
    Row,
    TableColumn,
    Table,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    MessageBox
  
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)


// 全局挂载到自定义属性 $message
Vue.prototype.$message = Message 
Vue.prototype.$confirm = MessageBox.confirm

