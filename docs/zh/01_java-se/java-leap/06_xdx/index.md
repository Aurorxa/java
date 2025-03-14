# 第一章：面向对象的概念

## 1.1 概述

* 所谓的`面向对象编程`，难道是这样，如下所示：

![面向对象编程：看着自己的女朋友，写着代码，更有灵感？](./assets/1.png)

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

* 在生活中，随着科技的发展，如果要购物，我们都是使用`手机`打开`购物 app`来`购物`的（指挥手机打开购物软件进行购物），如下所示：

![购物 app](./assets/5.png)

* ...

> [!NOTE]
>
> 在生活中，如果我们需要做某件事情，我们都是通过某种工具或某个东西来帮助我们完成某件事情。

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



# 第二章：设计对象并使用（⭐）

## 2.1 类和对象

### 2.1.1 概述

* 对象是一个又一个能帮助我们解决问题的东西，但是这些东西并不是凭空出现的，如下所示：

![对象](./assets/6.png)

* 在我们制造对象的时候，需要根据设计图才能制造出来，如下所示：

![设计图](./assets/7.png)

### 2.1.2 类和对象的概念

* 类（设计图）：是对象共同特征的描述，如：洗衣机图纸、扫地机器人图纸以及手机图纸。
* 对象：是真实存在的具体的东西，如：洗衣机、扫地机器人以及手机。

> [!CAUTION]
>
> * ① 在 Java 中，必须先设计类，才能获取对象！！！
> * ② 在 Java 中，使用 `class` 关键字来定义类，使用 `new 类名();` 来创建对象。

![](./assets/8.svg)

### 2.1.3 类的定义语法

* 语法：

```java
public class 类名 {
    ① 成员变量(代表属性，一般是名词)
    ② 成员方法(代表行为，一般是动词)
    ③ 构造器（后面学习）
    ④ 代码块（后面学习）
    ⑤ 内部类（后面学习）    
}
```

> [!NOTE]
>
> * ① `成员变量`，在很多技术资料中，也称为`属性`，通常是名字，如：手机型号、手机颜色、手机价格等。
> * ② `成员方法`，在很多技术资料中，也称为`行为`，通常是动词，如：打电话、接电话、发送短信、购物等。



* 示例：

```java
/**
 * 创建一个手机类
 */
public class Phone {
    /* 成员变量，即：属性 */

    // 品牌
    String brand;
    // 价格
    double price;

    /* 成员方法，即：行为 */

    /**
     * 打电话
     */
    public void call() {
        System.out.println("打电话");
    }

    /**
     * 玩游戏
     */
    public void play() {
        System.out.println("玩游戏");
    }
}
```

### 2.1.4 对象的定义语法

* 语法：

```java
类名 对象名 = new 类名(); // 每调用一个 new 关键字，就创建一个新的对象
```



* 示例：

```java
public class PhoneTest {
    public static void main(String[] args) {

        // 创建对象
        Phone p = new Phone();

        // 创建对象
        Phone p2 = new Phone();
        
    }
}
```

### 2.1.5 对象的使用语法

* 给属性赋值或访问属性：

```java
对象名.成员变量 = xxx; // 给属性赋值
成员变量类型 变量名 = 对象名.成员变量; // 访问属性
```

* 访问行为：

```java
对象名.方法名();
```



* 示例：

```java
public class PhoneTest {
    public static void main(String[] args) {

        // 创建对象
        Phone p = new Phone();
        // 给对象属性赋值
        p.brand = "苹果";
        p.price = 8888.88;
        // 访问对象属性
        System.out.println(p.brand);
        System.out.println(p.price);
        // 调用对象方法
        p.call();
        p.play();

        System.out.println("--------------------");

        // 创建对象
        Phone p2 = new Phone();
        // 给对象属性赋值
        p2.brand = "华为";
        p2.price = 6666.66;
        // 访问对象属性
        System.out.println(p2.brand);
        System.out.println(p2.price);
        // 调用对象方法
        p2.call();
        p2.play();

    }
}
```

## 2.2 类的注意事项







# 第三章：对象的内存分析





# 第四章：成员变量和局部变量





# 第五章：封装



# 第六章：构造方法
