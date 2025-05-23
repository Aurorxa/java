# 第一章：实际应用（⭐）

## 1.1 概述

* 在 Java 中，函数式编程可以用于以下场景：
  * ① `数据统计分析`：Stream API 大展身手，允许以声明式的方式对集合进行操作（过滤、映射、归约等），非常适合用于数据处理和统计分析。
  * ② `异步处理`：`CompletableFuture` 提供了一种非阻塞、链式调用的方式来处理异步任务，是 Java 并发编程中函数式思想的典范。
  * ③ `框架设计`：函数对象齐上阵，可以让框架的扩展性更好，可以让框架的设计更优雅。
  * ④ 并行计算：通过 `parallelStream()` 或 `ForkJoinPool` 结合函数式编程，可以方便地实现并行计算，提高大数据量下的性能。
  * ⑤ UI 事件：在 Swing、JavaFX 等 GUI 框架中，可以利用 Lambda 表达式简化事件监听器的编写。

## 1.2 数据统计分析

### 1.2.1 准备工作

* 采用 Maven 作为构建工具，并使用 jackson 以及 lombok 等技术，其依赖信息，如下所示：

```xml
<dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.13.2</version>
        <scope>test</scope>
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
    <dependency>
    	<groupId>ch.qos.logback</groupId>
    	<artifactId>logback-core</artifactId>
    	<version>1.5.18</version>
	</dependency>
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-api</artifactId>
        <version>2.0.17</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>ch.qos.logback</groupId>
        <artifactId>logback-classic</artifactId>
        <version>1.5.18</version>
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
│   └─📁 resources/
│      └─📄 logback.xml
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
> * ① 由于`data.csv`的数据量太大，我放在云盘中，地址在[这里](https://drive.google.com/file/d/1ioMX_zRpyN2HlbMRZBHX5p7gKd6HU4ws/view?usp=drive_link)，需要科学上网！！！
> * ② `CsvRecord`是 JavaBean，和`data.csv`中的数据一一对应。
> * ③ `CsvReader`是一个工具类，提供了`readCsvFile()`方法，用来解析`data.csv`并将数据封装到 `Stream<CsvRecord>`。
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
@JsonPropertyOrder(value = {
        "id", "event_time",
        "order_id", "product_id",
        "category_id", "category_code",
        "brand", "price",
        "user_id", "age",
        "sex", "local"
})
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

* 其中，logback.xml 的源码，如下所示：

```xml
<configuration debug="true">
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <root level="INFO">
        <appender-ref ref="STDOUT" />
    </root>
</configuration>
```

### 1.2.2 统计每个月的销量

* 需求：统计每个月的销量

```txt
1970-01 的订单数是：1307
2020-01 的订单数是：14270
2020-02 的订单数是：17995
2020-03 的订单数是：18688
2020-04 的订单数是：11868
2020-05 的订单数是：40334
2020-06 的订单数是：41364
2020-07 的订单数是：76418
2020-08 的订单数是：100007
2020-09 的订单数是：70484
2020-10 的订单数是：104063
2020-11 的订单数是：66060
```

> [!NOTE]
>
> 思路：根据`月份`进行分组，并通过下游收集器`Collectors.counting()`进行求和。



* 示例：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testAnalyzeOrderByMonth() {
        Map<String, Long> map = stream.collect(Collectors.groupingBy(
                (csv) -> {
                    LocalDateTime eventTime = csv.getEventTime();
                    return YearMonth.from(eventTime).toString();
                },
                TreeMap::new,
                Collectors.counting()));

        map.forEach((key, value) -> System.out.println(key + " 的订单数是：" + value));
    }

}
```

### 1.2.3 统计销量最高的月份

* 需求：统计销量最高的月份

```txt
2020-10 的订单数是：104063
```

> [!NOTE]
>
> 思路：
>
> * ① 先根据`月份`进行分组统计，求每个月的销量。
> * ② 对结果 `Map<String,Long>` 进行操作，获取最大值。



