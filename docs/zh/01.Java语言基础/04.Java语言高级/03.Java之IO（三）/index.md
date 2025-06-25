# 第一章：IO 流体系

## 1.1 概述

* 之前，我们已经学习过了 IO 流体系，如下所示：

```mermaid
classDiagram
    IO 流体系 <|-- 字节流 
    IO 流体系 <|-- 字符流 
    字节流 <|-- InputStream 
    字节流 <|-- OutputStream 
    字符流 <|-- Reader 
    字符流 <|-- Writer 
    InputStream <|-- FileInputStream :extends
    note for FileInputStream "基本流" 
    OutputStream <|-- FileOutputStream :extends
    note for FileOutputStream "基本流" 
    Reader <|-- FileReader :extends
    note for FileReader "基本流" 
    Writer <|-- FileWriter :extends
    note for FileWriter "基本流" 
    class InputStream{
        <<Abstract>>
    }
    class OutputStream{
        <<Abstract>>
    }
    class Reader{
        <<Abstract>>
    }
    class Writer{
        <<Abstract>>
    }

```

> [!NOTE]
>
> * ① 在实际开发中，我们经常使用最下面的四个流，即：`FileInputStream`、`FileOutputStream`、`FileReader` 以及 `FileWriter` 。
> * ② 上述的四个流是 IO 流体系中最基本、最常用的流，我们也称为基本流。

## 1.2 高级流

* 高级流就是对基本流进行了一层封装，额外增加了一些新的功能，如：基本流操作效率太慢，给它们增加缓冲区。

```mermaid
classDiagram
    IO 流体系 <|-- 字节流 
    IO 流体系 <|-- 字符流 
    字节流 <|-- InputStream 
    字节流 <|-- OutputStream 
    字符流 <|-- Reader 
    字符流 <|-- Writer 
    InputStream <|-- FileInputStream :extends
    note for FileInputStream "基本流" 
    InputStream <|-- BufferedInputStream :extends
    note for BufferedInputStream "高级流" 
    OutputStream <|-- FileOutputStream :extends
    note for FileOutputStream "基本流" 
    OutputStream <|-- BufferedOutputStream :extends
    note for BufferedOutputStream "高级流" 
    Reader <|-- FileReader :extends
    note for FileReader "基本流" 
    Reader <|-- BufferedReader :extends
    note for BufferedReader "高级流"
    Writer <|-- FileWriter :extends
    note for FileWriter "基本流" 
    Writer <|-- BufferedWriter :extends
    note for BufferedReader "高级流"
    class InputStream{
        <<Abstract>>
    }
    class OutputStream{
        <<Abstract>>
    }
    class Reader{
        <<Abstract>>
    }
    class Writer{
        <<Abstract>>
    }

```

* `字节流`的`基本流`是没有缓冲区的，而`字节流`的`缓冲流`提供了缓冲区，所以效率提升的很明显。
* `字符流`的`基本流`本来就有缓冲区，所以`字符流`的`缓冲流`的效率提升的并不是很明显；但是，字符流的缓冲流提供了几个好用的方法。



# 第二章：缓冲流

## 2.1 概述

* 对于`字节流`和`字符流`，Java 都提供了对应的`缓冲流`，每一种`缓冲流`又有`输入`和`输出`之分。

```mermaid
classDiagram
    缓冲流 <|-- 字节缓冲流
    缓冲流 <|-- 字符缓冲流
    字节缓冲流 <|-- BufferedInputStream :extends
    note for BufferedInputStream "字节缓冲输入流"
    字节缓冲流 <|-- BufferedOutputStream :extends
    note for BufferedOutputStream "字节缓冲输出流"
    字符缓冲流 <|-- BufferedReader :extends
    note for BufferedReader "字符缓冲输入流"
    字符缓冲流 <|-- BufferedWriter :extends
    note for BufferedWriter "字符缓冲输出流"
```

* 上述的四个流是`高级流`，是因为其需要依赖`基本流`，即：其是在基本流基础上增加了缓冲区。

::: code-group

```java [BufferedInputStream.java]
public class BufferedInputStream extends FilterInputStream {
    
    public BufferedInputStream(InputStream in) {
        this(in, DEFAULT_BUFFER_SIZE);
    }
    
    ...
}
```

