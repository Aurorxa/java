import type {DefaultTheme} from 'vitepress'
import {commonDirectoryName} from '../utils/constant'

// 中文侧边栏
export const zhSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Java 语言基础',
    collapsed: true,
    items: [
      {
        text: 'Java 语言入门',
        collapsed: true,
        items: [
          {text: '计算机软件常识科普', link: `/01_java-se/java-amateur/01_${commonDirectoryName}/`},
          {text: 'Windows 软件包管理', link: `/01_java-se/java-amateur/02_${commonDirectoryName}/`},
          {text: 'WSL2 的安装和配置', link: `/01_java-se/java-amateur/03_${commonDirectoryName}/`},
          {text: 'Java 语言入门一', link: `/01_java-se/java-amateur/04_${commonDirectoryName}/`},
          {text: 'Java 语言入门二', link: `/01_java-se/java-amateur/05_${commonDirectoryName}/`},
        ]
      },
      {
        text: 'Java 语言初级',
        collapsed: true,
        items: [
          {text: 'Java 基础知识', link: `/01_java-se/java-basic/01_${commonDirectoryName}/`},
          {text: '进制', link: `/01_java-se/java-basic/02_${commonDirectoryName}/`},
          {text: 'Java 数据类型', link: `/01_java-se/java-basic/03_${commonDirectoryName}/`},
          {text: 'Java 运算符', link: `/01_java-se/java-basic/04_${commonDirectoryName}/`},
          {text: 'Java 开发工具（IDEA）', link: `/01_java-se/java-basic/05_${commonDirectoryName}/`},
          {text: 'Java 中的字符集', link: `/01_java-se/java-basic/06_${commonDirectoryName}/`},
          {text: '虚拟地址空间', link: `/01_java-se/java-basic/07_${commonDirectoryName}/`},
          {text: 'Java 流程控制', link: `/01_java-se/java-basic/08_${commonDirectoryName}/`},
          {text: '内存泄露和内存溢出', link: `/01_java-se/java-basic/09_${commonDirectoryName}/`},
          {text: 'Java 数组', link: `/01_java-se/java-basic/10_${commonDirectoryName}/`},
          {text: 'Java 方法', link: `/01_java-se/java-basic/11_${commonDirectoryName}/`},
          {text: 'Java 面向对象入门', link: `/01_java-se/java-basic/12_${commonDirectoryName}/`},
          {text: '面向对象综合训练', link: `/01_java-se/java-basic/13_${commonDirectoryName}/`},
          {text: '字符串一', link: `/01_java-se/java-basic/14_${commonDirectoryName}/`},
          {text: '字符串二', link: `/01_java-se/java-basic/15_${commonDirectoryName}/`},
        ]
      },
      {
        text: 'Java 语言进阶',
        collapsed: true,
        items: [
          {text: 'Java 面向对象进阶（一）', link: `/01_java-se/java-leap/01_${commonDirectoryName}/`},
          {text: '面向对象综合训练', link: `/01_java-se/java-leap/02_${commonDirectoryName}/`},
          {text: 'Java 面向对象进阶（二）', link: `/01_java-se/java-leap/03_${commonDirectoryName}/`},
          {text: '面向对象综合训练', link: `/01_java-se/java-leap/04_${commonDirectoryName}/`},
          {text: 'Java 面向对象进阶（三）', link: `/01_java-se/java-leap/05_${commonDirectoryName}/`},
          {text: 'Java 面向对象进阶（四）', link: `/01_java-se/java-leap/06_${commonDirectoryName}/`},
          {text: '面向对象综合训练', link: `/01_java-se/java-leap/07_${commonDirectoryName}/`},
          {text: 'Java 常见 API（一）', link: `/01_java-se/java-leap/08_${commonDirectoryName}/`},
          {text: 'Java 常见 API（二）', link: `/01_java-se/java-leap/09_${commonDirectoryName}/`},
          {text: 'Java 正则表达式', link: `/01_java-se/java-leap/10_${commonDirectoryName}/`},
          {text: 'Java 时间和包装类', link: `/01_java-se/java-leap/11_${commonDirectoryName}/`},
          {text: 'Java 算法', link: `/01_java-se/java-leap/12_${commonDirectoryName}/`},
          {text: 'Java 函数式编程（一）', link: `/01_java-se/java-leap/13_${commonDirectoryName}/`},
          {text: 'Java 函数式编程（二）', link: `/01_java-se/java-leap/14_${commonDirectoryName}/`},
          {text: 'Java 函数式编程（三）', link: `/01_java-se/java-leap/15_${commonDirectoryName}/`},
        ]
      },
      {
        text: 'Java 语言高级',
        collapsed: true,
        items: [
          {text: 'Java 异常', link: `/01_java-se/java-senior/01_${commonDirectoryName}/`},
          {text: 'Java 集合和泛型（一）', link: `/01_java-se/java-senior/02_${commonDirectoryName}/`},
          {text: 'Java 集合和泛型（二）', link: `/01_java-se/java-senior/03_${commonDirectoryName}/`},
          {text: 'Java 集合和泛型（三）', link: `/01_java-se/java-senior/04_${commonDirectoryName}/`},
          {text: 'Java 集合和泛型（四）', link: `/01_java-se/java-senior/05_${commonDirectoryName}/`},
          {text: 'Java 集合和泛型（五）', link: `/01_java-se/java-senior/06_${commonDirectoryName}/`},
          {text: 'Java I/O（一）', link: `/01_java-se/java-senior/07_${commonDirectoryName}/`},
          {text: 'Java I/O（二）', link: `/01_java-se/java-senior/08_${commonDirectoryName}/`},
          {text: 'Java I/O（三）', link: `/01_java-se/java-senior/09_${commonDirectoryName}/`},
          {text: 'Java 多线程（一）', link: `/01_java-se/java-senior/10_${commonDirectoryName}/`},
          {text: 'Java 多线程（二）', link: `/01_java-se/java-senior/11_${commonDirectoryName}/`},
          {text: 'Java 网络编程', link: `/01_java-se/java-senior/12_${commonDirectoryName}/`},
          {text: 'Java 类的加载和反射', link: `/01_java-se/java-senior/13_${commonDirectoryName}/`},
          {text: 'Java 枚举和注解', link: `/01_java-se/java-senior/14_${commonDirectoryName}/`},
          {text: 'Java 单元测试和日志技术', link: `/01_java-se/java-senior/15_${commonDirectoryName}/`},
        ]
      },
    ]
  },
  {
    text: 'Java 语言补充',
    collapsed: true,
    items: [
      {
        text: 'Java 图形化界面编程',
        collapsed: true,
        items: [
          {text: 'Java 图形化界面编程（一）', link: `/02_java-other/01_java-ui/01_${commonDirectoryName}/`},
          {text: 'Java 图形化界面编程（二）', link: `/02_java-other/01_java-ui/02_${commonDirectoryName}/`},
        ]
      },
      {
        text: 'JDK 新特性',
        collapsed: true,
        items: [
          {text: 'JDK8（LTS）', link: ``},
          {text: 'JDK9', link: ``},
          {text: 'JDK10', link: ``},
          {text: 'JDK11（LTS）', link: ``},
          {text: 'JDK12', link: ``},
          {text: 'JDK13', link: ``},
          {text: 'JDK14', link: ``},
          {text: 'JDK15', link: ``},
          {text: 'JDK16', link: ``},
          {text: 'JDK17（LTS）', link: ``},
          {text: 'JDK18', link: ``},
          {text: 'JDK19', link: ``},
          {text: 'JDK20', link: ``},
          {text: 'JDK21（LTS）', link: ``},
          {text: 'JDK22', link: ``},
          {text: 'JDK23', link: ``},
          {text: 'JDK24', link: ``},
          {text: 'JDK25（LTS）', link: ``},
        ]
      },
      {
        text: 'UML 建模语言',
        collapsed: true,
        items: [
          {text: '初识 UML', link: ``},
        ]
      },
      {
        text: '数据结构和算法',
        collapsed: true,
        items: [
          {text: '初识数据结构和算法', link: `/02_java-other/03_java-ds/ds-amateur/`,},
          {
            text: '基础数据结构', items: [
              {text: '数组', link: `/02_java-other/03_java-ds/ds-basic/02_${commonDirectoryName}/`},
              {text: '链表', link: `/02_java-other/03_java-ds/ds-basic/03_${commonDirectoryName}/`},
              {text: '递归', link: `/02_java-other/03_java-ds/ds-basic/04_${commonDirectoryName}/`},
              {text: '队列', link: `/02_java-other/03_java-ds/ds-basic/05_${commonDirectoryName}/`},
              {text: '栈', link: `/02_java-other/03_java-ds/ds-basic/06_${commonDirectoryName}/`},
              {text: '双端队列', link: `/02_java-other/03_java-ds/ds-basic/07_${commonDirectoryName}/`},
              {text: '优先级队列', link: `/02_java-other/03_java-ds/ds-basic/08_${commonDirectoryName}/`},
              {text: '阻塞队列', link: `/02_java-other/03_java-ds/ds-basic/09_${commonDirectoryName}/`},
              {text: '堆', link: `/02_java-other/03_java-ds/ds-basic/10_${commonDirectoryName}/`},
              {text: '二叉树', link: `/02_java-other/03_java-ds/ds-basic/11_${commonDirectoryName}/`},
            ]
          },
          {
            text: '基本算法', items: [
              {text: '初识查找算法', link: `/02_java-other/03_java-ds/ds-leap/01_${commonDirectoryName}/`},
              {text: '二叉搜索树', link: `/02_java-other/03_java-ds/ds-leap/02_${commonDirectoryName}/`},
              {text: 'avl 树', link: `/02_java-other/03_java-ds/ds-leap/03_${commonDirectoryName}/`},
              {text: '红黑树', link: `/02_java-other/03_java-ds/ds-leap/04_${commonDirectoryName}/`},
              {text: 'B 树', link: `/02_java-other/03_java-ds/ds-leap/05_${commonDirectoryName}/`},
              {text: '哈希表', link: `/02_java-other/03_java-ds/ds-leap/06_${commonDirectoryName}/`},
              {text: '排序算法', link: `/02_java-other/03_java-ds/ds-leap/07_${commonDirectoryName}/`},
            ]
          },
          {
            text: '高级算法', items: [
              {text: '图', link: `/02_java-other/03_java-ds/ds-senior/01_${commonDirectoryName}/`},
            ]
          },
        ]
      },
      {
        text: 'Java 多线程&并发编程',
        collapsed: true,
        items: [
          {text: 'Java 多线程&并发编程（一）', link: `/02_java-other/04_java-cc/01_${commonDirectoryName}/`},
          {text: 'Java 多线程&并发编程（二）', link: `/02_java-other/04_java-cc/02_${commonDirectoryName}/`},
        ]
      },
      {
        text: 'Java 设计模式',
        collapsed: true,
        items: [
          {text: '初识设计模式', link: ``},
        ]
      },
    ]
  },
  {
    text: '数据库核心技术',
    collapsed: true,
    items: []
  },
  {
    text: '项目构建工具',
    collapsed: true,
    items: [
      {
        text: 'Maven',
        collapsed: true,
        items: [
          {text: '初识 Maven', link: `/06_project-build/maven/01_${commonDirectoryName}/`},
        ]
      },
      {
        text: 'Gradle',
        collapsed: true,
        items: [
          {text: '初识 Gradle', link: `/06_project-build/gradle/01_${commonDirectoryName}/`},
        ]
      },
      {
        text: 'IDEA',
        collapsed: true,
        items: [
          {text: '初识 IDEA', link: `/06_project-build/idea/01_${commonDirectoryName}/`},
        ]
      },

    ]
  },
  {
    text: '前端工程化',
    collapsed: true,
    items: []
  },
  {
    text: '后端工程化',
    collapsed: true,
    items: [
      {
        text: '系统框架',
        collapsed: true,
        items: [
          {
            text: 'Linux',
            collapsed: true,
            items: [
              {text: '初识 Linux', link: ``},
            ]
          },
          {
            text: 'Git',
            collapsed: true,
            items: [
              {text: '初识 Git', link: ``},
            ]
          },
          {
            text: 'SSM',
            collapsed: true,
            items: []
          },
          {
            text: 'Redis',
            collapsed: true,
            items: []
          },
          {
            text: 'SpringBoot',
            collapsed: true,
            items: []
          },
        ]
      },
      {
        text: '项目管理',
        collapsed: true,
        items: [
          {
            text: '软件模型理论',
            collapsed: true,
            items: []
          },
          {
            text: '禅道&敏捷开发',
            collapsed: true,
            items: []
          },

        ]
      },
    ]
  },
  {
    text: '分布式核心',
    collapsed: true,
    items: [
      {
        text: 'JVM',
        collapsed: true,
        items: []
      },
      {
        text: 'JUC',
        collapsed: true,
        items: []
      },
      {
        text: 'SpringSecurity',
        collapsed: true,
        items: []
      },
      {
        text: 'SpringCloud',
        collapsed: true,
        items: [
          {text: '初识微服务', link: `/10_micro-service/01_${commonDirectoryName}/`},
        ]
      },
      {
        text: 'RabbitMQ',
        collapsed: true,
        items: []
      },
    ]
  },
  {
    text: 'K8s 生态圈',
    collapsed: true,
    items: []
  },
  {
    text: '企业级解决方案',
    collapsed: true,
    items: []
  }
]