* 示例：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.Comparator;
import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testAnalyzeMaxOrderByMonth() {
        // 先根据月份分组统计，获取 月份 -- 个数
        Map<String, Long> map = stream.collect(Collectors.groupingBy(
                (csv) -> {
                    LocalDateTime eventTime = csv.getEventTime();
                    return YearMonth.from(eventTime).toString();
                },
                Collectors.counting()));

       // 对 Map 进行排序，获取最大值
       Optional<Map.Entry<String, Long>> optional = map
                .entrySet()
                .stream()
                // .max(Comparator.comparingLong(Map.Entry::getValue));
                .max(Map.Entry.comparingByValue());

        optional.ifPresent(me -> System.out.println(me.getKey() + " 的订单数是：" + me.getValue()));
    }

}
```

### 1.2.4 统计销量最高的商品

* 需求：统计销量最高的商品

```txt
1515966223517846928 的订单数是：2746
```

> [!NOTE]
>
> 思路：
>
> * ① 先根据`商品`（productId）进行分组统计，求每个商品的销量。
> * ② 对结果 `Map<String,Long>` 进行操作，获取最大值。



* 示例：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testAnalyzeMaxOrderByProduct() {
        // 先根据 productId 分组统计，获取 productId -- 个数
        Map<String, Long> map = stream.collect(Collectors.groupingBy(
                CsvRecord::getProductId,
                Collectors.counting()));

        // 对 Map 进行排序，获取最大值
        Optional<Map.Entry<String, Long>> optional = map
                .entrySet()
                .stream()
                // .max(Comparator.comparingLong(Map.Entry::getValue));
                .max(Map.Entry.comparingByValue());

        optional.ifPresent(me -> System.out.println(me.getKey() + " 的订单数是：" + me.getValue()));
    }

}
```

### 1.2.5 统计下单最多的前 10 名用户

* 需求：统计下单最多的前 10 名用户

```txt
1.515915625512423e+18 的订单数是：1092
1.5159156255121183e+18 的订单数是：1073
1.515915625512378e+18 的订单数是：1040
1.515915625512377e+18 的订单数是：1028
1.5159156255136955e+18 的订单数是：1002
1.515915625512422e+18 的订单数是：957
1.515915625513446e+18 的订单数是：957
1.515915625513447e+18 的订单数是：928
1.515915625514598e+18 的订单数是：885
1.5159156255147195e+18 的订单数是：869
```

> [!NOTE]
>
> 思路：
>
> * ① 先根据`用户`（userId）进行分组统计，求每个用户的订单数。
> * ② 对结果 `Map<String,Long>` 排序，获取下单最多的前 10 名用户。



* 示例：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testAnalyzeMaxOrderByUserTop10() {
        // 先根据 userId 分组统计，获取 userId -- 个数
        Map<String, Long> map = stream.collect(Collectors.groupingBy(
                CsvRecord::getUserId,
                Collectors.counting()));

        // 对 使用 LinkedHashMap 收集，会自动保持排序
        Map<String, Long> me = map
                .entrySet()
                .stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .limit(10)
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (oldVal, newVal) -> oldVal,
                        LinkedHashMap::new
                ));

        me.forEach((key,value)-> System.out.println(key + " 的订单数是：" + value));
    }

}
```

### 1.2.6 统计每个地区下单最多的用户

* 需求：统计每个地区下单最多的用户

```txt
地区：上海，下单最多的用户id：1.5159156255127636e+18，订单数是：634 
地区：广东，下单最多的用户id：1.515915625512377e+18，订单数是：1028 
地区：天津，下单最多的用户id：1.5159156255120858e+18，订单数是：530 
地区：四川，下单最多的用户id：1.5159156255121551e+18，订单数是：572 
地区：浙江，下单最多的用户id：1.5159156255121183e+18，订单数是：564 
地区：重庆，下单最多的用户id：1.515915625512764e+18，订单数是：632 
地区：湖北，下单最多的用户id：1.5159156255121183e+18，订单数是：509 
地区：湖南，下单最多的用户id：1.5159156255120548e+18，订单数是：545 
地区：江苏，下单最多的用户id：1.5159156255122386e+18，订单数是：551 
地区：海南，下单最多的用户id：1.5159156255121178e+18，订单数是：556 
地区：北京，下单最多的用户id：1.5159156255128172e+18，订单数是：584 
```

> [!NOTE]
>
> 思路：
>
> * ① 根据`地区`分组，再根据`用户`分组，获取每个地区每个用户下单的订单数。
> * ② 对每个地区每个用户下单的订单数求最大值。



* 示例：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testAnalyzeMaxOrderByArea() {
        // 根据地区分组，再根据用户分组，获取每个地区每个用户的订单数
        Map<String, Map<String, Long>> map = stream.collect(Collectors.groupingBy(
                CsvRecord::getLocal,
                Collectors.groupingBy(CsvRecord::getUserId, Collectors.counting())));

        // 对每个地区用户的订单数求最大值
        Map<String, Optional<Map.Entry<String, Long>>> resultMap = map
                .entrySet()
                .stream()
                .map(
                        e -> Map.entry(e.getKey(),
                                e.getValue().entrySet().stream().max(Map.Entry.comparingByValue()))
                )
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        // 遍历 Map
        resultMap.forEach((area, entry) -> {
            Map.Entry<String, Long> m = entry.orElse(new AbstractMap.SimpleEntry<>("", 0L));
            System.out.printf("地区：%s，下单最多的用户id：%s，订单数是：%s \n", area, m.getKey(), m.getValue());
        });
    }

}
```