```java [BufferedOutputStream.java]
public class BufferedOutputStream extends FilterOutputStream {
    
    public BufferedOutputStream(OutputStream out) {
        this(out, 8192);
    }
    
    ...
}
```

:::

::: code-group

```java [BufferedReader.java]
public class BufferedReader extends Reader {
    
	public BufferedReader(Reader in) {
        this(in, defaultCharBufferSize);
    }
    
    ...
}
```

```java [BufferedWriter.java]
public class BufferedWriter extends Writer {
    
    public BufferedWriter(Writer out) {
        this(out, defaultCharBufferSize);
    }
    
    ...
}
```

:::

## 2.2 字节缓冲流

### 2.2.1 概述

* `字节缓冲流`分为`字节缓冲输入流`和`字节缓冲输出流`。

```mermaid
classDiagram
    缓冲流 <|-- 字节缓冲流
    字节缓冲流 <|-- BufferedInputStream :extends
    note for BufferedInputStream "字节缓冲输入流"
    字节缓冲流 <|-- BufferedOutputStream :extends
    note for BufferedOutputStream "字节缓冲输出流"
```

* `字节缓冲流`提高性能的原因：在于底层自带了长度为 `8192` 的缓冲区。

> [!NOTE]
>
> 利用缓冲区一次可以读写 8192 了字节，减少了 IO 操作的次数，从而提高了性能！！！

::: code-group

```java [BufferedInputStream.java]
public class BufferedInputStream extends FilterInputStream {
    
    private static int DEFAULT_BUFFER_SIZE = 8192; // [!code highlight]
    
    protected volatile byte[] buf; // [!code highlight]
    
    public BufferedInputStream(InputStream in) {
        this(in, DEFAULT_BUFFER_SIZE); // [!code highlight]
    }
    
    public BufferedInputStream(InputStream in, int size) {
        super(in);
        if (size <= 0) {
            throw new IllegalArgumentException("Buffer size <= 0");
        }
        buf = new byte[size]; // [!code highlight]
    }
    
}
```

```java [BufferedOutputStream.java]
public class BufferedOutputStream extends FilterOutputStream {
    
    protected byte buf[]; // [!code highlight]
    
    public BufferedOutputStream(OutputStream out) {
        this(out, 8192); // [!code highlight]
    }
    
    public BufferedOutputStream(OutputStream out, int size) {
        super(out);
        if (size <= 0) {
            throw new IllegalArgumentException("Buffer size <= 0");
        }
        buf = new byte[size]; // [!code highlight]
    }
}
```

:::

### 2.2.2 常用 API

* 创建字节缓冲输入流或字节缓冲输入流的对象：

| 方法名称                                           | 描述                                       |
| -------------------------------------------------- | ------------------------------------------ |
| `public BufferedInputStream(InputStream in){}`     | 将基本流包装为高级流，提高了读取数据的性能 |
| `public BufferedOutputStream(OutputStream out) {}` | 将基本流包装为高级流，提高了写出数据的性能 |

* 写出数据或读取数据：

| 方法名称                                                     | 描述                                     |
| ------------------------------------------------------------ | ---------------------------------------- |
| `public void write(int b) throws IOException {}`             | 一次写一个字节的数据                     |
| `public void write(byte b[], int off, int len) throws IOException {}` | 一次写入一个字节数组的一部分             |
| `public int read() throws IOException {}`                    | 一次读取一个字节的数据                   |
| `public int read(byte b[]) throws IOException {}`            | 一次读取多个字节的数据，并尽量将数组装满 |

* 释放流：

| 方法名称                                    | 描述     |
| ------------------------------------------- | -------- |
| `public void close() throws IOException {}` | 释放资源 |

> [!NOTE]
>
> 只需要关闭最外层的高级流就可以了，内部的基本流会帮我们关闭！！！



* 示例：复制文件

::: code-group

