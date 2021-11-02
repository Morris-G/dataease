// 公共样式
export const commonStyle = {
  rotate: 0,
  opacity: 1
}

export const commonAttr = {
  animations: [],
  events: {},
  groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
  isLock: false // 是否锁定组件
}

export const assistList = [
  {
    id: '10001',
    component: 'v-text',
    type: 'v-text',
    label: '文字',
    icon: 'iconfont icon-text',
    defaultClass: 'text-filter'
  },
  {
    id: '10004',
    component: 'rect-shape',
    type: 'rect-shape',
    label: '矩形',
    icon: 'iconfont icon-juxing',
    defaultClass: 'text-filter'
  },
  {
    id: '10006',
    component: 'de-tabs',
    type: 'de-tabs',
    label: '选项卡',
    icon: 'iconfont icon-tabs',
    defaultClass: 'text-filter'
  }
]

export const pictureList = [
  {
    id: '20001',
    component: 'picture-add',
    type: 'picture-add',
    label: '拖拽上传',
    icon: 'iconfont icon-picture',
    defaultClass: 'text-filter'
  }
]

// 编辑器左侧组件列表
const list = [
  {
    id: '10001',
    component: 'v-text',
    label: '文字',
    propValue: '双击输入文字',
    icon: 'wenben',
    type: 'v-text',
    style: {
      width: 400,
      height: 100,
      fontSize: 22,
      fontWeight: 400,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '#000000',
      verticalAlign: 'middle',
      backgroundColor: '#ffffff',
      borderRadius: 0
    },
    x: 1,
    y: 1,
    sizex: 10,
    sizey: 2
  },
  {
    id: '10002',
    component: 'v-button',
    label: '按钮',
    propValue: '按钮',
    icon: 'button',
    type: 'v-button',
    style: {
      width: 100,
      height: 34,
      borderWidth: '',
      borderColor: '',
      borderRadius: '',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    id: '10003',
    component: 'Picture',
    label: '图片',
    icon: 'tupian',
    type: 'Picture',
    propValue: require('@/components/canvas/assets/title.jpg'),
    style: {
      width: 300,
      height: 200,
      borderRadius: ''
    },
    x: 1,
    y: 1,
    sizex: 10,
    sizey: 6
  },
  {
    id: '10003-1',
    component: 'Picture',
    label: '背景-科技1',
    icon: 'tupian',
    type: 'Picture',
    propValue: require('@/components/canvas/assets/bg-kj-1.jpg'),
    style: {
      width: 600,
      height: 300,
      borderRadius: ''
    }
  },
  {
    id: '10004',
    component: 'rect-shape',
    label: '矩形',
    propValue: '',
    icon: 'juxing',
    type: 'rect-shape',
    style: {
      width: 300,
      height: 200,
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: '#000000',
      backgroundColor: '#ffffff',
      borderRadius: 0
    },
    x: 1,
    y: 1,
    sizex: 10,
    sizey: 6
  },
  {
    id: '10005',
    component: 'user-view',
    label: '用户视图',
    propValue: '',
    icon: 'juxing',
    type: 'view',
    style: {
      width: 300,
      height: 200,
      borderRadius: ''
    },
    x: 1,
    y: 1,
    sizex: 10,
    sizey: 6,
    auxiliaryMatrix: true
  },
  {
    id: '10006',
    component: 'de-tabs',
    label: '选项卡',
    propValue: '',
    icon: 'tabs',
    type: 'de-tabs',
    style: {
      width: 200,
      height: 200,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#000000',
      backgroundColor: '#ffffff',
      borderRadius: 0
    },
    options: {
      tabList: [{
        title: 'Tab1',
        name: '1',
        content: null
      }]
    },
    x: 1,
    y: 1,
    sizex: 10,
    sizey: 10
  },
  {
    id: '20001',
    component: 'picture-add',
    type: 'picture-add',
    label: '拖拽上传',
    icon: 'iconfont icon-picture',
    defaultClass: 'text-filter',
    style: {
      width: 400,
      height: 200,
      borderRadius: ''
    },
    x: 1,
    y: 1,
    sizex: 10,
    sizey: 5
  }
]

for (let i = 0, len = list.length; i < len; i++) {
  const item = list[i]
  item.style = { ...commonStyle, ...item.style }
  list[i] = { ...commonAttr, ...item }
}

export default list
