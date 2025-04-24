# 第一章：前言

## 1.1 概述

* [正则表达式](https://regex-vis.com/)可以`校验字符串`是否满足一定的`规则`，并用来校验数据格式的合法性。

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

* 需求：编写正则表达式验证用户输入的手机号码、邮箱以及电话号码是否满足要求。

> [!NOTE]
>
> * ① 手机号码：13112345678、13712345667、13945679027、13945679021。
> * ② 电话号码：020-23242421、021-22442111、027-42421324、0712-32422434。
> * ③ 邮箱：3232323@qq.com、abc@163.com。



* 示例：

```java
package com.github.test;

import java.util.Objects;

public class Test {
    public static void main(String[] args) {

        System.out.println(validateMobilePhone("13112345678"));
        System.out.println(validateMobilePhone("13712345667"));
        System.out.println(validateMobilePhone("13945679027"));
        System.out.println(validateMobilePhone("13945679021"));
    }

    /**
     * 验证手机号码
     * @param phone 手机号码
     * @return true 成功，false 失败
     */
    public static boolean validateMobilePhone(String phone) {
        if (Objects.isNull(phone)) {
            return false;
        }

        String regex = "^1[3-9]\\d{9}$";

        return phone.matches(regex);
    }

}
```



* 示例：

```java
package com.github.test;

import java.util.Objects;

public class Test {
    public static void main(String[] args) {

        System.out.println(validatePhone("020-23242421"));
        System.out.println(validatePhone("021-22442111"));
        System.out.println(validatePhone("027-4242132"));
        System.out.println(validatePhone("0712-32422434"));

    }

    /**
     * 验证座机号码
     * 区号-本地号码，区号 3-4 位，如：010、0755
     * 区号-本地号码，本地号码 7-8 位，如：010-12345678、0755-1234567
     * @param phone 座机号码
     * @return true 成功，false 失败
     */
    public static boolean validatePhone(String phone) {
        if (Objects.isNull(phone)) {
            return false;
        }

        String regex = "^0\\d{2,3}-\\d{7,8}$";

        return phone.matches(regex);
    }

}
```



* 示例：

```java
package com.github.test;

import java.util.Objects;

public class Test {
    public static void main(String[] args) {

        System.out.println(validateEmail("3232323@qq.com"));
        System.out.println(validateEmail("abc@163.com"));
    }

    /**
     * 验证邮箱
     * @param email 邮箱
     * @return true 成功，false 失败
     */
    public static boolean validateEmail(String email) {
        if (Objects.isNull(email)) {
            return false;
        }

        String regex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

        return email.matches(regex);
    }
}
```

### 2.2.2 练习二

