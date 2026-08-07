// 可下载资源数据
// file 字段：相对 public/files/ 的路径（本站托管）
// url  字段：外部下载/官网地址（大软件等）
// 两者都无：资源整理中

export const resourceCategories = [
  {
    name: '工具软件',
    description: '常用开发与传输工具',
    items: [
      {
        id: 'winscp-setup',
        name: 'WinSCP 官方安装版',
        description: '官方安装版本，用于 Windows 下文件传输，支持 SSH 协议',
        file: 'installers/winscp/WinSCP-6.5.4-Setup.exe',
        size: '12 MB',
        format: 'EXE',
      },
      {
        id: 'winscp-msi',
        name: 'WinSCP 企业部署版',
        description: 'MSI 安装包，适用于企业批量部署',
        file: 'installers/winscp/WinSCP-6.5.4.msi',
        size: '30 MB',
        format: 'MSI',
      },
      {
        id: 'winscp-portable',
        name: 'WinSCP 便携版',
        description: '便携版本，解压即用，无需安装，适合临时使用',
        file: 'installers/winscp/WinSCP-6.5.4-Portable.zip',
        size: '8.4 MB',
        format: 'ZIP',
      },
      {
        id: 'bledebug',
        name: 'BLEDebug 蓝牙调试工具',
        description: '蓝牙低功耗（BLE）调试工具，辅助嵌入式蓝牙开发',
        file: 'software/BLEDebug.zip',
        size: '12 MB',
        format: 'ZIP',
      },
      {
        id: 'qbit-enhanced',
        name: 'qBittorrent 增强版',
        description: '增强版 BT 下载工具，官方 64 位版本，提供更好的下载体验',
        file: 'software/qBittorrent Enhanced Edition v4.5.3.10.zip',
        size: '18 MB',
        format: 'ZIP',
      },
      {
        id: 'chrome',
        name: 'Chrome 浏览器 64位',
        description: 'Google Chrome 浏览器官方版本，快速稳定',
        url: 'https://www.google.cn/chrome/',
        size: '184.6 MB',
        format: 'EXE',
      },
      {
        id: 'obs-studio',
        name: 'OBS Studio 直播录制',
        description: '开源免费的视频录制与直播推流软件',
        url: 'https://obsproject.com/',
        size: '220 MB',
        format: 'EXE',
      },
      {
        id: 'keil-c51',
        name: 'Keil C51 开发环境',
        description: '8051 系列单片机经典开发环境，嵌入式必备',
        url: 'https://www.keil.com/download/product/',
        size: '81.3 MB',
        format: 'EXE',
      },
      {
        id: 'multisim',
        name: 'Multisim 电路仿真',
        description: 'NI Multisim 电路设计与仿真软件',
        url: 'https://www.ni.com/zh-cn/support/downloads/software-products/download.multisim.html',
        size: '69.8 MB',
        format: 'EXE',
      },
      {
        id: 'yandex',
        name: 'Yandex 浏览器',
        description: '基于 Chromium 的浏览器，界面简洁',
        url: 'https://browser.yandex.com/',
        size: '88 MB',
        format: 'EXE',
      },
      {
        id: 'vofa-plus',
        name: 'vofa+ 串口调试助手',
        description: '强大的串口/网络调试工具，支持波形显示',
        url: 'https://www.vofa.plus/',
        size: '12 MB',
        format: 'EXE',
      },
      {
        id: 'geek-uninstaller',
        name: 'Geek 软件卸载工具',
        description: '轻量免费的软件彻底卸载工具',
        url: 'https://geekuninstaller.com/',
        size: '6.6 MB',
        format: 'EXE',
      },
      {
        id: 'wepe',
        name: 'WePE 系统维护工具',
        description: 'PE 系统制作与系统维护工具',
        url: 'https://www.wepe.com.cn/',
        format: 'EXE',
      },
      {
        id: 'sai-2',
        name: 'SAI 2.0 绘图软件',
        description: '专业数码绘画软件',
        format: 'EXE',
      },
      {
        id: 'tuba-toolbox',
        name: '图吧工具箱',
        description: '硬件检测与维护工具集',
        format: 'EXE',
      },
      {
        id: 'metal-slug',
        name: '合金弹头',
        description: '经典街机游戏',
        format: 'ZIP',
      },
    ],
  },
  {
    name: '学习资料',
    description: '教材与课程资源',
    items: [
      {
        id: 'textbook',
        name: 'linkk 教材（最新版）',
        description: '最新版教材，包含电子技术基础知识',
        file: 'docs/3_电子协会教材（最新版）.pdf',
        size: '3.2 MB',
        format: 'PDF',
      },
      {
        id: 'algorithm-book',
        name: '算法竞赛入门经典（第 2 版）',
        description: '算法竞赛经典入门教程，适合编程初学者和竞赛选手',
        file: 'books/算法竞赛入门经典  第2版.pdf',
        size: '11 MB',
        format: 'PDF',
      },
      {
        id: 'circuit-press',
        name: '电路（电子工业出版社第六版）',
        description: '经典电路理论教材',
        format: 'PDF',
      },
      {
        id: 'circuit-qiu',
        name: '《电路》邱关源第六版',
        description: '国内高校最常用电路教材',
        format: 'PDF',
      },
      {
        id: 'c-programming-notes',
        name: 'C程序设计复习笔记',
        description: '谭浩强版《C程序设计》复习笔记 + 课后习题详解',
        format: 'PDF',
      },
      {
        id: 'lanqiao-keys',
        name: '蓝桥杯按键考点',
        description: '蓝桥杯嵌入式按键考点整理（2024 订正版）',
        format: 'PDF',
      },
      {
        id: 'lanqiao-notes',
        name: '蓝桥杯省赛知识点串讲',
        description: '蓝桥杯省赛核心知识点串讲笔记',
        format: 'DOCX',
      },
    ],
  },
  {
    name: '数据手册',
    description: '芯片与开发板技术规格',
    items: [
      {
        id: 'manual-series',
        name: '系列单片机数据手册',
        description: '系列单片机完整数据手册，包含所有技术规格和引脚定义',
        format: 'PDF',
      },
    ],
  },
  {
    name: '项目资料',
    description: '硬件设计与代码示例',
    items: [
      {
        id: 'spec-code',
        name: 'SPEC 代码示例',
        description: '旧站代码示例库中的 SPEC 说明文档',
        format: 'MD',
      },
      {
        id: 'car-schematic',
        name: '智能小车原理图与工程',
        description: '智能小车项目的完整硬件设计文件，包括原理图和 PCB 布线图',
        format: 'ZIP',
      },
      {
        id: 'devboard-schematic',
        name: '开发板原理图',
        description: '开发板完整原理图，适合学习和参考',
        format: 'PDF',
      },
      {
        id: 'code-examples',
        name: '嵌入式代码示例库',
        description: '常用嵌入式项目代码示例，包含多种外设驱动和算法实现',
        format: 'ZIP',
      },
    ],
  },
  {
    name: '设计规范',
    description: '工程规范文档',
    items: [
      {
        id: 'pcb-rule',
        name: 'PCB 设计规范手册',
        description: '企业内部 PCB 设计规范文档，包含多层板设计指南',
        format: 'PDF',
      },
    ],
  },
  {
    name: '官方文档',
    description: '文档与工具库',
    items: [
      {
        id: 'annual-report',
        name: '2024 年度总结报告',
        description: '2024 年度工作总结报告，包含活动回顾和财务明细',
        format: 'PDF',
      },
      {
        id: 'altium-lib',
        name: 'Altium Designer 封装库',
        description: '常用电子元件的 Altium Designer 封装库，包含百余种元件',
        format: 'ZIP',
      },
      {
        id: 'iot-guide',
        name: '物联网实验指导书',
        description: '物联网课程实验指导书，包含 8 个完整实验项目',
        format: 'PDF',
      },
    ],
  },
]

// 全部资源扁平列表（用于搜索）
export const allResources = resourceCategories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.name }))
)
