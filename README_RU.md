# Инструкция

## Запуск программы

[Ссылка на задание](https://github.com/rolling-scopes-school/basic-nodejs-course)

Способы запуска скрипта:

```javascript
1. node index -c "C1-C1-R0-A" -i "input.txt" -o "output.txt"
2. node index --config "C1-C1-R0-A" --input "input.txt" --output "./output.txt"
3. node index -c "C1-C1-R0-A" -i "input.txt"
4. node index -c "C1-C1-R0-A" -o "output.txt"
5. node index -c "C1-C1-R0-A"
6. node index --config "C1-C1-R0-A" --input "input.txt"
7. node index --config "C1-C1-R0-A" --output "./output.txt"
8. node index --config "C1-C1-R0-A" -i "input.txt" --output "./output.txt"
9. node index --config "C1-C1-R0-A" --input "input.txt" -o "./output.txt"
```

## Описание

Инструмент CLI должен принимать 3 варианта (короткий псевдоним и полное имя):

1.  **-c, --config** (**Обязательный параметр**): конфигурация для шифров Конфигурация представляет собой строку с шаблоном `{XY(-)}n`, где:

- `X` является зашифрованным знаком:
  - `C` это для шифра Цезаря (со сдвигом 1)
  - `A` предназначен для шифра Atbash
  - `R` предназначен для шифра ROT-8
- `Y` является флагом кодирования или декодирования (обязательным для шифра Цезаря и шифра ROT-8 и не должен передаваться шифром Atbash)
  - `1` предназначен для кодирования
  - `0` предназначен для декодирования

2.  **-i, --input**: путь к входному файлу (**Необязательный параметр**)
3.  **-o, --output**: путь к выходному файлу (**Необязательный параметр**)

Например, конфигурация `"C1-C1-R0-A"`означает "кодировать шифром Цезаря => кодировать шифром Цезаря =>> декодировать ROT-8 =>>> использовать Atbash"
Пути можно указывать **_относительные_**. Порядок аргументов также **_не важен_**, но есть **обязательный аргумент конфига**.

Формат самой последовательности конфига должен быть **строго в верхнем регистре**.

## Пример использования

```bash
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`
