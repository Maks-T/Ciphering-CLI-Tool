# Инструкция

[Описание на русском](https://github.com/Maks-T/Ciphering-CLI-Tool/blob/Ciphering-CLI-Tool/README_RU.md)

## Running the program

[Link to the task](https://github.com/rolling-scopes-school/basic-nodejs-course)

Ways to run the script:

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

## Description

CLI tool should accept 3 options (short alias and full name):

1.  **-c, --config** (**Required parameter**): config for ciphers
    Config is a string with pattern `{XY(-)}n`, where:

- `X` is a cipher mark:
  - `C` is for Caesar cipher (with shift 1)
  - `A` is for Atbash cipher
  - `R` is for ROT-8 cipher
- `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
  - `1` is for encoding
  - `0` is for decoding

2.  **-i, --input** : a path to input file (**Optional parameter**)
3.  **-o, --output** : a path to output file (**Optional parameter**)

For example, config `"C1-C1-R0-A"` means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

## Usage example:

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
