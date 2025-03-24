# 第一章：API 和 API 帮助文档

## 1.1 概述

* 之前我们已经学习过了面向对象了。并且我们知道，面向对象具体就是两个部分：
  * ① `如何使用别人已经写好的东西`。
  * ② `我们自己如何设计一个类，并使用`。
* 之前，我们都是学习`自己如何设计一个类，并使用`。但是，不可能所有的功能都是我们自己去手动实现，这样效率太低。

> [!NOTE]
>
> * ① 为了降低开发的难度，Java 官方将一些常用的功能进行了封装，并形成 API 供我们调用。
> * ② 有的时候，我们需要实现一些功能，Java 官方并没有实现，如：通过 Java 代码去操作 Word、Excel 等，这个时候就需要调用一些第三方库提供的 API，如：Apache POI 等。

* 之后，在学习和工作的时候，我们也需要学习`如何使用别人已经写好的东西`。

## 1.2 ISA、ABI 和 API

* ISA 、ABI 和 API 的参考模型，如下所示：

![ISA 、ABI 和 API 的参考模型](./assets/1.jpg)

* 在底层，硬件模型以指令集架构 （ISA） 表示，该架构定义了处理器、寄存器、存储器和中断管理的指令集。ISA 是硬件和软件之间的接口，对于操作系统 （OS） 开发人员 （System ISA） 和直接管理底层硬件的应用程序 （User ISA） 的开发人员来说非常重要。

> [!NOTE]
>
> - ① ISA 是计算机体系结构中定义的一组指令，它规定了处理器能够执行的操作。ISA 包括指令的编码、寄存器的使用、内存访问模式等。不同的处理器可能有不同的 ISA，例如：x86、ARM、MIPS 等。
> - ② 在设计一个新的操作系统时，开发者需要确保操作系统能够支持特定的 ISA ，以便在特定的硬件上运行。例如：如果操作系统旨在运行在 ARM 架构的处理器上，那么它必须能够理解和执行 ARM ISA 定义的指令集。

* 应用程序二进制接口 （ABI） 将`操作系统层`与由操作系统管理的`应用程序`和`库`分开。ABI 涵盖了低级数据类型、对齐方式和调用约定等详细信息，并定义了可执行程序的格式。系统调用在此级别定义。此接口允许应用程序和库在实现相同 ABI 的操作系统之间移植。

> [!NOTE]
>
> - ① ABI 是指在二进制级别上，应用程序与操作系统、库或应用程序的不同部分之间的接口。它定义了数据类型的大小、布局、对齐方式，以及函数调用的约定（如参数如何传递、返回值如何处理等）。ABI 确保了编译后的二进制文件能够在特定的操作系统和硬件平台上正确地运行。
> - ② 在 windows 上的应用程序的运行格式是：`PE`（portable executable）格式、`.dll` （dynamic link library）格式和 `.lib` 格式；而在 Linux 上的应用程序的运行格式是：`ELF`（executable and linking format）格式、`.so` （shared object）格式和 `.a` 格式。
> - ③ 在 Linux 中可以通过 `file /bin/ls` 命令查看指定可执行应用程序的 ABI 格式；从而也可以论证，在 Windows 上可以运行的程序，在 Linux 上运行不了。
> - ④ 当开发者在 Linux 系统上编写 C 语言程序，并使用特定的编译器（如：GCC）编译时，编译器会遵循 Linux 平台的 ABI 规范来生成二进制文件。这样，生成的可执行文件就可以在任何遵循相同 ABI 规范的 Linux 系统上运行。
> - ⑤ 如果一个应用程序需要跨平台（操作系统）运行，就需要使用`一套代码，多平台编译`的方式（针对 C 或 C++ 等），即：相同的源代码，在不同平台（操作系统）上使用特定平台的编译器（如：GCC）来分别编译成符合自己平台的 ABI 规范的二进制文件。

* 最高级别的抽象由应用程序编程接口 （API） 表示，它将`应用程序`连接到`库`或`底层操作系统`。

> [!NOTE]
>
> - ① API 是一组预定义的函数、协议和工具，用于构建软件和应用程序。API 允许不同的软件系统相互交互，它定义了软件组件之间如何相互通信。API 可以是库、框架、协议或服务。
> - ② 在 Web 开发中，开发者可能会使用 JavaScript 的 Fetch API 来与服务器进行通信，获取数据或提交表单。这个 API 提供了一种标准化的方式来发送 HTTP 请求和处理响应，而不需要开发者关心底层的网络协议细节。

