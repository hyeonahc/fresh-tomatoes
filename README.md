# π Fresh Tomatoes

## μκ΅¬μ¬ν­

### νμ μκ΅¬μ¬ν­

- [x] κ²μμ΄λ₯Ό μλ ₯ν΄ μνλ₯Ό κ²μν  μ μμ΄μΌ ν©λλ€.
- [x] κ²μλ κ²°κ³Ό(μν λͺ©λ‘)μ μΆλ ₯ν΄μΌ ν©λλ€.
- [x] νλ‘ νΈμλ νλ μμν¬ μμ΄ λ°λλΌ μλ°μ€ν¬λ¦½νΈλ§μΌλ‘ κ°λ°ν΄μΌ ν©λλ€.
- [x] μ€μ  μλΉμ€λ‘ λ°°ν¬νκ³  μ κ·Ό κ°λ₯ν λ§ν¬λ₯Ό μΆκ°ν΄μΌ ν©λλ€.

### μ ν μκ΅¬μ¬ν­

- [ ] Webpack νλ‘μ νΈλ‘ κ΅¬μ±ν΄λ³΄μΈμ.
- [ ] ν΄λΌμ΄μΈνΈμμ API Keyκ° λΈμΆλμ§ μλλ‘ λ§λ€μ΄λ³΄μΈμ.
- [x] λ¬΄ν μ€ν¬λ‘€μ μν 'Intersection Observer'λ₯Ό νμ©ν΄λ³΄μΈμ.
- [ ] μ΅μ΄ API μμ²­(Request)μ λν λ‘λ© μ λλ©μ΄μμ μΆκ°ν΄λ³΄μΈμ.
- [x] SCSS, Bootstrap λ±μ κ΅¬μ±ν΄ νλ‘μ νΈλ₯Ό μ΅λν μμκ²(?) λ§λ€μ΄λ³΄μΈμ.
- [ ] μν ν¬μ€ν° μ£Όμμ ν¬ν¨λ `SX300`λ₯Ό `SX700`κ³Ό κ°μ΄ λ ν° μ«μλ‘ μμ ν΄ μμ²­νμΈμ.
- [ ] μ€μκ°μΌλ‘ μ΄λ―Έμ§μ ν¬κΈ°λ₯Ό λ€λ₯΄κ² μμ²­νλ κ²μ΄ μ΄λ€ μλ¦¬λ‘ κ°λ₯νμ§ μ‘°μ¬ν΄λ³΄μΈμ.
- [ ] μμ²­ μ£Όμμ HTTPκ° μλ HTTPS νλ‘ν μ½μ μ¬μ©ν΄μΌ νλ μ΄μ λ₯Ό μ‘°μ¬ν΄λ³΄μΈμ.

## μ¬μ΄νΈ λ§ν¬

### [Fresh Tomatoes μΉμ¬μ΄νΈ λ°©λ¬ΈνκΈ° β¨](https://freshtomatoes.netlify.app/)