### 1.2.7 统计每个地区下单最多的前 3 名用户

* 需求：统计每个地区下单最多的前 3 名用户

```txt
地区：上海
下单最多的前 3 名信息：
用户id：1.5159156255127636e+18，订单数：634
用户id：1.515915625512118e+18，订单数：583
用户id：1.515915625512422e+18，订单数：561
--------------------------------------------
地区：广东
下单最多的前 3 名信息：
用户id：1.515915625512377e+18，订单数：1028
用户id：1.5159156255121544e+18，订单数：572
用户id：1.5159156255120845e+18，订单数：571
--------------------------------------------
地区：天津
下单最多的前 3 名信息：
用户id：1.5159156255120858e+18，订单数：530
用户id：1.5159156255122383e+18，订单数：504
用户id：1.5159156255123333e+18，订单数：481
--------------------------------------------

...
```



* 示例：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testAnalyzeMaxOrderByAreaTop3() {
        // 根据地区分组，再根据用户分组，获取每个地区每个用户的订单数
        Map<String, Map<String, Long>> map = stream.collect(Collectors.groupingBy(
                CsvRecord::getLocal,
                Collectors.groupingBy(CsvRecord::getUserId, Collectors.counting())));

        // 对每个地区用户的订单数求前 3 名
        Map<String, List<Map.Entry<String, Long>>> resultMap = map
                .entrySet()
                .stream()
                .map(e -> 
                     Map.entry(e.getKey(),
                                e.getValue().entrySet().stream()
                                   .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                                        .limit(3)
                                        .collect(Collectors.toList()))
                )
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        // 遍历 Map
        resultMap.forEach((area, list) -> {
            System.out.println("地区：" + area);
            System.out.println("下单最多的前 3 名信息：");
            list.forEach((e) -> {
                final String key = e.getKey();
                final Long value = e.getValue();
                System.out.println("用户id：" + key + "，订单数：" + value);
            });

            System.out.println("--------------------------------------------");
        });
    }

}
```

### 1.2.8 统计每个类别的销量

* 需求：统计每个类别的销量

```txt
accessories.bag 的订单数是：3063
accessories.umbrella 的订单数是：33
apparel.costume 的订单数是：2
apparel.glove 的订单数是：1942
apparel.shirt 的订单数是：235
apparel.shoes 的订单数是：2
apparel.sock 的订单数是：21
apparel.trousers 的订单数是：99
apparel.tshirt 的订单数是：372
appliances.environment.air_conditioner 的订单数是：7379
appliances.environment.air_heater 的订单数是：2599
appliances.environment.climate 的订单数是：101
appliances.environment.fan 的订单数是：3855
appliances.environment.vacuum 的订单数是：15971
appliances.environment.water_heater 的订单数是：3644

....
```



* 示例：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testAnalyzeOrderByCategoryCode() {
        // 先根据 categoryCode 分组统计，获取 categoryCode -- 个数
        Map<String, Long> map = stream
                .filter(csv -> !csv
                        .getCategoryCode()
                        .isEmpty())
                .collect(Collectors.groupingBy(
                        CsvRecord::getCategoryCode,
                        TreeMap::new,
                        Collectors.counting()));

        map.forEach((key, value) -> System.out.println(key + " 的订单数是：" + value));
    }

}
```

### 1.2.9 统计第一类别的销量

* 需求：统计第一类别的销量

```txt
accessories 的订单数是：3096
apparel 的订单数是：2673
appliances 的订单数是：150244
auto 的订单数是：1367
computers 的订单数是：76840
construction 的订单数是：3984
country_yard 的订单数是：202
electronics 的订单数是：157585
furniture 的订单数是：24572
kids 的订单数是：2304
medicine 的订单数是：1106
sport 的订单数是：896
stationery 的订单数是：8865
```



