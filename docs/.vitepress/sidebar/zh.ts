import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'

// 中文侧边栏
export const zhSidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'Java 语言基础',
      collapsed: true,
      items: [
        { text: '计算机软件常识科普', link: `/01_java-basic/01_${commonDirectoryName}/` },
        { text: 'Windows 软件包管理', link: `/01_java-basic/02_${commonDirectoryName}/` },
        { text: 'WSL2 的安装和配置', link: `/01_java-basic/03_${commonDirectoryName}/` },
        { text: 'Java 语言入门一', link: `/01_java-basic/04_${commonDirectoryName}/` },
        { text: 'Java 语言入门二', link: `/01_java-basic/05_${commonDirectoryName}/` },
        { text: 'Java 基础知识', link: `/01_java-basic/06_${commonDirectoryName}/` },
        { text: '进制', link: `/01_java-basic/07_${commonDirectoryName}/` },
        { text: 'Java 数据类型', link: `/01_java-basic/08_${commonDirectoryName}/` },
        { text: 'Java 运算符', link: `/01_java-basic/09_${commonDirectoryName}/` },
        { text: 'Java 开发工具（IDEA）', link: `/01_java-basic/10_${commonDirectoryName}/` },
        { text: 'Java 中的字符集', link: `/01_java-basic/11_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'Java 语言进阶',
      collapsed: true,
      items: [
        { text: '虚拟地址空间', link: `/02_java-leap/01_${commonDirectoryName}/` },
        { text: 'Java 流程控制', link: `/02_java-leap/02_${commonDirectoryName}/` },
        { text: '内存泄露和内存溢出', link: `/02_java-leap/03_${commonDirectoryName}/` },
        { text: 'Java 数组', link: `/02_java-leap/04_${commonDirectoryName}/` },
        { text: 'Java 面向对象（上）', link: `/02_java-leap/05_${commonDirectoryName}/` },
        { text: 'Java 面向对象（中）', link: `/02_java-leap/06_${commonDirectoryName}/` },
        { text: 'Java 面向对象（下）', link: `/02_java-leap/07_${commonDirectoryName}/` },
        { text: 'Java 异常', link: `/02_java-leap/08_${commonDirectoryName}/` },
        { text: 'Java 多线程', link: `/02_java-leap/09_${commonDirectoryName}/` },
        { text: 'Java 常见 API', link: `/02_java-leap/10_${commonDirectoryName}/` },
        { text: 'Java 集合', link: `/02_java-leap/11_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'Java 语言高级',
      collapsed: true,
      items: [
        { text: 'Java 泛型', link: `/03_java-senior/01_${commonDirectoryName}/` },
        { text: 'Java IO', link: `/03_java-senior/02_${commonDirectoryName}/` },
        { text: 'Java 网络编程', link: `/03_java-senior/03_${commonDirectoryName}/` },
        { text: 'Java 类的加载和反射', link: `/03_java-senior/04_${commonDirectoryName}/` },
        { text: 'Java 枚举和注解', link: `/03_java-senior/05_${commonDirectoryName}/` },
        { text: 'Java 单元测试和日志技术', link: `/03_java-senior/06_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'Java 基础补充',
      collapsed: true,
      items: [
        {
          text: 'JDK 新特性',
          collapsed: true,
          items: [
            { text: 'JDK9', link: `` },
            { text: 'JDK10', link: `` },
            { text: 'JDK11', link: `` },
            { text: 'JDK12', link: `` },
            { text: 'JDK13', link: `` },
            { text: 'JDK14', link: `` },
            { text: 'JDK15', link: `` },
            { text: 'JDK16', link: `` },
            { text: 'JDK17', link: `` },
            { text: 'JDK18', link: `` },
            { text: 'JDK19', link: `` },
            { text: 'JDK20', link: `` },
            { text: 'JDK21', link: `` },
          ]
        },
        {
          text: 'UML 建模语言',
          collapsed: true,
          items: [
            { text: '初识 UML', link: `` },
          ]
        },
        {
          text: '数据结构和算法',
          collapsed: true,
          items: [
            { text: '初识数据结构和算法', link: `` },
          ]
        },
        {
          text: '设计模式',
          collapsed: true,
          items: [
            { text: '初识设计模式', link: `` },
          ]
        },
        {
          text: 'Java 并发编程',
          collapsed: true,
          items: [
            { text: '初识并发编程', link: `` },
          ]
        },
      ]
    },
    {
      text: '数据库核心技术',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '项目构建工具',
      collapsed: true,
      items: [
        {
          text: 'Maven',
          collapsed: true,
          items: [
            { text: 'Maven 核心概念', link: `/06_project-build/maven/01_${commonDirectoryName}/` },
          ]
        },
        {
          text: 'Gradle',
          collapsed: true,
          items: [
            { text: '初识 Gradle', link: `/06_project-build/gradle/01_${commonDirectoryName}/` },
          ]
        },
        {
          text: 'IDEA',
          collapsed: true,
          items: [
            { text: '初识 IDEA', link: `` },
          ]
        },
      ]
    },
    {
      text: '前端工程化',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '后端工程化',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '分布式核心',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '微服务',
      collapsed: true,
      items: [
        { text: '初识微服务', link: `/10_micro-service/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'K8s 生态圈',
      collapsed: true,
      items: [

      ]
    }
  ],
}