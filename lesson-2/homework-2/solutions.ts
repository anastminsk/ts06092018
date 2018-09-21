/*1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/

type sub = string | number;

function isInArray(arr: sub[], ...args: sub[]): boolean {
   return args.every((el: sub) => arr.includes(el));
 }

/*2)
 Написать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено.
*/

function summator(...args: string[]): number;
function summator(...args: number[]): number;
function summator(...args: (string | number)[]): number {
    return args.reduce((sum: number, arg: (string | number)) => {
        if (typeof arg === 'string') {
            arg = Number(arg);
        }
        return sum += arg;
    }, 0);
}

/*3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
*/

function getUnique(...arr: sub[]): sub[] {
    let result: sub[] = [];
    arr.forEach((el) => {
        if (result.indexOf(el) === -1) {
            result.push(el);
        }
    });
    return result;
}

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