## 1.3 API

* `API`（`A`pplication `P`rogramming `I`nterface）：应用程序编程接口。

> [!NOTE]
>
> API 的简单理解：API 就是别人已经写好的东西，我们不需要自己编写，直接使用。（无情的调参侠）

* `Java API`：指的是 JDK 中提供的各种功能的 Java 类。

> [!NOTE]
>
> * ① Java API（应用程序编程接口）是 Java 编程语言提供的一组预定义的类、接口、方法和工具，它们用于帮助开发人员快速构建应用程序。
> * ② Java API 是 Java 平台的重要组成部分，提供了大量的功能模块，开发人员可以直接使用这些模块来避免重复造轮子。
> * ③ Java API 涵盖了广泛的领域，包括输入/输出、网络、数据库连接、图形用户界面等。
> * ④ 这些类将底层的实现封装起来，我们并不需要关心这些类是如何实现的，只需要学习如何使用这些类。

* `第三方 API`：指的是开源组织或个人提供用于实现特定功能的 Java 类，如：Apache 的 POI 。

## 1.4 API 帮助文档

* Java 本身提供的 API 实在是太多太多，如果每个类，我们都需要背诵并记忆，那么我们想哭的心都有，如下所示：

![Java API 太多，想哭 🥺](./assets/2.gif)

* 为了帮助开发人员（程序员）能快速的搜索、了解以及学习的 Java 中的 API，Java 提供了文档，如下所示：

> [!NOTE]
>
> Java 中的`API 帮助文档`是通过`java doc`工具根据`文档注释`来生成的！！！

![Java API 帮助文档](./assets/3.png)



# 第二章：String 介绍（⭐）

## 2.1 概述

* 在 Java 中，字符串字面量是使用`""`包裹的，如下所示：

```java
String str = "abc";
```

```java
String str = "你好啊";
```

* 在 Java 中，字符串和任意数据类型的数据（常量或变量）进行相加，其实是拼接操作，结果是一个新的字符串，如下所示：

```java
String str = "abc";
String str2 = "abc" + 1;
```

```java
String str = "abc";
String str2 = 'c' + "abc";
```

## 2.2 字符串的应用场景

* ① `用户的输入和输出处理`：用户在界面、命令行或网页中输入的数据通常是字符串，需要进行读取、处理和显示。

![用户的输入和输出处理](./assets/4.png)

* ② `文本数据处理`：对文章、日志、配置文件等文本进行读取、解析、提取关键字、格式化等操作。

![文本数据处理](./assets/5.jpeg)

## 2.3 字符串需要学习的内容

* ① 掌握字符串的一些常见操作：String、StringBuilder、StringBuffer、StringJoiner、Pattern、Matcher。
* ② 掌握分析问题、解决问题的能力，以解决实际开发中的常见问题。
* ③ 学习字符串相关的底层原理，以便处理开发中的一些复杂问题。



# 第三章：package 和 import （⭐）

## 3.1 package 关键字

* `package` 用于将类、接口等 Java 文件组织成不同的命名空间，从而避免命名冲突。
* 语法：

```java
package 顶级包名.子包名;
```

> [!NOTE]
>
> * ① `package` 帮助代码更有条理，尤其是在大型项目中。每个 Java 类文件可以声明一个包。
> * ② `package` 对应于文件系统的目录，package 语句中，用 `.` 来指明包（目录）的层次。
> * ③ `package` 语句作为 Java 源文件的第一条语句，指明该文件中定义的类所在的包。
> * ④ 如果没有显式声明 `package`，默认的包是 `default`，但这不推荐在实际开发中使用。
> * ⑤ 包通常用小写单词标识，通常使用所在公司域名的倒置，比如：`com.github.xxx` 。

> [!NOTE]
>
> ::: details 点我查看 大型项目中的 `package`
>
> ![大型项目中的包](./assets/6.png)
>
> :::



* 示例：

```java {1}
package com.github.model;

public class Student {
    
    String name;
    int age;
    char gender;

    public void study() {
        System.out.println("学习使我快乐");
    }
}
```

