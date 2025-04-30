# 第一章：函数式编程

## 1.1 概述

* 2014 年 3 月，Oracle 推出了 JDK8 ，为我们带来了如下的特性：
  * ① `Lambda 表达式`：使得 Java 能够支持函数式编程。它允许我们以简洁的方式表达匿名函数，从而可以更灵活地处理集合、流等操作。
  * ② `Stream API` ：提供了一种通过声明性方式处理集合的手段。它支持函数式编程中的流式操作，可以通过流水线式的方式进行数据转换、过滤、聚合等操作。Stream API 让我们能够在不改变原数据的情况下，以更高效、更清晰的方式进行数据处理。
  * ③ `接口中新增默认方法和静态方法`：这样接口可以拥有实现，而不影响其实现类，即：避免了为接口添加新方法时破坏现有实现类的兼容性。
  * ④ `Optional 类`：容器类，其目的是更优雅地防止空指针异常（NullPointerException）。
  * ⑤ `新的日期时间 API`：ZoneId、Instant、DateTimeFormatter、LocalDateTime 等。
  * ⑥ `方法引用`：是 Lambda 表达式的一种简化形式，它可以引用已有的方法，而不需要显式地写出 Lambda 表达式。
* 其中，最为重要的特性就是`Lambda 表达式`和`Stream API`，极大地增强了 Java 对函数式编程范式的支持。

> [!NOTE]
>
> 函数式编程强调：
>
> - **不可变性**：避免使用可变的对象，通过值传递数据而不是通过引用传递。
> - **高阶函数**：函数可以作为参数传递，或者返回值。
> - **纯函数**：没有副作用，输出仅仅依赖于输入。

* 通过`Lambda 表达式`，Java 程序员可以编写更加简洁且具有表达力的代码。
* 与此同时，`Stream API`提供的流水线式数据处理，符合函数式编程的思想，强调通过组合小的函数来实现复杂的操作。
* `Optional`类的引入也是函数式编程中对`空指针异常`的优雅处理方式之一。

## 1.2 函数

### 1.2.1 什么是函数？

* 在初中，`函数`是这么定义的：在一个变化过程中有两个变量 x 和 y，对于 x 的每一个值，都有唯一的一个 y 值与之对应，我们称 y 是 x 的函数，其中 x 是自变量，y 是因变量。

![](./assets/1.jpeg)



* 在高中，`函数`是这么定义的：X、Y 是两个非空的数集，如果按照某种确定的对应关系 f，对于集合 X 的任意一个数 x ，在集合 Y 中都有唯一确定的 f(x) 和它对应，那么就称：X→Y 为从集合 X 到集合 Y 的一个函数，记作：y=f(x)，x∈X 。

![](./assets/2.png)

* 其实，`函数`就是`规则`（类似于机器或黑箱），给予输入值 x 便产生唯一的输出值 y 。

> [!NOTE]
>
> * 假设有这样的一组数据，如下所示：
>
> | 输入 x | 函数（规则，f） | 输出 y |
> | ------ | --------------- | ------ |
> | 1      | ?               | 3      |
> | 2      | ?               | 6      |
> | 3      | ?               | 9      |
> | ...    | ...             | ...    |
>
> * 那么，这组数据对应的规则就是 `y = f(x) = 3 * x` ，如下所示：
>
> | 输入 x | 函数（规则，f） | 输出 y |
> | ------ | --------------- | ------ |
> | 1      | 3 * 1           | 3      |
> | 2      | 3 * 2           | 6      |
> | 3      | 3 * 3           | 9      |
> | ...    | ...             | ...    |

![](./assets/3.png)

### 1.2.2 合格的函数

* 合格的函数：只要输入相同，无论多少次调用，无论什么时候调用，输出都相同（无副作用）。

> [!NOTE]
>
> * ① `相同的输入总是返回相同的输出`：无论什么时候调用这个函数，只要给定相同的输入，函数的输出一定的相同的，即：合格的函数（纯函数）不依赖于外部的状态或者可变的数据（可以依赖外部不可变的数据），函数的行为仅仅取决于其输入输出，如：`y = x * x`，只要 x = 2 ，y 就是 4 。
> * ② `没有副作用`： 副作用是指在函数执行过程中对外部世界的任何影响，如：修改全局变量、改变输入参数的值、进行输入输出操作（打印或文件写入）、修改文件或数据库状态等。合格的函数（纯函数）不能有这些副作用，它只能依赖输入并计算出结果，而不改变外部状态。

