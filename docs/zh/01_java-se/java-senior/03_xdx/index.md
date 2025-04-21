# 第一章：前言

## 1.1 引入

* 需求：现在需要校验 QQ 号码是否正确。

> [!NOTE]
>
> * ① 规则：6 位或 20 位之内，0 不能在开头，必须全部是数字。
> * ② 使用之前学习的知识完成上述需求。
> * ③ 使用正则表达式来简化书写（`正则表达式`可以`校验字符串`是否满足一定`的规则`，并用来校验数据格式的合法性）。



* 示例：

```java {20-42,44-57}
package com.github.regex;

import java.util.Objects;
import java.util.Scanner;

public class RegexDemo1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("请输入 QQ 号码：");
        String qq = input.next();
        boolean flag = validateQQ(qq);
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
    public static boolean validateQQ(String qq) {
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

        // 以 0 开头并且都是数字
        return validateDigit(chs) && !qq.startsWith("0");
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

## 1.2 正则表达式的作用

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
        向玉宇41080119930228457x男河南省焦作市市辖区
        高新瑶510801197609022309女四川省广元市市辖区
        孔弘济150401198107053872男内蒙古自治区赤峰市市辖区
        林冬卉130133197204039024女河北省石家庄市赵县
        邱迎海430102197606046442女湖南省长沙市芙蓉区
        刘如松632722197112040806女青海省玉树藏族自治州杂多县
        侯含雁130683199011300601女河北省保定市安国市
        赵弘新350111199409241690男福建省福州市晋安区
        杜力强522323198705037737男贵州省黔西南布依族苗族自治州普安县
        白香彤510182197109294463女四川省成都市彭州市
        万明辉653221197910077436男新疆维吾尔族自治区和田地区和田县
        张元彤533526197206260908女云南省临沧地区双江拉祜族佤族布朗族傣族自治县
        肖乐珍230305198909078721女黑龙江省鸡西市梨树区
        石初曼232304198204030301女黑龙江省绥化地区海伦市
        董华采411425198812189711男河南省商丘市虞城县
        高乐音350521197404071798男福建省泉州市惠安县
        孔弘阔542128198709025957男西藏自治区昌都地区左贡县
        刘含灵350321198401316749女福建省莆田市莆田县
        金丹琴440804197710034663女广东省湛江市坡头区
        陆雨信372900197507012999男山东省菏泽地区
        向玉宇41080119930228457x男河南省焦作市市辖区
        高新瑶510801197609022309女四川省广元市市辖区
        孔弘济150401198107053872男内蒙古自治区赤峰市市辖区
        林冬卉130133197204039024女河北省石家庄市赵县
        邱迎海430102197606046442女湖南省长沙市芙蓉区
        刘如松632722197112040806女青海省玉树藏族自治州杂多县
        侯含雁130683199011300601女河北省保定市安国市
        """;

Pattern pattern = Pattern.compile(regex);
Matcher matcher = pattern.matcher(words);
while (matcher.find()) {
    System.out.println("找到的身份证号: " + matcher.group());
}
```



# 第二章：正则表达式

## 2.1 正则表达式的规则





