### λ©μΈ νμ΄μ§
![1](https://user-images.githubusercontent.com/83247825/169261007-dfcdaa17-cdc5-4245-a6da-2253ef619a15.png)

### μν κ²μ νμ΄μ§
![2](https://user-images.githubusercontent.com/83247825/169261018-35826ae0-5120-4211-b06c-fd0692353d9b.png)

### μν μμΈ νμ΄μ§
![3](https://user-images.githubusercontent.com/83247825/169261033-964429b1-1d8e-493a-8336-0026f1a9988d.png)

### λμ΄μ λ‘λ©μν¬ μνκ° μμλ
![4](https://user-images.githubusercontent.com/83247825/169261038-2a0d7918-ae7b-4bef-bda1-d8c1c3003a73.png)

### μ‘΄μ¬νμ§ μλ μνλ₯Ό κ²μνμλ
![5](https://user-images.githubusercontent.com/83247825/169261053-fe5bd00d-bedc-47f2-8e6d-77c2e0f9517d.png)

### inputμ κ°μ μλ ₯νμ§ μμμλ
![5](https://user-images.githubusercontent.com/83247825/169261049-839c6401-c376-43d9-9fb8-3315f390e3ae.png)

## μ§λ¬Έ

**main.js νμΌμμ 126, 147, 236 μ€μμ μ§λ¬Έ μμ΅λλ€**

147λ²μ§Έμ€ μ½λ

```js
tomatoImg.src = '../img/frown-tomato.png';
```

μ¬μ©μκ° inputμ μλ¬΄κ²λ μλ ₯νμ§ μμμλ λλ κ²μν μνμ λ³΄κ° λνλμ§ μμμ κ²½μ°μ μλ‘μ΄ μ΄λ―Έμ§λ₯Ό μ½μν΄μ£Όλ μ½λμλλ€. μμ μλ μ½λκ° μλνμ§ μμ μ΄λ―Έμ§λ₯Ό κΉνλΈμ μ¬λ €μ£Όκ³  ν΄λΉ λ§ν¬λ₯Ό μ¬μ©ν΄μ£Όμμ΅λλ€. μμ μλ μ½λλ μ μλμ΄ λμ§ μλκ±΄κ°μ? νμΈν΄λ΄€μλλ μ΄λ―Έμ§μ srcκ° λ³νλμμ§λ§ ν΄λΉ μ΄λ―Έμ§κ° λ¬Έμμ μΆλ ₯λμ§λ μμμ΅λλ€. κ²½λ‘λ¬Έμ μΌκΉ μΆμ΄μ <code>'./img/frown-tomato.png'</code> <code>'../img/frown-tomato.png'</code> <code>'img/frown-tomato.png'</code> μ΄λ°μμΌλ‘ κ²½λ‘λ₯Ό λ°κΏμ£Όλ©΄μ νμ€νΈν΄λ³΄μμ§λ§ μλμ΄ λμ§ μμμ΅λλ€. νΉμ λ¬Έμ μ μ μμ λ€λ©΄ μ‘°μΈν΄μ£Όμλ©΄ κ°μ¬νκ² μ΅λλ€!

## ν΄μΌν μΌ

- [ ] environment variableμ μ¬μ©ν΄μ API Key μ¨κΈ°λ κΈ°λ₯ μΆκ°νκΈ°
- [ ] SNS API μ¬μ©ν΄ μν κ³΅μ νκΈ° κΈ°λ₯ μΆκ°νκΈ°
- [ ] inputμ μμ΄ μ΄μΈμ λ€λ₯Έ μΈμ΄ μλ ₯ λ°©μ§μν€λ κΈ°λ₯ μΆκ°νκΈ°
- [ ] Sass, js νμΌ λ¦¬ν©ν λ§νκΈ°
- [ ] utils.scss λ§λ€μ΄μ€ ν Scssμμ λ§λ  variable λ°λ‘ κ΄λ¦¬ν΄μ£ΌκΈ°
- [ ] meta νκ·Έ μΆκ°ν΄μ SNSμ κ³΅μ μ λμ€λ μ΄λ―Έμ§, μ λͺ©, μ€λͺκΈ μ»€μ€ν°λ§μ΄μ¦ν΄μ£ΌκΈ°
- [ ] media query μ μ©ν΄ λ°μνμΌλ‘ λ§λ€μ΄μ£ΌκΈ°
- [ ] nav μμλ₯Ό ν­μ μμ κ³ μ μμΌμ£ΌκΈ°
- [ ] μν μ΄λ―Έμ§λ₯Ό imgμ srcκ° μλ backgroundλ‘ λ°κΏμ€ μ΄λ―Έμ§μ λΉμ¨μ μ μ§μν¨μ± λͺ¨λ κ°μ λμ΄μ λλΉκ°μ κ°μ§κ² νκΈ°
- [ ] μλ¬ νΈλ€λ§ ifλ¬Έμ΄ μλ try catchλ¬ΈμΌλ‘ λ°κΏμ£ΌκΈ°
- [ ] scroll to top κΈ°λ₯ κ΅¬ννκΈ°
- [ ] 000κ°μ μνμ λ³΄λ₯Ό μ°Ύμμ΅λλ€ λ¬Έκ΅¬ μΆκ°ν΄μ£ΌκΈ°
- [ ] μν μμΈνμ΄μ§μ λ³μ  μΆκ°ν΄μ£ΌκΈ°

## λλμ 
κ³Όμ λ λ―Έλ¦¬ νμ...