* 示例：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testAnalyzeOrderByCategoryCode() {
        Map<String, Long> map = stream
                .filter(csv -> !csv
                        .getCategoryCode()
                        .isEmpty())
                .collect(Collectors.groupingBy(
                        (csv)-> {
                            final String categoryCode = csv
                                    .getCategoryCode();
                            final int index = categoryCode
                                    .indexOf(".");
                            return categoryCode.substring(0, index);
                        },
                        TreeMap::new,
                        Collectors.counting()));

        map.forEach((key, value) -> System.out.println(key + " 的订单数是：" + value));
    }

}
```

### 1.2.10 按价格区间统计销量

* 需求：按照价格区间统计销量

```txt
[0,100) 的订单数是：291585
[100,500) 的订单数是：203863
[1000,+∞) 的订单数是：14514
[500,1000) 的订单数是：52857
```



* 示例：

```java
package com.github;

import com.github.domain.CsvReader;
import com.github.domain.CsvRecord;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LambdaTest {

    private Stream<CsvRecord> stream;

    @Before
    public void before() throws Exception {
        stream = CsvReader.readCsvFile();
    }

    @Test
    public void testAnalyzeInterval() {

        Map<String, Long> map = stream
                .filter(csv->csv.getPrice() > 0)
                .collect(Collectors.groupingBy(
                        (csv)->getPriceRangeLabel(csv.getPrice()),
                        TreeMap::new,
                        Collectors.counting()));

        map.forEach((key, value) -> System.out.println(key + " 的订单数是：" + value));
    }

    private static String getPriceRangeLabel(double price) {
        if (price < 100) return "[0,100)";
        else if (price < 500) return "[100,500)";
        else if (price < 1000) return "[500,1000)";
        else return "[1000,+∞)";
    }

}
```

## 1.3 异步处理

### 1.3.1 概述

* 在 Java 中进行`异步处理` ，是构建高性能、响应式应用的重要手段。
* 它允许程序在不阻塞主线程的情况下执行耗时任务（网络请求、数据库查询等），从而提高并发能力和用户体验。

### 1.3.2 问题演示

* 需求：目前有个耗时较长的月度分析的方法，希望执行的时候，不要影响其它任务的执行。

::: code-group

```java [ExecutorTest.java]
package com.async;

import com.github.domain.CsvReader;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

@Slf4j
public class ExecutorTest {

    /**
     * 月度分析（非常耗时）
     */
    public static void monthAnalysis() throws Exception {
        Map<String, Long> map = CsvReader
                .readCsvFile()
                .collect(Collectors.groupingBy(
                        (csv) -> {
                            LocalDateTime eventTime = csv.getEventTime();
                            return YearMonth
                                    .from(eventTime)
                                    .toString();
                        },
                        TreeMap::new,
                        Collectors.counting()));

        map.forEach((key, value) -> log.info("{} 的订单数是：{}", key, value));
    }

    public static void main(String[] args) throws Exception {
        log.info("开始统计");
        monthAnalysis(); // [!code highlight]
        log.info("执行其它操作...");
    }

}
```

```txt [cmd 控制台]
15:23:01.552 [main] INFO  com.async.ExecutorTest - 开始统计
15:23:03.114 [main] INFO  com.async.ExecutorTest - 1970-01 的订单数是：1307
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-01 的订单数是：14270
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-02 的订单数是：17995
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-03 的订单数是：18688
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-04 的订单数是：11868
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-05 的订单数是：40334
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-06 的订单数是：41364
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-07 的订单数是：76418
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-08 的订单数是：100007
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-09 的订单数是：70484
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-10 的订单数是：104063
15:23:03.115 [main] INFO  com.async.ExecutorTest - 2020-11 的订单数是：66060
15:23:03.115 [main] INFO  com.async.ExecutorTest - 执行其它操作...
```

:::

> [!NOTE]
>
> 从日志的结果来看，`月度分析`和`其它任务`都跑在主线程（单线程，同步操作），`月度分析`必然会阻塞`其它任务`的执行。

* 我们可以使用多线程来改进，如下所示：

::: code-group

```java [ExecutorTest.java]
package com.async;

import com.github.domain.CsvReader;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

@Slf4j
public class ExecutorTest {

    /**
     * 月度分析（非常耗时）
     */
    public static void monthAnalysis() throws Exception {
        Map<String, Long> map = CsvReader
                .readCsvFile()
                .collect(Collectors.groupingBy(
                        (csv) -> {
                            LocalDateTime eventTime = csv.getEventTime();
                            return YearMonth
                                    .from(eventTime)
                                    .toString();
                        },
                        TreeMap::new,
                        Collectors.counting()));

        map.forEach((key, value) -> log.info("{} 的订单数是：{}", key, value));
    }

