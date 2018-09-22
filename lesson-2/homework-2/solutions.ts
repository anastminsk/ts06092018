/*1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/

function isInArray(arr: (string | number)[], ...args: (string | number)[]): boolean {
   return args.every((el: string | number) => arr.includes(el));
 }

//console.log(isInArray([1, 2, 3, 4, 5, 6], 2, 3, 4));
//console.log(isInArray([1, 'hoh', 3, 4, 5, 6], 2, 3, 4));

/*2)
 Написать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено.
*/

function isNumber(a: string | number): a is number {
    return typeof a !== 'string';
}

function summator(...args: (string | number)[]): number {
    return args.reduce<number>((acc: number, next: string | number) => {
        if (isNumber(next)) {
            return acc += next;
        } else {
            if (!isNaN(parseInt(next))) {
                return acc += parseInt(next);
            } else {
                return acc;
            }
        }
    }, 0);
}

//console.log(summator(1, 2, 3, 4));
//console.log(summator(1, 10, 2, '3'));
//console.log(summator(1, 'hoh', 2, '3'));

/*3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
*/

function getUnique(...arr: (string | number)[]): (string | number)[] {
    let result: (string | number)[] = [];
    arr.forEach((el) => {
        if (result.indexOf(el) === -1) {
            result.push(el);
        }
    });
    return result;
}

//console.log(getUnique(1, 2, 3, 3, 'four', 5, 'four', 6, 'six', 6));

/*4)
 Написать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов берутся из массива data. Оригинальный массив не должен быть изменен.
 */

 function toMatrix(data: number[], rowSize: number): number[][] {
     const matrix: number[][] = [];
     for (let cursor = 0; cursor < data.length; cursor += rowSize) {
        const row: number[] = data.slice(cursor, cursor + rowSize);
        matrix.push(row);
    }
     return matrix;
}

//console.log(toMatrix([1, 2, 3, 4, 5, 6, 7], 3));
//console.log(toMatrix([1, 2, 3, 4, 5, 6, 7], 4));
