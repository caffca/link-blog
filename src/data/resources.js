// 可下载资源数据
// file 字段为相对 public/files/ 的路径，空字符串表示资源整理中

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
    ],
  },
  {
    name: '学习资料',
    description: '教材与学习资源',
    items: [
      {
        id: 'textbook',
        name: '电子协会教材（最新版）',
        description: '电子协会最新教材，包含电子技术基础知识',
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
        file: '',
        size: '',
        format: 'PDF',
      },
    ],
  },
  {
    name: '项目资料',
    description: '硬件设计与代码示例',
    items: [
      {
        id: 'car-schematic',
        name: '智能小车原理图与工程',
        description: '智能小车项目的完整硬件设计文件，包括原理图和 PCB 布线图',
        file: '',
        size: '',
        format: 'ZIP',
      },
      {
        id: 'devboard-schematic',
        name: '开发板原理图',
        description: '开发板完整原理图，适合学习和参考',
        file: '',
        size: '',
        format: 'PDF',
      },
      {
        id: 'code-examples',
        name: '嵌入式代码示例库',
        description: '常用嵌入式项目代码示例，包含多种外设驱动和算法实现',
        file: '',
        size: '',
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
        file: '',
        size: '',
        format: 'PDF',
      },
    ],
  },
  {
    name: '官方文档',
    description: '协会资料与工具库',
    items: [
      {
        id: 'annual-report',
        name: '协会 2024 年度总结报告',
        description: '电子协会 2024 年度工作总结报告，包含活动回顾和财务明细',
        file: '',
        size: '',
        format: 'PDF',
      },
      {
        id: 'altium-lib',
        name: 'Altium Designer 封装库',
        description: '常用电子元件的 Altium Designer 封装库，包含百余种元件',
        file: '',
        size: '',
        format: 'ZIP',
      },
      {
        id: 'iot-guide',
        name: '物联网实验指导书',
        description: '物联网课程实验指导书，包含 8 个完整实验项目',
        file: '',
        size: '',
        format: 'PDF',
      },
    ],
  },
]

// 全部资源扁平列表（用于搜索）
export const allResources = resourceCategories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.name }))
)
