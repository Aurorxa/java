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
      ]
    },
    {
      text: 'Java 语言高级',
      collapsed: true,
      items: [

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

          ]
        },
        {
          text: '设计模式',
          collapsed: true,
          items: [

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
            { text: 'Maven 核心概念', link: `/04_build/maven/01_${commonDirectoryName}/` },
          ]
        },
        {
          text: 'Gradle',
          collapsed: true,
          items: [
            { text: '初识 Gradle', link: `/04_build/gradle/01_${commonDirectoryName}/` },
          ]
        },
      ]
    },
    {
      text: 'WEB 技术规范',
      collapsed: true,
      items: [

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

      ]
    },
    {
      text: '项目实战',
      collapsed: true,
      items: [

      ]
    }
  ],
}