> [!CAUTION]
>
>  Java 中的`成员方法`也是合格的函数（纯函数）！！！



* 示例：合格的函数（纯函数）

```java
package com.github.lambda;

public class Test {
    public static void main(String[] args) {

        System.out.println(square(4)); // 16
        System.out.println(square(4)); // 16
        System.out.println(square(4)); // 16
        System.out.println(square(4)); // 16
        System.out.println(square(4)); // 16
        System.out.println(square(4)); // 16
        System.out.println(square(4)); // 16
        System.out.println(square(4)); // 16
        System.out.println(square(4)); // 16
    }

    /**
     * 合格的函数（纯函数）
     * @param x 输入
     * @return 输出
     */
    public static int square(int x) { // [!code highlight:3]
        return x * x;
    }
}
```



* 示例：不合格的函数

```java
package com.github.lambda;

public class Test {
    static final Buddha buddha = new Buddha("满天神佛");

    public static void main(String[] args) {
        System.out.println(pray("张三"));
        System.out.println(pray("张三"));
        System.out.println(pray("张三"));
        buddha.name = "魔王"; // [!code highlight]
        System.out.println(pray("张三"));
    }

    /**
     * 不合格的函数（有副作用），依赖于外部可变的数据
     * @param person 输入
     * @return 输出
     */
    static String pray(String person) { // [!code highlight:3]
        return person + "向【" + buddha.name + "】祈祷";
    }

    static class Buddha {

        String name; // [!code highlight]

        public Buddha(String name) {
            this.name = name;
        }
    }
}
```



* 示例：合格的函数（纯函数）

```java {10}
package com.github.lambda;

public class PureFunctionTest3 {
    static final Buddha buddha = new Buddha("满天神佛");

    public static void main(String[] args) {
        System.out.println(pray("张三"));
        System.out.println(pray("张三"));
        System.out.println(pray("张三"));
        // buddha.name = "魔王"; 
        System.out.println(pray("张三"));
    }

    /**
     * 合格的函数（没有副作用），不依赖于外部的状态或者可变的数据
     * 换言之，合格的函数（没有副作用）可以依赖于不可变的数据
     * @param person 输入
     * @return 输出
     */
    static String pray(String person) { // [!code highlight:3]
        return person + "向【" + buddha.name + "】祈祷";
    }

    static class Buddha {

        final String name; // [!code highlight]

        public Buddha(String name) {
            this.name = name;
        }
    }
}
```



* 示例：合格的函数

```java {7-8,11-12}
package com.github.lambda;

public class PureFunctionTest4 {

    public static void main(String[] args) {
        Student s1 = new Student("张三");
        System.out.println(s1.getName()); // 底层会这么执行 getName(s1)
        System.out.println(s1.getName()); // 底层会这么执行 getName(s1)

        Student s2 = new Student("张三");
        System.out.println(s2.getName()); // 底层会这么执行 getName(s2)
        System.out.println(s2.getName()); // 底层会这么执行 getName(s2)
    }

    static class Student {

        String name;

        public Student() {}

        public Student(String name) {
            this.name = name;
        }

        /**
         * 合格的函数（纯函数）
         */
        public String getName(Student this) { // [!code highlight:3]
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
```

### 1.2.3 有形的函数

#### 1.2.3.1 其它语言中有形的函数

* 在函数式编程中，`函数`是`头等公民`，即：`函数可以写到任意位置`，可以作为函数的形参、函数的返回值、赋值给某个变量甚至存储到数据结构（数组、Set、Map）中。

> [!NOTE]
>
> JavaScript 是一门支持函数式编程的计算机语言，即：在 JavaScript 中，函数也是头等公民！！！

* ① 函数可以被赋值给变量（函数表达式）

```js
let foo = function(){ // [!code highlight]
    console.log('foo 函数被执行了');
}

foo();
```

* ② 函数可以在变量之间来回传递：

```js
let foo = function(){ 
    console.log('foo 函数被执行了');
}

let bar = foo // [!code highlight]

bar();
```

* ③ 函数可以作为其它函数的形参：

```js
let foo = function(){ 
    console.log('foo 函数被执行了');
}

function biz(fn){ // [!code highlight]
    fn();
}

biz(foo);
```

* ④ 函数可以作为其它函数的返回值：

