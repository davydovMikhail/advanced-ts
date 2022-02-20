// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ['Ford', 'Audi'] // две эти записи идентичны, но второй это generic

// const promise = new Promise<string>((resolve) => { // тут дженерик говорит о том что возвращается строка
// // const promise: Promise<number> = new Promise((resolve) => { -- другой вариант записи
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 2000)
// })

// promise.then( data => {
//     console.log(data.toLowerCase()) // а здесь мы можем применить методы строк для промиса который возвращает строку
// })

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b);
}
// с помощью дженерик типов мы вно непривязываемся к какому либо объекты и при этом делаем нашу ф-ю более универсальной
const merged = mergeObjects({name: 'misha'}, {age: 22})
const merged2 = mergeObjects({model: 'Ford'}, {year: 2010})
// console.log(merged.name);
// const merged3 = mergeObjects('aaa', 'bbb') -- благодаря extends object это работать не будет, только объекты 
// console.log(merged3);

interface ILength {
    length: number;
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}// эта ф-я ест все данные котрые обладают свойством length

console.log(withCount('word'));
console.log(withCount(['i', 'am', 'array']));
// console.log(withCount(20)); - будет ошибка так как 20 это число которо не имеет свойства length


