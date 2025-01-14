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
        { text: 'Java 入门', link: `/01_java-basic/02_${commonDirectoryName}/` },
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
      text: '后端工程化',
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