```js
let foo = function(){
    console.log('foo 函数被执行了');
}

function biz(){ 
    return foo; // [!code highlight]
}

const bar = biz()
bar();
```

* ⑤ 函数可以存储在其它数据结构中：

```js
let foo = function(){
    console.log('foo 函数被执行了');
}

let bar = function(){
    console.log('bar 函数被执行了');
}

let arr = [foo,bar] // [!code highlight]

arr[0]();
arr[1]();
```

* 其实，在 JavaScript 中，`函数`是一种特殊的`对象`，如下所示：

![](./assets/4.svg)



* 其内存图，如下所示：

![add 持有函数对象在堆内存中的引用地址，所以在 JavaScript 中函数可以写到任意位置！！！](./assets/5.svg)

> [!NOTE]
>
> 总结：函数的有形，就是让函数变为对象（持有对象的引用），这样函数就可以写到任意位置（让函数的规则传播）。

#### 1.2.3.2 Java 语言中有形的函数

* 在 JDK8 之前，Java 是一个纯粹的面向对象的编程语言。

> [!NOTE]
>
> 所谓的面向对象，就是先找对象，然后让对象帮我们做事情。

* 当调用一个方法的时候，如果方法的形参是一个接口，由于 Java 语法的限制，我们必须给这个方法传递这个接口的实现类对象或者匿名内部类（匿名内部类的对象）。
* ① 没有使用匿名内部类：

::: code-group

```java [Swim.java]
public interface Swim {

    void swimming();
}
```

```java [Student.java]
public class Student implements Swim {

    @Override
    public void swimming() {
        System.out.println("重写了 swimming 方法");
    }
}
```

```java [Test.java]
public class Test {
    public static void main(String[] args) {
        goSwimming(new Student());
    }
    
    // 定义一个方法,模拟请一些人去游泳
    public static void goSwimming(Swim s) {
        s.swimming();
    }
}
```

:::

* ② 使用匿名内部类：

::: code-group

```java [Swim.java]
public interface Swim {

    void swimming();
}
```

```java [Test.java]
public class Test {
    public static void main(String[] args) {
        Swim swim = new Swim() {
            @Override
            public void swimming() {
                System.out.println("重写了 swimming 方法");
            }
        }
        
        goSwimming(swim);
    }
    
    // 定义一个方法,模拟请一些人去游泳
    public static void goSwimming(Swim s) {
        s.swimming();
    }
}
```

:::

* 在 JDK8 之后，Java 引入了函数式编程的思想。

> [!NOTE]
>
> 所谓的函数式编程，忽略面向对象的复杂语法，强调做什么（对行为的抽象），而不是谁去做。

* 当调用一个方法的时候，如果方法的形参是一个接口，我们不再需要给这个方法传递这个接口的实现类对象或者匿名内部类（匿名内部类的对象），只需要传递`函数化对象`。

::: code-group

```java [Swim.java]
@FunctionalInterface 
public interface Swim {

    void swimming();
}
```

```java [Test.java]
public class Test {

    public static void main(String[] args) {

        // 函数化对象
        Swim swim = () -> System.out.println("重写了 swimming 方法");

        goSwimming(swim);
    }

    // 定义一个方法,模拟请一些人去游泳
    public static void goSwimming(Swim s) {
        s.swimming();
    }
}
```

:::

> [!NOTE]
>
> * ① 对于 JavaScript 而言，有形的函数，就是让函数变为对象（持有对象的引用），这样函数就可以写到任意位置（让函数的规则传播），即：JavaScript 从语法上就原生支持函数式编程。
> * ② 对于 Java 而言，有形的函数，也是让函数变为对象；但是，本质上是`实现了函数式接口（只有一个抽象方法的接口）的对象`，即：Java 从语法上只能有限支持函数式编程（必须依托于函数式接口）。
> * ③ 和 JavaScript 不同的是，在 Java 中，有形的函数必须依托于接口（函数式接口）而存在。

## 1.3 函数对象





# 第二章：函数编程语法

## 2.1 概述

* Lambda、方法引用、闭包、柯里化、高阶函数。







# 第三章：Stream API





# 第四章：实际应用

## 4.1 概述

* 统计（分析）、异步（处理）、框架（设计）、并行（计算）、（UI ）事件。





# 第五章：实现原理

## 5.1 概述

* Lambda、方法引用、闭包、可切分迭代器。