```java [Test.java]
package com.github.io;

import java.io.*;

public class Test {
    public static void main(String[] args) throws IOException {
        // 创建字节缓冲流对象
        BufferedInputStream bis = new BufferedInputStream(
            new FileInputStream("d:\\a.txt"));
        BufferedOutputStream bos = new BufferedOutputStream(
            new FileOutputStream("d:\\b.txt"));

        // 复制文件
        int b;
        while ((b = bis.read()) != -1) {
            bos.write(b);
        }

        // 释放资源
        bos.close();
        bis.close();
    }

}
```

```md:img [cmd 控制台]
![](./assets/1.gif)
```

:::

### 2.2.3 原理

* 当我们在创建`字节缓冲输入流`对象的时候，如下所示：

```java
BufferedInputStream bis = new BufferedInputStream(
    new FileInputStream("d:\\a.txt"));
```

* 相当于 Java 程序（内存）和文件（数据源）之间建立了一个连接的通道：

> [!NOTE]
>
> * ① 在内存中开辟了一个长度为 8192 的字节数组（缓冲区）！！！
> * ② 真正从文件中读取数据的还是基本流 FileInputStream，其会从文件中读取数据，再交给字节缓冲输入流内部的缓冲区中。

![](./assets/2.svg)

* 当我们创建`字节缓冲输出流`对象的时候，如下所示：

```java
BufferedOutputStream bos = new BufferedOutputStream(
    new FileOutputStream("day23\\b.txt"));
```

* 相当于 Java 程序（内存）和文件（目的地）之间建立了一个连接的通道：

> [!NOTE]
>
> * ① 在内存中开辟了一个长度为 8192 的字节数组（缓冲区）！！！
> * ② 真正将数据写出到从文件中的还是基本流 FileOutputStream，会将数据写出到缓冲流的缓冲区中，然后将缓冲区中的数据刷新到文件中。

![](./assets/3.svg)

* 当我们通过循环对数据进行边读编写，如下所示：

```java
int b;
while ((b = bis.read()) != -1) {
    bos.write(b);
}
```

* 相当于内存中有一个临时变量 b，然后从`字节输入流`的缓冲区中将数据复制到临时变量中，再将临时变量中的数据复制到`字节输出流`的缓冲区中。

> [!NOTE]
>
> * ① 基本流会从文件中读取数据，一次性会读取 8192 个字节数据，并存放到字节缓冲输入流缓冲区中。
> * ② 中间变量 b ，就是在两个缓冲区之间不停地搬运数据。
> * ③ 当字节缓冲输出流缓冲区满了，就会将数据交给基本流，让其自动的将数据刷新到文件中。

![](./assets/4.gif)

### 2.2.4 综合练习

* 需求：测试下基本流和缓冲流的复制效率。



* 示例：

::: code-group

```java [Test.java]
package com.github.io;

import java.io.*;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

public class Test {
    public static void main(String[] args) throws IOException {
        File src = new File("D:\\ProPlus2021Retail.img");
        File dest = new File("D:\\ProPlus2021Retail-base.img");
        File dest2 = new File("D:\\ProPlus2021Retail-gender.img");

        System.out.println(copyFormBase(src, dest)); // 664
        System.out.println(copyFormGender(src, dest2)); // 117
    }

    public static long copyFormBase(File src, File dest) {
        Instant start = Instant.now();
        try (
                InputStream fis = new FileInputStream(src);
                OutputStream fos = new FileOutputStream(dest)) {
            byte[] buffer = new byte[1024];
            int len;
            while ((len = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, len);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        Instant end = Instant.now();
        return ChronoUnit.MILLIS.between(start, end);
    }


    public static long copyFormGender(File src, File dest) {
        Instant start = Instant.now();
        try (
                BufferedInputStream bis = new BufferedInputStream(
                    new FileInputStream(src));
                BufferedOutputStream bos = new BufferedOutputStream(
                    new FileOutputStream(dest))) {
            byte[] buffer = new byte[1024];
            int len;
            while ((len = bis.read(buffer)) != -1) {
                bos.write(buffer, 0, len);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        Instant end = Instant.now();
        return ChronoUnit.MILLIS.between(start, end);
    }

}
```

```md:img [cmd 控制台]
```



:::



# 第三章：转换流





# 第四章：序列化流







# 第五章：打印流







# 第六章：压缩流和解压缩流









# 第七章：常用工具包

## 7.1 概述