## 3.2 import 关键字

* `import` 用于引入其他包中的类或接口，这样就可以在当前类中使用它们而不需要写全类的完整路径。
* 语法：

```java
import 顶级包名.子包名.类;
```

> [!NOTE]
>
> * ① `import` 语句使得代码更加简洁，避免每次使用类时都要写完整的类路径。
> * ② `import` 语句通常放在类文件的最上方，在 `package` 声明之后，类声明之前。
> * ③ `import java.util.Scanner` ：只引入一个类，使用其类名即可。
> * ④ `import java.util.*`：使用 `*` 来引入包中的所有类，但这种做法不推荐，因为它会引入所有类，可能影响性能，也不清楚具体引入了哪些类。
> * ⑤ 对于 `java.lang.*` 下的类，是不需要使用 import 导入， 因为 Java 已经默认帮我们导入了。
> * ⑥ 在实际开发中，无需担心，我们都是通过 `IDEA` ，让其帮助我们自动导入包。



* 示例：

```java {1}
import java.util.Scanner;

public class IOTest {
    public static void main(String[] args) {
        // 创建 Scanner 对象
        Scanner sc = new Scanner(System.in);

        System.out.print("姓名：");
        String name = sc.nextLine();
        System.out.print("年龄：");
        int age = sc.nextInt();
        System.out.print("身高：");
        double height = sc.nextDouble();
        System.out.print("体重：");
        double weight = sc.nextDouble();

        System.out.println("----------------------");

        System.out.println("姓名是：" + name);
        System.out.println("年龄是：" + age);
        System.out.println("身高是：" + height);
        System.out.println("体重是：" + weight);

        // 关闭资源
        sc.close();
    }
}
```



# 第四章：String（⭐）

## 4.1 概述

* 在 Java 中，String 类是定义在 java.lang 包下的，如下所示：

```java 
package java.lang;  // [!code focus]

public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence,
               Constable, ConstantDesc {
    ...               
}
```

* 在 Java 中，所有的`字符串字面量`都是 String 类的`对象`，如下所示：

```java
String str = "abc";
```

```java
String str2 = "1";
```

* 在 JDK9 之后，String 对象内部的字符串内容是存储在一个 byte 数组中。

```java
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence,
               Constable, ConstantDesc {

    @Stable
    private final byte[] value; // [!code focus]
    
    ...               
 }                  
```

## 4.2 String 的特点

* ① String 是使用 final 修饰的，意味着我们不能继承 String。

::: code-group

```java [正例]
public class Demo {
    public static void main(String[] args){
        // 以下代码是正确的
        String str = "abc"; // [!code highlight]
    }
}
```

```java [反例]
 // 以下代码是错误的
public class String2 extends String { // [!code error]
    
}
```

:::

* ② String 的内容是不会发生改变的，它的值在创建之后就不能发生改变。

> [!NOTE]
>
> 如果进行字符串拼接操作，就会产生一个新的字符串对象

```java
String str = "abc";
String str2 = str + 1 ; // 新的 String 实例
```

## 4.3 创建 String 对象的两种方式

* ① `直接赋值`：类似于普通基本数据类型变量的写法（语法糖），如：`String str = "xxx"` 。
* ② `new 构造方法`：

| String 类的构造方法              | 描述                             |
| -------------------------------- | -------------------------------- |
| public String() {}               | 创建空白字符串，不包含任何内容   |
| public String(String original){} | 根据传入的字符串，创建字符串对象 |
| public String(char value[]) {}   | 根据字符数组，创建字符串对象     |
| public String(byte[] bytes){}    | 根据字节数组，创建字符串对象     |

> [!NOTE]
>
> * ① 在实际开发中，使用最多的是`直接赋值`的写法。
> * ② 但是，有的时候，我们也需要将`字符数组`或`字节数组`，转换为字符串对象；此时，就需要使用`new 构造方法`的形式。



* 示例：直接赋值

```java
package com.github.demo;
 
public class StringDemo1 {
    public static void main(String[] args) {
       
        String s1 = "hello";
        System.out.println("s1 = " + s1);     
    }
}
```



* 示例：new 构造方法

