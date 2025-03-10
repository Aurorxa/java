

# 第一章：方法的基本概念

## 1.1 为什么需要方法？

* 我们小时候，可能玩过类似`《街霸》`或`《拳皇》`这样的游戏，如下所示：

![街霸游戏或拳皇游戏](./assets/1.png)

* 在这些游戏中，假设角色的`出拳`、`出脚`、`跳跃`等动作都需要编写 50 - 80 行的代码。

> [!NOTE]
>
> - ① 或许，你会感觉每种角色`出拳`、`出脚`、`跳跃`等动作是不一样的，其背后的代码逻辑也应该是不一样的。
> - ② 其实，`出拳`、`出脚`、`跳跃`等动作只是 `UI` 方面的效果，这些动作背后对应的代码逻辑都是一样的（无非就是增减血量、增减蓝而已），不同的只是接收的参数！！！

- 如果我们在角色每次`出拳`、`出脚`、`跳跃`的地方都`重复的编写`这 50 - 80 的代码，这样程序就会编写很`臃肿`，`可读性`也非常`差`，如下所示：

![不存在方法时的代码结构](./assets/2.svg)

- 为了解决代码`重复编写`的问题，我们可以将角色`出拳`、`出脚`、`跳跃`等动作的代码`提取`出来，放到一个 `{}`（代码块） 中，并为这个代码块起个名字。这样就可以在角色进行`出拳`、`出脚`、`跳跃`等动作的地方，通过这个`名字`来调用这个 `{}` 中的代码，如下所示：

![存在方法时的代码结构](./assets/3.svg)

> [!IMPORTANT]
>
> - ① 提取出来的代码可以看做是程序中定义的一个`方法`，程序在需要`出拳`、`出脚`、`跳跃`等地方调用该`方法`即可。
> - ② `方法`只有`调用`的时候才会`执行`其内部的逻辑，不调用不执行！！！
> - ③ 将特定功能的代码封装为`方法`的好处： `实现代码重用`，`减少冗余`，`简化代码` 。

## 1.2 什么是方法？

### 1.2.1 方法的概念

* `方法`（method）是程序中最小的执行单元，即：`方法`是一种可以`重复使用`的`代码块`，用于执行特定的任务或操作。

> [!NOTE]
>
> 方法中的代码，要么全部执行，要么全部不执行！！！

* 之前，我们学习的入门程序中就有方法的身影 --- main 方法，如下所示：

```java {3-6}
public class HelloWorld {
    
    public static void main(){ 
        System.out.println("Hello World!!!");
        System.out.println("Hello World!!!");
    }
    
}
```

* 当然，之后我们也会学习`如何自定义方法`以及`如何调用自定义方法`，如下所示：

```java {3-6,8-11,15-16,18-19}
public class Main {
    
    // 自定义方法
    public static void eat(){ 
       System.out.println("吃饭~");
    }
    
    // 自定义方法
    public static void sleep(){
       System.out.println("睡觉~");
    }
    
    public static void main(){ 
        
        // 调用自定义方法
        eat();
        
        // 调用自定义方法
        sleep();
        
        System.out.println("Hello World!!!");
        System.out.println("Hello World!!!");
    }
}
```

### 1.2.2 方法的作用

- ① `封装功能`：将一个完整的功能封装成方法，提高代码的结构化和复用性。
- ② `代码模块化`：将程序按照功能拆分成若干模块单元，有助于降低复杂度。
- ③ `增强可维护性`：如果需要修改某项功能，只需要调整对应的方法代码。
- ④ `隔离细节`：通过方法调用可以隐藏实现细节，只关心输入输出。



# 第二章：方法的基本语法（⭐）

## 2.1 概述

* `方法`分为`方法定义`和`方法调用`。
* 其中， 将一些代码打包在一起的过程就称为`方法定义`。
* 其中，方法定义后并不能直接运行的，需要手动调用才能执行，该过程称为`方法调用`（不调用，不执行）。

## 2.2 最简单的方法定义和调用

### 2.2.1 语法

* 方法定义语法：

```java
public static void 方法名(){
    // 方法体;
}
```

* 方法调用语法：

```java
方法名();
```

> [!CAUTION]
>
> 方法需要先定义再调用，否则程序将会报错！！！



* 示例：

```java
package com.github.study;

public class MethodDemo1 {

    /**
     * 最简单的方法定义
     */
    public static void playGame() {
        System.out.println("① 选择游戏");
        System.out.println("② 安装和启动游戏");
        System.out.println("③ 创建或登录账号");
        System.out.println("④ 了解游戏");
        System.out.println("⑤ 开始游戏");
        System.out.println("⑥ 提升技能和装备（适用于某些游戏）");
        System.out.println("⑦ 社交互动（如果游戏支持）");
        System.out.println("⑧ 保存进度：定期保存游戏进度，避免意外丢失数据");
        System.out.println("⑨ 结束游戏：当完成当前目标或想要休息时，安全退出游戏");
    }

    public static void main(String[] args) {
        // 最简单的方法调用
        playGame();

        System.out.println("------------------------------------");

        // 最简单的方法调用
        playGame();
    }

}
```

