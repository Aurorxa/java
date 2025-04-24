> [!IMPORTANT]
>
> * ① 在 AI 时代，并不需要`记住`正则表达式的规则，只需要了解一下。
> * ② 如果不会写正则表达式，没有关系，直接问 AI 就可以了。

# 第一章：前言

## 1.1 概述

* [正则表达式](https://regex-vis.com/)可以`校验字符串`是否满足一定的`规则`。
* [正则表达式](https://any-rule.vercel.app/)可以`校验数据格式`的合法性。

## 1.2 引入

* 需求：校验 QQ 号码是否正确？

> [!NOTE]
>
> * ① 规则：6 ~ 20 位之内，0 不能在开头，必须全部是数字。
> * ② 使用之前学习的知识完成上述需求。
> * ③ 使用正则表达式来简化书写。



* 示例：

```java {25-47,54-62}
package com.github.regex;

import java.util.Objects;
import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("请输入 QQ 号码：");
        String qq = input.next();
        boolean flag = validate(qq);
        if (flag) {
            System.out.println(qq + " 合法！！！");
        } else {
            System.out.println(qq + " 不合法！！！");
        }
        input.close();
    }

    /**
     * 6 位或 20 位之内，0 不能在开头，必须全部是数字。
     * @param qq QQ 号码
     * @return true 表示合法，false 表示非法
     */
    public static boolean validate(String qq) {
        // 如果字符串为空，则返回 false
        if (Objects.isNull(qq) || qq.isBlank()) {
            return false;
        }

        // 将字符串转换为字符数组
        char[] chs = qq.toCharArray();

        // 判断字符串的长度
        int length = chs.length;
        if (length < 6 || length > 20) {
            return false;
        }

        // 不能为 0 开头
        if (qq.startsWith("0")) {
            return false;
        }

        // 必须都是数字
        return validateDigit(chs);
    }

    /**
     * 判断数组中是否都是数字
     * @param chs 数组
     * @return true 都是数字；false 含有非数字
     */
    private static boolean validateDigit(char[] chs) {
        char[] chsResult = Objects.requireNonNull(chs);
        for (char ch : chsResult) {
            if (!Character.isDigit(ch)) {
                return false;
            }
        }
        return true;
    }
}
```



* 示例：

```java
package com.github.regex;

import java.util.Scanner;

public class RegexDemo2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("请输入 QQ 号码：");
        String qq = input.next();
        boolean flag = qq.matches("[1-9]\\d{5,19}"); // [!code highlight]
        if (flag) {
            System.out.println(qq + " 合法！！！");
        } else {
            System.out.println(qq + " 不合法！！！");
        }
        input.close();
    }
}
```

## 1.3 正则表达式的作用

* ① 校验`字符串`是否满足一定的规则。

```java
String regex = "[1-9]\\d{5,19}"; // [!code highlight]
boolean flag = qq.matches(regex); 
```

* ② 在一段文本中查找满足要求的内容。

```java {1}
String regex = "\\d{6}(?:18|19|20)?\\d{2}(?:0[1-9]|1[012])(?:0[1-9]|[12][0-9]|3[01])\\d{3}[\\dxX]";
String words =
        """
        向玉宇 41080119930228457x 男 河南省焦作市市辖区
        高新瑶 510801197609022309 女 四川省广元市市辖区
        孔弘济 150401198107053872 男 内蒙古自治区赤峰市市辖区
        林冬卉 130133197204039024 女 河北省石家庄市赵县
        邱迎海 430102197606046442 女 湖南省长沙市芙蓉区
        刘如松 632722197112040806 女 青海省玉树藏族自治州杂多县
        侯含雁 130683199011300601 女 河北省保定市安国市
        赵弘新 350111199409241690 男 福建省福州市晋安区
        杜力强 522323198705037737 男 贵州省黔西南布依族苗族自治州普安县
        白香彤 510182197109294463 女 四川省成都市彭州市
        万明辉 653221197910077436 男 新疆维吾尔族自治区和田地区和田县
        张元彤 533526197206260908 女 云南省临沧地区双江拉祜族佤族布朗族傣族自治县
        肖乐珍 230305198909078721 女 黑龙江省鸡西市梨树区
        石初曼 232304198204030301 女 黑龙江省绥化地区海伦市
        董华采 411425198812189711 男 河南省商丘市虞城县
        高乐音 350521197404071798 男 福建省泉州市惠安县
        孔弘阔 542128198709025957 男 西藏自治区昌都地区左贡县
        刘含灵 350321198401316749 女 福建省莆田市莆田县
        金丹琴 440804197710034663 女 广东省湛江市坡头区
        陆雨信 372900197507012999 男 山东省菏泽地区
        向玉宇 41080119930228457x 男 河南省焦作市市辖区
        高新瑶 510801197609022309 女 四川省广元市市辖区
        孔弘济 150401198107053872 男 内蒙古自治区赤峰市市辖区
        林冬卉 130133197204039024 女 河北省石家庄市赵县
        邱迎海 430102197606046442 女 湖南省长沙市芙蓉区
        刘如松 632722197112040806 女 青海省玉树藏族自治州杂多县
        侯含雁 130683199011300601 女 河北省保定市安国市
        """;

Pattern pattern = Pattern.compile(regex);
Matcher matcher = pattern.matcher(words);
while (matcher.find()) {
    System.out.println("找到的身份证号: " + matcher.group());
}
```



# 第二章：正则表达式

## 2.1 书写规则

### 2.1.1 字符类

* 字符类：只匹配一个字符。

| 正则表达式（字符类） | 含义                                                     |
| -------------------- | -------------------------------------------------------- |
| `[abc]`              | 只能是 a、b、c 中的任意一个字符                          |
| `[^abc]`             | 除了 a、b、c 以外的任意一个字符                          |
| `[a-zA-Z]`           | 必须是 a-z、A-Z 中的任意一个字符                         |
| `[^a-zA-Z]`          | 除了 a-z、A-Z 中的任意一个字符                           |
| `[a-d[m-p]]`         | 必须是 a-d 或 m-p 中的任意一个字符                       |
| `[a-z&&[def]]`       | 必须是 a-z 和 def 的交集中的任意一个字符，即：[def]      |
| `[a-z&&[^bc]]`       | 必须是 a-z 和非 bc 的交集中的任意一个字符，即：[ad-z]    |
| `[a-z&&[^m-p]]`      | 必须是 a-z 和非 m-p  的交集中的任意一个字符，即：[alq-z] |



* 示例：

```java
package com.github.regex;

public class Test {
    public static void main(String[] args) {
        // 只能是 a 或 b 或 c
        System.out.println("a".matches("[abc]")); // true
        System.out.println("b".matches("[abc]")); // true
        System.out.println("c".matches("[abc]")); // true
        System.out.println("z".matches("[abc]")); // false
        System.out.println("ab".matches("[abc]")); // false
        System.out.println("ab".matches("[abc][abc]")); // true

        System.out.println("--------------------------");

        // 不能出现 a b c
        System.out.println("a".matches("[^abc]")); // false
        System.out.println("z".matches("[^abc]")); // true
        System.out.println("zz".matches("[^abc]")); // false
        System.out.println("zz".matches("[^abc][^abc]")); // true

        System.out.println("--------------------------");

        // [a-zA-Z] 只能是 a-zA-Z 中的任意一个字符，包括头和尾
        System.out.println("a".matches("[a-zA-Z]")); // true
        System.out.println("z".matches("[a-zA-Z]")); // true
        System.out.println("aa".matches("[a-zA-Z]")); // false
        System.out.println("zz".matches("[a-zA-Z]")); // false
        System.out.println("0".matches("[a-zA-Z]")); // false

        System.out.println("--------------------------");

        // [a-d[m-p]] 只能是 a-d 或 m-p 中的任意一个字符
        System.out.println("a".matches("[a-d[m-p]]")); // true
        System.out.println("d".matches("[a-d[m-p]]")); // true
        System.out.println("m".matches("[a-d[m-p]]")); // true
        System.out.println("p".matches("[a-d[m-p]]")); // true
        System.out.println("e".matches("[a-d[m-p]]")); // false
        System.out.println("0".matches("[a-d[m-p]]")); // false

        System.out.println("--------------------------");

        // [a-z&&[def]] 只能是 a-z 或 def 中的任意一个字符，即：[def]
        System.out.println("a".matches("[a-z&&[def]]")); // false
        System.out.println("d".matches("[a-z&&[def]]")); // true
        System.out.println("0".matches("[a-z&&[def]]")); // false

        System.out.println("--------------------------");

        // [a-z&&[^bc]] 必须是 a-z 和非 bc 的交集中的任意一个字符，即：[ad-z]
        System.out.println("a".matches("[a-z&&[^bc]]")); // true
        System.out.println("b".matches("[a-z&&[^bc]]")); // false
        System.out.println("0".matches("[a-z&&[^bc]]")); // false

        System.out.println("--------------------------");

        // [a-z&&[^m-p]] 必须是 a-z 和非 m-p 的交集中的任意一个字符，即：[alq-z]
        System.out.println("a".matches("[a-z&&[^bc]]")); // true
        System.out.println("m".matches("[a-z&&[^bc]]")); // true
        System.out.println("0".matches("[a-z&&[^bc]]")); // false
    }
}
```

### 2.1.2 预定义字符类

* 预定义字符类：只匹配一个字符。

| 正则表达式（预定义字符类） | 含义                                                   |
| -------------------------- | ------------------------------------------------------ |
| `.`                        | 匹配所有字符                                           |
| `\d`                       | 一个数字，等同于 `[0-9]`                               |
| `\D`                       | 非数字，等同于`[^0-9]`                                 |
| `\s`                       | 空白字符，等同于`[\t\n\xOB\f\r]`                       |
| `\S`                       | 非空白字符，等同于`[^s]`                               |
| `\w`                       | 单词字符（英文、数字、下划线），等同于`[a-zA-z_0-9]`。 |
| `\W`                       | 非单词字符，等同于`[^a-zA-Z_0-9]`                      |



* 示例：

```java
package com.github.regex;

public class Test {
    public static void main(String[] args) {
        // . 表示任意字符
        System.out.println("你".matches(".")); // true
        System.out.println("你a".matches(".")); // false
        System.out.println("你a".matches("..")); // true

        System.out.println("--------------------------");

        // \d 只能是一个数字，因为 \ 有特殊含义，所以采用 \\ 表示一个 \
        System.out.println("a".matches("\\d")); // false
        System.out.println("3".matches("\\d")); // true
        System.out.println("33".matches("\\d")); // false

        System.out.println("--------------------------");

        // \w 只能是一个单词字符，即：[a-zA-z_0-9]
        System.out.println("z".matches("\\w")); // true
        System.out.println("2".matches("\\w")); // true
        System.out.println("21".matches("\\w")); // false
        System.out.println("您".matches("\\w")); // false

        System.out.println("--------------------------");

        // \W 非单词字符，即：[^a-zA-z_0-9]
        System.out.println("您".matches("\\W")); // true
        System.out.println("&".matches("\\W")); // true
        System.out.println("9".matches("\\W")); // false
    }
}
```

### 2.1.3 边界匹配器

* 边界匹配器：

| 正则表达式（边界匹配器） | 含义     |
| ------------------------ | -------- |
| `^`                      | 行的开头 |
| `$`                      | 行的结尾 |



* 示例：

```java
package com.github.regex;

public class Test {
    public static void main(String[] args) {
        // 必须以 abc 开头
        System.out.println("abc".matches("^abc")); // true
        System.out.println("abcd".matches("^abc")); // false
        System.out.println("abcd".matches("^abc.*")); // true
        System.out.println("bcde".matches("^abc")); // false

        System.out.println("--------------------------");

        // 必须以 .com 结尾
        System.out.println("abc@qq.com".matches(".*com$")); // true
        System.out.println("abc".matches(".*com$")); // false
        System.out.println("abc@qq.cn".matches(".*com$")); // false
    }
}
```

### 2.1.4 数量类

* 数量类：

| 正则表达式（数量类） | 含义                                            |
| -------------------- | ----------------------------------------------- |
| `X?`                 | X 字符最多只能出现一次（ 0 次或 1 次）          |
| `X*`                 | X 字符可以出现 0 次或多次                       |
| `X+`                 | X 字符可以出现 1 次或多次                       |
| `X{n}`               | X 字符只能出现 n 次                             |
| `X{n,}`              | X 字符至少出现 n 次（在数学中表示 [n,+∞) ）     |
| `X{n,m}`             | X 字符只能出现 n 到 m 次（在数学中表示 [n,m] ） |



* 示例：

```java
package com.github.regex;

public class Test {
    public static void main(String[] args) {
        // 必须是字母、数字、下划线，且至少 6 位
        System.out.println("abcefgh_".matches("\\w{6,}")); // true
        System.out.println("224f".matches("\\w{6,}")); // false

        System.out.println("--------------------------");

        // 必须是数字、字符，且必须是 4 位
        System.out.println("23dF".matches("[a-zA-Z0-9]{4}")); // true
        System.out.println("23_F".matches("[a-zA-Z0-9]{4}")); // false
        System.out.println("23dF".matches("[\\w&&[^_]]{4}")); // true
        System.out.println("23_F".matches("[\\w&&[^_]]{4}")); // false
    }
}
```

## 2.2 综合练习

### 2.2.1 练习一

* 需求：编写正则表达式，验证用户输入的`手机号码`、`邮箱`以及`座机号码`是否满足要求。

> [!NOTE]
>
> * ① 手机号码：13112345678、13712345667、13945679027、13945679021。
> * ② 座机号码：020-23242421、22442111、027-42421324、0712-32422434、3242243。
> * ③ 邮箱：3232323@qq.com、abc@163.com。



* 示例：校验手机号码

```java
package com.github.test;

import java.util.Objects;

public class Test {
    public static void main(String[] args) {
        System.out.println(checkPhone("14559862048")); // true
        System.out.println(checkPhone("13407924148")); // true
        System.out.println(checkPhone("18740982533")); // true
        System.out.println(checkPhone("18977767532")); // true
        System.out.println(checkPhone("18384559968")); // true
        System.out.println(checkPhone("13400964453")); // true
        System.out.println(checkPhone("17389014861")); // true
        System.out.println(checkPhone("15687263208")); // true
        System.out.println(checkPhone("18726392246")); // true
        System.out.println(checkPhone("133184610101")); // false
    }

    /**
     * 验证手机号码
     * @param phone 手机号码
     * @return true 成功，false 失败
     */
    public static boolean checkPhone(String phone) {
        if (Objects.isNull(phone)) {
            return false;
        }

        String regex = "^1[3-9]\\d{9}$";

        return phone.matches(regex);
    }
}
```



* 示例：校验座机号码

```java
package com.github.test;

import java.util.Objects;

public class Test2 {
    public static void main(String[] args) {
        System.out.println(checkPhone("020-23242421")); // true
        System.out.println(checkPhone("021-22442111")); // true
        System.out.println(checkPhone("027-4242132")); // true
        System.out.println(checkPhone("0712-32422434")); // true
        System.out.println(checkPhone("0970-36890760")); // true
        System.out.println(checkPhone("0712-29613526")); // true
        System.out.println(checkPhone("29613526")); // true
        System.out.println(checkPhone("2324242")); // true
        System.out.println(checkPhone("2324242111111")); // false
    }

    /**
     * 验证座机号码
     * 区号-本地号码，区号 3-4 位，如：010、0755
     * 区号-本地号码，本地号码 7-8 位，如：010-12345678、0755-1234567
     * @param phone 座机号码
     * @return true 成功，false 失败
     */
    public static boolean checkPhone(String phone) {
        if (Objects.isNull(phone)) {
            return false;
        }

        String regex = "^(0\\d{2,3}-)?[1-9]\\d{6,7}$";

        return phone.matches(regex);
    }
}
```



* 示例：校验邮箱

```java
package com.github.test;

import java.util.Objects;

public class Test {
    public static void main(String[] args) {
        System.out.println(checkEmail("3232323@qq.com")); // true
        System.out.println(checkEmail("abc@163.com")); // true
        System.out.println(checkEmail("abc@163")); // false
    }

    /**
     * 验证邮箱
     * @param email 邮箱
     * @return true 成功，false 失败
     */
    public static boolean checkEmail(String email) {
        if (Objects.isNull(email)) {
            return false;
        }

        String regex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

        return email.matches(regex);
    }
}
```

### 2.2.2 练习二

* 需求：请编写正则表达式，验证用户名是否满足要求。

> [!NOTE]
>
> 规则：大小写字母，数字，下划线，一共 4~16 位。



* 示例：

```java
package com.github.test;

import java.util.Objects;

public class Test {
    public static void main(String[] args) {
        System.out.println(checkUserName("swyLEpk0")); // true
        System.out.println(checkUserName("XE2h8")); // true
        System.out.println(checkUserName("bv5fXpF0k")); // true
        System.out.println(checkUserName("gTTt6nyb4v")); // true
        System.out.println(checkUserName("aisf1HH")); // true
        System.out.println(checkUserName("ai_dfda")); // true
        System.out.println(checkUserName("_df")); // false
    }

    /**
     * 验证用户名
     * @param username 用户名
     * @return true 成功，false 失败
     */
    public static boolean checkUserName(String username) {
        if (Objects.isNull(username)) {
            return false;
        }

        String regex = "^\\w{4,16}$";

        return username.matches(regex);
    }
}
```

### 2.2.3 练习三

* 需求：请编写正则表达式，验证身份证号码是否满足要求。

> [!NOTE]
>
> 规则：18位，前 17 位任意数字，最后一位可以是数字可以是大写或小写的 x 。



* 示例：

```java
package com.github.test;

import java.util.Objects;

public class Test {
    public static void main(String[] args) {
        System.out.println(checkIdCard("150928195106037110")); // true
        System.out.println(checkIdCard("350124201102148311")); // true
        System.out.println(checkIdCard("520526201306240810")); // true
        System.out.println(checkIdCard("42282319500718393X")); // true
        System.out.println(checkIdCard("542524197605269078")); // true
        System.out.println(checkIdCard("420981199512047176")); // true
        System.out.println(checkIdCard("42112420101014163X")); // true
        System.out.println(checkIdCard("42112420101014163Xa")); // false
    }

    /**
     * 身份证号码
     * @param code 身份证号码
     * @return true 成功，false 失败
     */
    public static boolean checkIdCard(String code) {
        if (Objects.isNull(code)) {
            return false;
        }

        String regex =
                "^([1-6][1-9]|50)\\d{4}(18|19|20)\\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$";

        return code.matches(regex);
    }
}

```



# 第三章：爬虫

## 3.1 概述

* 爬虫（网络爬虫、网络蜘蛛、网络机器人）是一种自动浏览互联网的程序或脚本。

![](./assets/1.png)

* 爬虫就是**代替人手动去浏览网页，但是速度更快、效率更高，并且能够大规模地自动化进行**。

> [!NOTE]
>
> ::: details 点我查看 爬虫出现的主要目的
>
> * ① **发现和收集信息：** 爬虫会访问网页，读取其中的内容。
> * ② **跟踪链接：** 它会查找网页中的超链接（links），然后访问这些链接指向的其他网页，就像蜘蛛在网上爬行一样。
> * ③ **建立索引：** 最常见的用途是为搜索引擎（Google, Bing）建立网页索引。爬虫抓取了大量网页内容后，搜索引擎会对这些内容进行分析、处理，然后存入数据库，这样用户搜索时就能快速找到相关的网页。
> * ④ **数据抓取 (Web Scraping)：** 有时候，爬虫也被用来从网页中提取特定的结构化数据，用于数据分析、价格比较、信息聚合等目的（这通常称为 Web Scraping，但爬虫是其基础）。
>
> :::

![](./assets/2.png)

> [!NOTE]
>
> 其实，正则表达式的第二个作用：在一段文本中查找满足要求的内容，就类似于爬虫！！！

## 3.2 本地爬虫

* 需求：找出如下文本中的所有 `JavaXxx` 。

> [!NOTE]
>
> * ① 文本的内容是：“Java 自从 95 年问世以来，经历了很多版本，目前企业中用的最多的是 Java8 和 Java11，因为这两个是长期支持版本。下一个长期支持版本是 Java17，相信在未来不久 Java17 也会逐渐登上历史舞台。”
> * ② 可以通过 Java 的 Pattern 类和 Matcher 类来实现：
>   * Pattern 类就是用来表示正则表达式。
>   * Matcher 类是一个文本匹配器，其作用就是按照`正则表达式的规则`从头开始读取字符串，并在大的字符串去寻找符合规则的子串。



* 示例：

```java
package com.github.test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Test {
    public static void main(String[] args) {
        String str =
                """
        Java 自从 95 年问世以来，经历了很多版本，目前企业中用的最多的是 Java8 和 Java11，因为这两个是长期支持版本。
        下一个长期支持版本是 Java17，相信在未来不久 Java17 也会逐渐登上历史舞台。""";

        // 获取正则表达式对象
        Pattern pattern = Pattern.compile("Java\\d+");

        // 通过正则表达式对象(pattern)，传入大串(str)，以便获取文本匹配器对象(matcher)
        // matcher 要在 str 中寻找符合 pattern 规则的子串
        Matcher matcher = pattern.matcher(str);

        // 判断是否找到
        // 如果没有，返回false
        // 如果找到，返回true，底层会记录子串的起始索引和结束索引+1
        while (matcher.find()) {
            // 底层会根据 find 方法记录的索引进行字符串的截取，即：str.substring(start,end)
            // 并将截取之后的小串返回
            String group = matcher.group();
            System.out.println(group);
        }
    }
}
```

## 3.3 综合练习

* 需求：把下面文本中的`电话`，`邮箱`，`手机号`，`热线`都爬取出来。

> [!NOTE]
>
> 如果您有任何疑问，可以通过我们的客服**热线**（400-618-9090、400-618-4000）进行咨询，或者拨打页面下方的**电话**（010-36517895、010-98951256）。您也可以选择发送邮件至我们的官方**邮箱**（abc@qq.com、bcd@163.com），留下您的联系方式和问题，我们会尽快回复。如果您急需帮助，也可以直接拨打我们的指定**手机号**（18512516758、18512508907）。



* 示例：

```java
package com.github.test;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Test {
    public static void main(String[] args) {
        String str =
                """
        如果您有任何疑问，可以通过我们的客服热线（400-618-9090、400-618-4000）进行咨询，或者拨打页面下方的电话（010-36517895、010-98951256）。
        您也可以选择发送邮件至我们的官方邮箱（abc@qq.com、bcd@qq.com），留下您的联系方式和问题，我们会尽快回复。
        如果您急需帮助，也可以直接拨打我们的指定手机号（18512516758、18512508907）""";

        // 获取座机号码
        String regex = "[1-9]\\d{2}-?[1-9]\\d{2}-?{2}-\\d{4}";
        List<String> reptile = reptile(regex, str);
        System.out.println(reptile);

        // 国内电话
        regex = "(0\\d{2,3}-)?[1-9]\\d{6,7}";
        reptile = reptile(regex, str);
        System.out.println(reptile);

        // 手机号码
        regex = "1[3-9]\\d{9}";
        reptile = reptile(regex, str);
        System.out.println(reptile);

        // 邮箱
        regex = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
        reptile = reptile(regex, str);
        System.out.println(reptile);
    }

    /**
     * 根据正则表达式提取信息，并存储到集合中
     * @param regex 正则表达式
     * @param str 文本
     * @return 集合
     */
    public static List<String> reptile(String regex, String str) {

        List<String> list = new ArrayList<>();

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(str);

        while (matcher.find()) {
            list.add(matcher.group());
        }

        return list;
    }
}
```