    public static void main(String[] args) throws Exception {
        log.info("开始统计");
        new Thread(()->{ // [!code highlight:7]
            try {
                monthAnalysis();
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }).start();
        log.info("执行其它操作...");
    }

}
```

```txt [cmd 控制台]
15:26:54.481 [main] INFO  com.async.ExecutorTest - 开始统计
15:26:54.483 [main] INFO  com.async.ExecutorTest - 执行其它操作...
15:26:55.858 [Thread-0] INFO  com.async.ExecutorTest - 1970-01 的订单数是：1307
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-01 的订单数是：14270
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-02 的订单数是：17995
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-03 的订单数是：18688
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-04 的订单数是：11868
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-05 的订单数是：40334
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-06 的订单数是：41364
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-07 的订单数是：76418
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-08 的订单数是：100007
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-09 的订单数是：70484
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-10 的订单数是：104063
15:26:55.859 [Thread-0] INFO  com.async.ExecutorTest - 2020-11 的订单数是：66060
```

:::

> [!NOTE]
>
> * ① 使用了多线程技术，让`月度分析`的耗时操作跑在单独的线程上，这样就不会阻塞`其它任务`的执行！！！
> * ② 但是上述的方案，虽然简单易用；但是，不适合复杂的任务，并且线程管理困难，资源浪费大（如果类似`月度分析`的耗时操作有 10000 个，难道在程序中开辟 10000 个线程来处理这些耗时的操作？）。

### 1.3.3 线程池

* 我们可以利用线程池来管理线程资源，以便提供性能和可维护性：

::: code-group

```java [ExecutorTest.java]
package com.async;

import com.github.domain.CsvReader;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.Map;
import java.util.TreeMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

@Slf4j
public class ExecutorTest {

    /**
     * 月度分析（非常耗时）
     */
    public static void monthAnalysis() throws Exception {
        Map<String, Long> map = CsvReader
                .readCsvFile()
                .collect(Collectors.groupingBy(
                        (csv) -> {
                            LocalDateTime eventTime = csv.getEventTime();
                            return YearMonth
                                    .from(eventTime)
                                    .toString();
                        },
                        TreeMap::new,
                        Collectors.counting()));

        map.forEach((key, value) -> log.info("{} 的订单数是：{}", key, value));
    }

