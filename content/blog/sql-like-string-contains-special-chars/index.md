---
title: SQL LIKE 如何查询包含特殊字符的字符串
date: "2023-04-12T13:37:50.260Z"
description: "SQL LIKE 如何查询包含特殊字符，如(_, %, \)的字符串"
---

根据[MySQL手册](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#operator_like)：

> MySQL uses C escape syntax in strings (for example, `\n` to represent the newline character). If you want a `LIKE`
> string to contain a literal `\ `, you must double it. (Unless the `NO_BACKSLASH_ESCAPES` SQL mode is enabled, in which
> case no escape character is used.) For example, to search for `\n`, specify it as `\\n`. To search for `\ `, specify
> it as `\\\\`; this is because the backslashes are stripped once by the parser and again when the pattern match is
> made, leaving a single backslash to be matched against.

`\%`匹配一个`%`字符。

```mysql
SELECT 'David!' LIKE 'David\%'; # 0
SELECT 'David%' LIKE 'David\%'; # 1
```

`\_`匹配一个`_`字符。

```mysql
SELECT 'David!' LIKE 'David\_'; # 0
SELECT 'David_' LIKE 'David\_'; # 1
```

若要指定其他转义字符，请使用`ESCAPE`子句：

```mysql
SELECT 'David_' LIKE 'David|_' ESCAPE '|'; # 1
```

> 更新于`2023-04-13 21:47:50`

部分数据库（如`SQLite`、`PostgreSQL`、`SQL Server`）不支持默认转义字符，必须使用`ESCAPE`子句指定转义字符

> 更新于`2023-04-14 21:42:34`

`PHP` 转义代码

```php
str_replace(['\\', '_', '%'], ['\\\\', '\\_', '\\%'], $string); 
```
