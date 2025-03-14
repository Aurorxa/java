# 第一章：面向对象的概念

## 1.1 概述

* 所谓的`面向对象编程`，难道是这样，如下所示：

> [!NOTE]
>
> 面向对象编程：看着自己的女朋友，写着代码，更有灵感？

![面向对象编程](./assets/1.png)

* 其实，不然，`面向对象编程`只是一种编程的思想而已，即：指导程序员如何写代码。

> [!NOTE]
>
> 维基百科：
>
> * **面向对象编程**（英语：Object-oriented programming，[缩写](https://zh.wikipedia.org/wiki/缩写)：OOP）是种具有[物件](https://zh.wikipedia.org/wiki/对象_(计算机科学))概念的[程式设计典范](https://zh.wikipedia.org/wiki/编程范型)，同时也是一种程式开发的抽象方针。它可能包含[资料](https://zh.wikipedia.org/wiki/数据)、[特性](https://zh.wikipedia.org/wiki/特性_(计算机科学))、[程式码](https://zh.wikipedia.org/wiki/源代码)与[方法](https://zh.wikipedia.org/wiki/方法_(電腦科學))。对象则指的是[类别](https://zh.wikipedia.org/wiki/类_(计算机科学))（class）的实例。它将[对象](https://zh.wikipedia.org/wiki/物件_(電腦科學))作为[程序](https://zh.wikipedia.org/wiki/计算机程序)的基本单元，将程序和[数据](https://zh.wikipedia.org/wiki/数据)[封装](https://zh.wikipedia.org/wiki/封裝_(物件導向程式設計))其中，以提高软件的重用性、灵活性和扩展性，物件里的程序可以访问及经常修改物件相关连的资料。在物件导向程式编程里，电脑程式会被设计成彼此相关的物件[[1\]](https://zh.wikipedia.org/zh-hans/面向对象程序设计#cite_note-1)[[2\]](https://zh.wikipedia.org/zh-hans/面向对象程序设计#cite_note-2)。
> * **面向对象程序设计**可以看作一种在程序中包含各种独立而又互相调用的对象的思想，这与传统的思想刚好相反：传统的程序设计主张将程序看作一系列[函数](https://zh.wikipedia.org/wiki/函数)的集合，或者直接就是一系列对电脑下达的指令。面向对象程序设计中的每一个对象都应该能够接受数据、处理数据并将数据传达给其它对象，因此它们都可以被看作一个小型的“机器”，即对象。目前已经被证实的是，面向对象程序设计推广了程序的灵活性和可维护性，并且在大型项目设计中广为应用。此外，支持者声称面向对象程序设计要比以往的做法更加便于学习，因为它能够让人们更简单地设计并维护程序，使得程序更加便于分析、设计、理解。反对者在某些领域对此予以否认。

* 官方的定义总是这么抽象以及晦涩难懂，我们可以适当简化一下：
  * `面向对象编程`中的`面向`就是`拿`或`找`。
  * `面向对象编程`中的`对象`就是`能干活的东西`。
  * `面向对象编程`就是`当我们在实际开发中，需要实现某个功能的时候，我们并不是自己从头到尾完整的实现一遍，而是让能干活的东西帮我们完成，即：指挥对象去干活`。

> [!NOTE]
>
> ::: details 点我查看 面向对象在生活中例子
>
> ![面向对象在生活中的例子](./assets/2.webp)
>
> :::

* 在之前，我们会在程序中使用`Scanner`对象和`System.out`对象，以便实现`标准输入`和`标准输出`功能，如下所示：

```java
import java.util.*;

public class Main {
    public static void main(String[] args){
        // input 就是对象，通过它我们可以在控制台中输入数据，以便执行之后的逻辑
        Scanner input = new Scanner(System.in);
        
        // System.out 也是对象，通过它我们可以将数据输出到终端中
        System.out.print("请输入您的年龄：")
        
        int age = input.nextInt();
        System.out.println("您的年龄是："+age)
        
        ...
        
        input.close;
    }
}
```

* 在之前，我们会在程序中使用`Random`对象，以便实现`随机数`功能，如下所示：

```java
package com.github;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        // 通过 Random 对象获取随机数
        Random random = new Random();

        // 获取 [0, 100) 区间内的随机数
        int i = random.nextInt(100);

        System.out.println("i = " + i);
    }
}
```

## 1.2 为什么需要使用面向对象编程？

* 在生活中，随着科技的发展，如果要`洗衣服`，我们都是让`洗衣机`来帮我们`洗衣服`（指挥洗衣机洗衣服）的，如下所示：

![洗衣机帮我们洗衣服](./assets/3.jpg)

* 在生活中，随着科技的发展，如果要`扫地`或`拖地`，我们都是让`扫地机器人`来帮我们`扫地`或`拖地`（指挥扫地机器人扫地）的，如下所示：

![扫地机器人](./assets/4.gif)

* ...

> [!NOTE]
>
> 在生活中，如果我们想干某件事情，我们都是通过某种工具或某个东西来帮助我们完成某个事情。

* 在程序中，也不例外，如果我们要实现某些功能，我们可以指挥一个个的对象，让它们去帮我们实现各个功能，即：面向对象编程。

```java
import java.util.*;

public class Main {
    public static void main(String[] args){
        // input 就是对象，通过它我们可以在控制台中输入数据，以便执行之后的逻辑
        Scanner input = new Scanner(System.in);
        
        // System.out 也是对象，通过它我们可以将数据输出到终端中
        System.out.print("请输入您的年龄：")
        
        int age = input.nextInt();
        System.out.println("您的年龄是："+age)
        
        ...
        
        input.close;
    }
}
```

```java
package com.github;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        // 通过 Random 对象获取随机数
        Random random = new Random();

        // 获取 [0, 100) 区间内的随机数
        int i = random.nextInt(100);

        System.out.println("i = " + i);
    }
}
```

## 1.3 面向对象编程需要学习什么？

* ① 学习获取已有对象并使用。

```java
package com.github;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        // 通过 Random 对象获取随机数
        Random random = new Random();

        // 获取 [0, 100) 区间内的随机数
        int i = random.nextInt(100);

        System.out.println("i = " + i);
    }
}
```

* ② 学习如何自己设计对象并使用。

```java
package com.github;

public class RandomTest {
    public static void main(String[] args) {
        // 创建对象
        Person p = new Person();
        /*设置属性和调用方法*/
        p.name = "郭德纲";
        p.age = 40;
        p.sayHello();
    }
}

/*定义类*/
class Person {
    String name;
    int age;

    public void sayHello() {
        System.out.println("Hello, I'm " + name + ", " + age + " years old.");
    }
}
```



# 第二章：类和对象





# 第三章：对象的内存分析





# 第四章：成员变量和局部变量





# 第五章：封装



# 第六章：构造方法