```java
package com.github.demo;

// new 构造方法
public class StringDemo1 {
    public static void main(String[] args) {        
        
        // 空参构造，创建一个空白的字符串对象
        String s2 = new String();
        System.out.println("s2 = " + s2);
        
        // 传递一个字符串，根据传递的字符串内容创建一个新的字符串对象
        String s3 = new String("world");
        System.out.println("s3 = " + s3);
        
        // 传递一个字节数组，根据字节数组的内容创建一个新的字符串对象
        byte[] bytes = {97,98,99,100};
        String s4 = new String(bytes);
        System.out.println("s4 = " + s4);
        
        // 传递一个字符数组，根据字符数组的内容创建一个新的字符串对象
        char[] chs = {'a','b','c'};
        String s5 = new String(chs);
        System.out.println("s5= " + s5);        
    }
}
```

## 4.4 创建 String 对象背后的原理

### 4.4.1 Java 中的内存分配

* 为了更好的管理内存，JVM 将内存分为了`本地方法栈`、`寄存器`、`栈`、`方法区`和`堆`，如下所示：

> [!NOTE]
>
> - ① ~~**本地方法栈**：用于执行本地方法（Native Methods），是 Java 外部代码执行的栈空间。~~
> - ② ~~**寄存器**：硬件存储器，用于存储运算临时数据，提高计算效率。~~
> - ③ `栈`：用于存储方法的局部变量、操作数、栈帧等，和方法的调用生命周期密切相关，即：方法运行的时候进栈，方法执行完毕之后出栈。
> - ④ `方法区`：存储类的元数据、常量池等信息，类和方法的静态数据存储区域。
> - ⑤ `堆`：存储对象和数组，是 JVM 管理的最大内存区域，涉及对象的创建和垃圾回收。

![JVM 内存区域](./assets/7.svg)

* 为了更方便的管理字符串，Java 设计了 StringTable（字符串常量池），只有直接赋值的方式创建的字符串才会创建到该常量池中，并且在 JDK7 之后该字符串常量池是在方法区中的，如下所示：

> [!NOTE]
>
> 如果使用 `new 构造方法`创建的字符串还是在堆中。

![JDK 7 之前的字符串常量池](./assets/8.svg)

* 但是，这种设计并不是很好，在 JDK 8 的时候，取消了方法区，新增了元空间，并将原先方法区中的很多功能进行拆分，有的功能放到了堆中，有的功能放到了元空间中，同时字符串常量池也从方法区移动到了堆中，如下所示：

> [!NOTE]
>
> JDK 7 中设计不好的原因是：方法区（永久代）使用的是虚拟机的内存，当加载过多的类，非常容易导致内存溢出，如：`OutOfMemoryError: PermGen space` 。

![JDK 8 之后的字符串常量池](./assets/9.svg)

### 4.4.2 直接赋值方法的内存分配

* 假设要运行的代码，如下所示：

```java
public class StringDemo {
  public static void main(String[] args) {  
    String s1 = "abc";
    String s2 = "abc";	
  }
}
```

* 其在内存中的动态图，如下所示：

> [!NOTE]
>
> 使用`直接赋值`的方式创建字符串，系统会检查该`字符串`在`字符串常量池`中是否存在？
>
> * ① 存在：直接复用之前在`字符串常量池`中创建的字符串。
> * ② 不存在：在`字符串常量池`中创建新的字符串。

![直接赋值](./assets/10.gif)

* 其完成的内存动态图，如下所示：

![直接赋值](./assets/11.gif)

### 4.4.3 new 构造方法的内存分配

* 假设要运行的代码，如下所示：

```java
public class StringDemo {
  public static void main(String[] args) {  
     char[] chs = {'a','b','c'};
     String s1 = new String(chs);
     String s2 = new String(chs);
  }
}
```

* 其在内存中的动态图，如下所示：

![new 构造方法](./assets/12.gif)

* 其完整的内存动态图，如下所示：

![new 构造方法](./assets/13.gif)

## 4.5 字符串内容比较

### 4.5.1 概述

* 之前，我们可以通过 `==` 来判断字符串是否相等，如下所示：

```java
public class StringDemo {
    public static void main(String[] args) {  
        String s1 = "abc";
        String s2 = "abc";
        System.out.println(s1 == s2); // true
  }
}
```

* 其在内存中的动态图，如下所示：