### 2.2.2 应用示例

* 需求：要求定义一个方法，在方法内部打印女朋友的所有信息。



* 示例：

```java
package com.github.test;

public class MethodTest1 {
    /**
     * 打印个人信息
     */
    public static void printGFMessage() {
        System.out.println("国籍：非洲");
        System.out.println("姓名：如花");
        System.out.println("年龄：16 岁");
        System.out.println("性别：女");
        System.out.println("身高：1.65 米");
        System.out.println("体重：100 公斤");
    }

    public static void main(String[] args) {
        // 调用方法
        printGFMessage();
    }
}
```

### 2.2.3 应用示例

* 需求：定义一个方法，在方法内部定义两个变量，并打印这两个变量的和。



* 示例：

```java
package com.github.test;

public class MethodTest2 {
    /**
     * 打印两个变量的和
     */
    public static void getSum() {
        int num1 = 10;
        int num2 = 20;
        int result = num1 + num2;
        System.out.println(num1 + " + " + num2 + " = " + result);
    }

    public static void main(String[] args) {
        // 调用方法
        getSum();
    }
}
```

## 2.3 带参数的方法定义和调用

### 2.3.1 语法

* 方法定义语法：

```java
public static void 方法名(数据类型1 参数1,数据类型2 参数2,...){
    // 方法体;
}
```

* 方法调用语法：

```java
方法名(实参1,实参2,...);
```

> [!CAUTION]
>
> * ① 方法需要先定义再调用，否则程序将会报错！！！
> * ② 方法调用的时候，`实参的类型和数量`必须和`方法定义中小括号内的变量的类型和数量`一一对应，否则程序将会报错！！！



* 示例：

```java
package com.github.study;

public class MethodDemo2 {
    /**
     * 打印两个变量的和
     */
    public static void getSum(int num1, int num2) {
        int result = num1 + num2;
        System.out.println(num1 + " + " + num2 + " = " + result);
    }

    public static void main(String[] args) {
        // 调用方法
        getSum(10, 20);

        // 调用方法
        getSum(20, 30);

        // 调用方法
        getSum(-3, 4);
    }

}
```

### 2.3.2 形参和实参

* 形参（形式参数）：是指`方法定义`中的参数。
* 实参（实际参数）：是指`方法调用`中的参数。

![形参和实参](./assets/4.png)

### 2.3.3 应用示例

* 需求：定义一个方法，求长方形的周长，将结果在方法中进行打印。



* 示例：

```java
package com.github.test;

public class MethodTest3 {
    /**
     * 求矩形的周长
     *
     * @param length 矩形的长
     * @param wide   矩形的宽
     */
    public static void getPerimeter(double length, double wide) {
        // 周长
        double result = (length + wide) * 2;

        System.out.println("矩形的周长为：" + result);
    }

    public static void main(String[] args) {
        // 调用方法
        getPerimeter(1, 2);
    }
}
```

### 2.3.4 应用示例

* 需求：定义一个方法，求圆的面积，将结果在方法中进行打印。



* 示例：

```java
package com.github.test;

public class MethodTest4 {
    /**
     * 求圆的面积
     *
     * @param r 半径
     */
    public static void getArea(double r) {
        // 周长
        double area = Math.PI * r * r;

        System.out.println("圆的面积是：" + area);
    }

    public static void main(String[] args) {
        // 调用方法
        getArea(2);
    }
}
```

## 2.4 带返回值的方法定义和调用

### 2.4.1 语法

* 方法定义语法：

```java
public static 返回值类型 方法名(数据类型1 参数1,数据类型2 参数2,...){
    // 方法体;
    return 返回值;
}
```

* 方法调用语法：

```java
返回值类型 变量 = 方法名(实参1,实参2,...);
```

> [!CAUTION]
>
> * ① 方法需要先定义再调用，否则程序将会报错！！！
> * ② 方法调用的时候，`实参的类型和数量`必须和`方法定义中小括号内的变量的类型和数量`一一对应，否则程序将会报错！！！



* 示例：

```java
package com.github.study;

public class MethodDemo3 {
    /**
     * 计算两个变量的和
     *
     * @param num1 变量
     * @param num2 变量
     * @return 变量的和
     */
    public static int getSum(int num1, int num2) {
        return num1 + num2;
    }

    public static void main(String[] args) {
        // 调用方法
        int sum = getSum(10, 20);
        System.out.println("sum = " + sum);

        // 调用方法
        sum = getSum(20, 30);
        System.out.println("sum = " + sum);

        // 调用方法
        sum = getSum(-3, 30);
        System.out.println("sum = " + sum);
    }

}
```















# 第三章：方法重载（⭐）





# 第四章：综合练习（⭐）

