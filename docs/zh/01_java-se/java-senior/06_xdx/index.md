# 第一章：实际应用（⭐）

## 1.1 概述

* 在 Java 中，函数式编程可以用于以下场景：
  * ① `数据统计分析`：Stream API 大展身手，允许以声明式的方式对集合进行操作（过滤、映射、归约等），非常适合用于数据处理和统计分析。
  * ② `异步处理`：`CompletableFuture` 提供了一种非阻塞、链式调用的方式来处理异步任务，是 Java 并发编程中函数式思想的典范。
  * ③ `框架设计`：函数对象齐上阵，可以让框架的扩展性更好，可以让框架的设计更优雅。
  * ④ 并行计算：通过 `parallelStream()` 或 `ForkJoinPool` 结合函数式编程，可以方便地实现并行计算，提高大数据量下的性能。
  * ⑤ UI 事件：在 Swing、JavaFX 等 GUI 框架中，可以利用 Lambda 表达式简化事件监听器的编写。


## 1.2 准备工作

* 本次将采用 Maven 作为构建工具，并使用 jackson 以及 lombok 技术，其依赖信息，如下所示：

```xml
<dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.13.2</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.openjdk.jmh</groupId>
        <artifactId>jmh-core</artifactId>
        <version>1.35</version>
    </dependency>
    <dependency>
        <groupId>org.openjdk.jmh</groupId>
        <artifactId>jmh-generator-annprocess</artifactId>
        <version>1.35</version>
        <scope>provided</scope>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-core</artifactId>
        <version>2.19.0</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.19.0</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-annotations</artifactId>
        <version>2.19.0</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.module</groupId>
        <artifactId>jackson-module-jaxb-annotations</artifactId>
        <version>2.19.0</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.dataformat</groupId>
        <artifactId>jackson-dataformat-csv</artifactId>
        <version>2.19.0</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.datatype</groupId>
        <artifactId>jackson-datatype-jsr310</artifactId>
        <version>2.19.0</version> 
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.30</version>
        <scope>provided</scope>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <configuration>
                <annotationProcessorPaths>
                    <path>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok</artifactId>
                        <version>1.18.38</version>
                    </path>
                </annotationProcessorPaths>
                <source>17</source>
                <target>17</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

* 项目的结构，如下所示：

```txt
├─📁 src/
│ ├─📁 main/
│ │ └─📁 java/
│ │   └─📁 com/
│ │     └─📁 github/
│ │       └─📁 domain/
│ │         ├─📄 CsvReader.java
│ │         └─📄 CsvRecord.java
│ └─📁 test/
│   ├─📁 java/
│   │ └─📁 com/
│   │   └─📁 github/
│   │     └─📄 LambdaTest.java
│   └─📁 resources/
│     └─📄 data.csv
├─📄 .gitignore
└─📄 pom.xml
```

> [!NOTE]
>
> * ① 由于 data.csv 的数据量太大，我放在云盘中，地址在[这里](https://drive.google.com/file/d/1ioMX_zRpyN2HlbMRZBHX5p7gKd6HU4ws/view?usp=drive_link)，需要科学上网！！！
> * ② `CsvRecord` 是 JavaBean，和 data.csv 中的数据一一对应。
> * ③ `CsvReader` 是一个工具类，提供了 readCsvFile() 方法，用来解析 data.csv 并将数据封装到 `Stream<CsvRecord>`。
> * ④ `LambdaTest`是一个测试类，`数据统计分析`的相关代码都在其中。

* 其中，CsvRecord.java 的源码，如下所示：

```java
package com.github.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@JsonPropertyOrder(value = {"id", "event_time",
        "order_id", "product_id",
        "category_id", "category_code",
        "brand", "price",
        "user_id", "age",
        "sex", "local"})
public class CsvRecord {

    private String id;

    @JsonProperty("event_time")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss z")
    private LocalDateTime eventTime;

    @JsonProperty("order_id")
    private String orderId;

    @JsonProperty("product_id")
    private String productId;

    @JsonProperty("category_id")
    private String categoryId;

    @JsonProperty("category_code")
    private String categoryCode;

    private String brand;
    private double price;

    @JsonProperty("user_id")
    private String userId;

    private double age;
    private String sex;
    private String local;

}
```

* 其中，CsvRecord.java 的源码，如下所示：

```java
package com.github.domain;


import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvParser;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import java.io.FileReader;
import java.io.Reader;
import java.nio.file.Path;
import java.util.Objects;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

public class CsvReader {

    public static Stream<CsvRecord> readCsvFile() throws Exception {
        final CsvMapper mapper = new CsvMapper();
        mapper.registerModule(new JavaTimeModule());
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.enable(CsvParser.Feature.SKIP_EMPTY_LINES);
        mapper.disable(CsvParser.Feature.TRIM_SPACES);
        CsvSchema schema = mapper.schemaFor(CsvRecord.class).withHeader();
        Reader reader = new FileReader(Path
                .of(
                        Objects
                                .requireNonNull(CsvReader.class
                                        .getClassLoader()
                                        .getResource("data.csv"))
                                .toURI())
                .toFile());
        MappingIterator<CsvRecord> iterator =
                mapper.readerFor(CsvRecord.class).with(schema).readValues(reader);

        // 将 MappingIterator 转换为 Stream
        Spliterator<CsvRecord> spliterator =
                Spliterators.spliteratorUnknownSize(iterator, Spliterator.ORDERED);

        return StreamSupport
                .stream(spliterator, false)
                .onClose(() -> {
                    try {
                        reader.close();
                    } catch (Exception ignored) {}
                });
    }
}
```

* 其中，LambdaTest 的源码，如下所示：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testCount() {
        long count = stream.count();

        System.out.println("count = " + count);
    }

}
```

## 1.3 数据统计分析

### 1.3.1 统计每个月的销售量

* 需求：





# 第二章：实现原理

## 2.1 概述

* Lambda、方法引用、闭包、可切分迭代器。