> [!NOTE]
>
> * ① 如果是基本数据类型，`==` 比较的是数据值。
> * ② 如果是引用数据类型，`==` 比较的是对象的地址（只有两个字符串变量都指向字符串的常量对象时，才会返回 true ）。 

![](./assets/14.gif)

* 之前，我们可以通过 `==` 来判断字符串是否相等，如下所示：

```java
public class StringDemo {
    public static void main(String[] args) {  
        String s1 = "abc";
        String s2 = "bcd";
        System.out.println(s1 == s2); // false
  }
}
```

* 其在内存中的动态图，如下所示：

> [!NOTE]
>
> * ① 如果是基本数据类型，`==` 比较的是数据值。
> * ② 如果是引用数据类型，`==` 比较的是对象的地址（只有两个字符串变量都指向字符串的常量对象时，才会返回 true ）。 

![](./assets/15.gif)

* 但是，如果 String 创建的方式不一样，我们通过 `==` 来判断字符串是否相等，得到的结果可能并非我们所预期的（因为我们想要的是如果字符串内容相等，就认为是一样的），如下所示：

```java
public class StringDemo {
    public static void main(String[] args) {  
        String s1 = "abc";
        String s2 = new String("abc");
        System.out.println(s1 == s2); // false
  }
}
```

* 其在内存中的动态图，如下所示：

> [!NOTE]
>
> * ① 如果是基本数据类型，`==` 比较的是数据值。
> * ② 如果是引用数据类型，`==` 比较的是对象的地址（只有两个字符串变量都指向字符串的常量对象时，才会返回 true ）。 

![](./assets/16.gif)

### 4.5.2 字符串内容相等比较（区分大小写）

* 在 Java 中，字符串内容相等的比较需要使用 equals() 方法，并且 equals() 方法区分大小写。

```java
public boolean equals(Object anObject) { // [!code focus]
    if (this == anObject) {
        return true;
    }
    return (anObject instanceof String aString)
            && (!COMPACT_STRINGS || this.coder == aString.coder)
            && StringLatin1.equals(value, aString.value);
} // [!code focus]
```



* 示例：

```java
package com.github.demo;

public class StringDemo {
    public static void main(String[] args) {
        String s1 = "abc";
        String s2 = new String("abc");
        System.out.println(s1.equals(s2)); // true
    }
}
```

### 4.5.3 字符串内容相等比较（忽略大小写）

* 在 Java 中，字符串内容相等的比较（忽略大小写）需要使用 equalsIgnoreCase() 方法。

```java
public boolean equalsIgnoreCase(String anotherString) { // [!code focus]
    return (this == anotherString) ? true
            : (anotherString != null)
            && (anotherString.length() == length())
            && regionMatches(true, 0, anotherString, 0, length());
} // [!code focus]
```



* 示例：

```java
package com.github.demo;

public class StringDemo {
    public static void main(String[] args) {
        String s1 = "abc";
        String s2 = new String("Abc");
        System.out.println(s1.equalsIgnoreCase(s2)); // true
    }
}
```



* 示例：

```java
package com.github.demo;

import java.util.Scanner;

public class StringDemo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("请输入一个字符串："); // abc
        String str = input.next(); // new 出来的
        System.out.println("您输入的字符串是：" + str);
        String str2 = "abc";
        System.out.println(str == str2); // false
    }
}
```

### 4.5.4 应用示例（用户登录）

* 需求：已知正确的用户名和密码，请使用程序模拟用户登录。

> [!NOTE]
>
> 总共给 3 次试错机会，并且登录成功之后，需要给出相应的提示。



* 示例：

```java
import java.util.Scanner;

public class StringDemo2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // 正确的用户名和密码
        String rightUsername = "admin";
        String rightPassword = "123456";
        // 用户登录逻辑
        int count = 3;
        int originCount = count;
        do {
            System.out.print("请输入用户名：");
            String username = input.next();
            System.out.print("请输入密码：");
            String password = input.next();
            if (username.equals(rightUsername) 
                && password.equals(rightPassword)) {
                System.out.println("登录成功");
                break;
            }
            count--;
            if (count > 0) {
                System.out.println("登录失败，请重新输入，还剩下" + (count) + "次机会！");
            } else {
                System.out.println("登录失败，您已经输错" + originCount + "次了");
            }
        } while (count > 0);
    }
}
```

### 4.5.3 字符串内容大小比较（区分大小写）