    public static void main(String[] args) throws Exception {
        ExecutorService executorService = null;
        try {
            executorService = Executors.newFixedThreadPool(3); // [!code highlight:17]
            log.info("开始统计");
            executorService.submit(() -> { // 只有提交的任务，才会被线程池管理
                try {
                    monthAnalysis();
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
            executorService.submit(() -> { // 只有提交的任务，才会被线程池管理
                try {
                    monthAnalysis();
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
            log.info("执行其它操作...");
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            if (null != executorService) {
                executorService.shutdown();
            }
            try {
                if (!Objects
                        .requireNonNull(executorService)
                        .awaitTermination(5, TimeUnit.SECONDS)) {
                    executorService.shutdownNow(); // 超时后强制关闭
                }
            } catch (InterruptedException ie) {
                Objects
                        .requireNonNull(executorService)
                        .shutdownNow(); // 捕获中断异常后强制关闭
                Thread.currentThread().interrupt(); // 重新设置中断标志
            }
        }
    }

}
```

```txt [cmd 控制台]
15:55:53.509 [main] INFO  com.async.ExecutorTest - 开始统计
15:55:53.510 [main] INFO  com.async.ExecutorTest - 执行其它操作...
15:55:55.111 [pool-1-thread-2] INFO  com.async.ExecutorTest - 1970-01 的订单数是：1307
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-01 的订单数是：14270
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-02 的订单数是：17995
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-03 的订单数是：18688
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-04 的订单数是：11868
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-05 的订单数是：40334
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-06 的订单数是：41364
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-07 的订单数是：76418
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-08 的订单数是：100007
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-09 的订单数是：70484
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-10 的订单数是：104063
15:55:55.112 [pool-1-thread-2] INFO  com.async.ExecutorTest - 2020-11 的订单数是：66060
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 1970-01 的订单数是：1307
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-01 的订单数是：14270
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-02 的订单数是：17995
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-03 的订单数是：18688
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-04 的订单数是：11868
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-05 的订单数是：40334
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-06 的订单数是：41364
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-07 的订单数是：76418
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-08 的订单数是：100007
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-09 的订单数是：70484
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-10 的订单数是：104063
15:55:55.115 [pool-1-thread-1] INFO  com.async.ExecutorTest - 2020-11 的订单数是：66060
```

:::

> [!NOTE]
>
> * ① 使用了线程池技术，让`月度分析`的耗时操作跑在单独的线程上，这样就不会阻塞`其它任务`的执行（线程复用，资源可控）！！！
> * ② 但是，需要手动关闭线程池，如果`月度分析`的耗时操作有返回值，是无法直接获取的（除非配合 Future）。

### 1.3.3 线程池

* 我们可以使用`线程池 + Callable + Future`配合使用，以便将来可以获取异步任务结果。

::: code-group

```java [ExecutorTest.java]
package com.async;

import com.github.domain.CsvReader;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.Map;
import java.util.Objects;
import java.util.TreeMap;
import java.util.concurrent.*;
import java.util.stream.Collectors;

@Slf4j
public class ExecutorTest {

    /**
     * 月度分析（非常耗时）
     */
    public static Map<String, Long> monthAnalysis() throws Exception {
        Map<String, Long> map = CsvReader
                .readCsvFile()
                .collect(Collectors.groupingBy(
                        (csv) -> {
                            LocalDateTime eventTime = csv.getEventTime();
                            return YearMonth
                                    .from(eventTime)
                                    .toString();
                        },
                        TreeMap::new,
                        Collectors.counting()));

        log.info("{}", map.size());
        return map; // [!code highlight]
    }

    public static void main(String[] args) throws Exception {
        ExecutorService executorService = null;
        try {
            executorService = Executors.newFixedThreadPool(3);
            log.info("开始统计");
            final Future<Map<String, Long>> submitFuture1 = executorService.submit(() -> { // [!code highlight]
                try {
                    return monthAnalysis(); // [!code highlight]
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
            final Future<Map<String, Long>> submitFuture2 = executorService.submit(() -> { // [!code highlight]
                try {
                    return monthAnalysis(); // [!code highlight]
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
            log.info("执行其它操作...");
            try {
                // 阻塞等待任务完成
                final Map<String, Long> map1 = submitFuture1.get(); // [!code highlight]
                log.info("{}", map1.size());
            } catch (ExecutionException e) {
                System.err.println("任务执行异常: " + e
                        .getCause()
                        .getMessage());
            }
            try {
                // 阻塞等待任务完成
                final Map<String, Long> map2 = submitFuture2.get(); // [!code highlight]
                log.info("{}", map2.size());
            } catch (ExecutionException e) {
                System.err.println("任务执行异常: " + e
                        .getCause()
                        .getMessage());
            }
			log.info("执行其它操作2..."); // [!code highlight]
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            if (null != executorService) {
                executorService.shutdown();
            }
            try {
                if (!Objects
                        .requireNonNull(executorService)
                        .awaitTermination(5, TimeUnit.SECONDS)) {
                    executorService.shutdownNow(); // 超时后强制关闭
                }
            } catch (InterruptedException ie) {
                Objects
                        .requireNonNull(executorService)
                        .shutdownNow(); // 捕获中断异常后强制关闭
                Thread
                        .currentThread()
                        .interrupt(); // 重新设置中断标志
            }
        }
    }

}

```

```txt [cmd 控制台]
16:17:42.068 [main] INFO  com.async.ExecutorTest - 开始统计
16:17:42.070 [main] INFO  com.async.ExecutorTest - 执行其它操作...
16:17:43.735 [pool-1-thread-2] INFO  com.async.ExecutorTest - 12
16:17:43.741 [pool-1-thread-1] INFO  com.async.ExecutorTest - 12
16:17:43.742 [main] INFO  com.async.ExecutorTest - 12
16:17:43.742 [main] INFO  com.async.ExecutorTest - 12
16:17:43.742 [main] INFO  com.async.ExecutorTest - 执行其它操作2...
```

:::

> [!NOTE]
>
> * ① 使用`线程池 + Callable + Future`配合使用，我们可以在将来可以获取异步任务结果。
> * ② `Future`对象的`get()`是阻塞方法，无法灵活处理多个异步任务。

### 1.3.4 CompletableFuture（推荐）





## 1.4 框架设计





## 1.5 并行计算





## 1.6 UI  设计











# 第二章：实现原理

## 2.1 概述

* Lambda、方法引用、闭包、可切分迭代器。
