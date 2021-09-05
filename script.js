function getArea(radius) {
  radius = +prompt('Введіть радіус круга')
  if (isNaN(radius) == true) console.log('Повинно бути числове значення')
  else if (radius == null || radius == '') console.log('Будь ласка, введіть радіус!')
  else console.log(`Площа круга = ${radius * 2 * Math.PI}`);
}
getArea()

function getSqrt(num1) {
  num1 = +prompt('Введіть число щоб вирахувати корень квадратний')
  if (Number.isNaN(num1) == true) console.log('Повинно бути числове значення')
  else if (num1 == null || num1 == '') console.log('Ви нічого не ввели!')
  else console.log(`Корінь числа ${num1} = ${Math.sqrt(num1)}`);
}
getSqrt()

let MyMath = {
  PI: 3.1415926535,
  pow(number, degree) {
    let result = 1;
    if (number != 0 && number < 0 == false && number > 0 == false || degree != 0 && degree < 0 == false && degree > 0 == false) {
      console.log(` Ви ввели некоректні дані ! `);
    }
    else {
      if (degree < 0) {
        for (let i = 1; i <= -degree; i++) {
          result *= number;
        }
        result = 1 / result;
      }
      else if (number == 0 && degree == 0) {
        result = 1;
      }
      else if (degree > 0) {
        for (let i = 1; i <= degree; i++) {
          result *= number;
        }
      }
      console.log(`${number} в степені ${degree} = ${result}`);
    }
  },

  abs(modull) {
    if (isNaN(modull)) {
      console.log('Повинно бути числове значення')
    }
    else if (modull == null || modull == '') {
      console.log(`Будь ласка, введіть число`)
    }
    else if (modull < 0) {
      console.log(`Модуль числа ${modull} = ${-modull}`)
    }
    else {
      console.log(`Модуль числа ${modull} = ${modull}`)
    }
  },

  max() {
    let maxnumbers = prompt('МАКСИМАЛЬНЕ ЗНАЧЕННЯ. Будь ласка, введіть перелік чисел через ПРОБІЛ')
    if (maxnumbers == null || maxnumbers == '') console.log('Ви нічого не ввели')
    else {
      maxnumbers = maxnumbers.split(' ');
      for (let i = 0; i < maxnumbers.length; i++) {
        if (isNaN(maxnumbers[i]) == true) {
          console.log('Всі введенні значення мають бути числами');
          return 0;
        }
      }
      let chek = Number(maxnumbers[0]);
      for (let i = 0; i < maxnumbers.length; i++) {
        let arrnum = Number(maxnumbers[i]);
        arrnum > chek ? chek = arrnum : chek;
      }
      console.log(maxnumbers)
      console.log(`максимальне значення = ${chek}`)
    }
  },

  min() {
    let minnumbers = prompt('МІНІМАЛЬНЕ ЗНАЧЕННЯ. Будь ласка, введіть перелік чисел через ПРОБІЛ')
    if (minnumbers == null || minnumbers == '') console.log('Ви нічого не ввели')
    else {
      minnumbers = minnumbers.split(' ');
      for (let i = 0; i < minnumbers.length; i++) {
        if (isNaN(minnumbers[i]) == true) {
          console.log('Всі введенні значення мають бути числами');
          return 0;
        }
      }
      let chek1 = Number(minnumbers[0]);
      for (let i = 0; i < minnumbers.length; i++) {
        let arrnum1 = Number(minnumbers[i]);
        arrnum1 < chek1 ? chek1 = arrnum1 : chek1;
      }
      console.log(minnumbers)
      console.log(`мінімальне значення = ${chek1}`)
    }

  }
}

console.log(MyMath.PI);
MyMath.pow(number = +prompt('ПІДНЕСЕННЯ ДО СТЕПЕНІ Введіть число.'), degree = +prompt('ПІДНЕСЕННЯ ДО СТЕПЕНІ ВВедіть степінь'));
MyMath.abs(prompt('МОДУЛЬ ЧИСЛА Введіть число'));
MyMath.max();
MyMath.min();

