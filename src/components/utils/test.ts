// export default function debounce < T extends unknown[], U >(
//     callback: (...args: T) => PromiseLike < U > | U,
//     wait: number,
// ) {
//     let timer: ReturnType<typeof setTimeout>;

//     return (...args: T): Promise < U > => {
//         clearTimeout(timer);
//         return new Promise((resolve) => {
//             timer = setTimeout(() => resolve(callback(...args)), wait);
//         });
//     };
// }

// export default function debounce(fn: () => void, ms = 300) {
//     let timeoutId: ReturnType<typeof setTimeout>;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     return function (this: any, ...args: []) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => fn.apply(this, args), ms);
//     };
// }

// export default function debounce < F extends(
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     ...args: any[]) => any>(
//     func: F,
//     waitFor: number,
// ) {
//     let timeout: ReturnType<typeof setTimeout>;

//     const debounced = (...args:[]) => {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func(...args), waitFor);
//     };

//     return debounced as (...args: Parameters < F >) => ReturnType < F >;
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export default function debounce<Args extends any[]>(
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     func: (...args: Args) => any,
//     wait: number,
// ) {
//     let timeoutId: ReturnType<typeof setTimeout>;
//     return (...args: Args): void => {
//         const later = () => {
//             clearTimeout(timeoutId);
//             func(...args);
//         };
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(later, wait);
//     };
// }

// export default function debounce < A = unknown, R = void >(
//     fn: (args: A) => R,
//     ms: number,
// ): [(args: A) => Promise < R >, () => void] {
//     let timer: NodeJS.Timeout;

//     const debouncedFunc = (args: A): Promise < R > => new Promise((resolve) => {
//         if (timer) {
//             clearTimeout(timer);
//         }

//         timer = setTimeout(() => {
//             resolve(fn(args));
//         }, ms);
//     });

//     const teardown = () => clearTimeout(timer);

//     return [debouncedFunc, teardown];
// }

// export default function debounce(fn: () => void, delay: number) {
//     let timer: NodeJS.Timeout;
//     return function (...args: []) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay);
//     };
// }

// const debouncePromise = (fn: Promise<void>, ms = 0) => {
//     let timeoutId: NodeJS.Timeout;
//     const pending: [] = [];
//     return (...args: []) =>
//         new Promise((res, rej) => {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 const currentPending = [...pending];
//                 pending.length = 0;
//                 Promise.resolve(fn.apply(this, args)).then(
//                     (data) => {
//                         currentPending.forEach(({
//                             resolve,
//                         }) => resolve(data));
//                     },
//                     (error) => {
//                         currentPending.forEach(({
//                             reject,
//                         }) => reject(error));
//                     },
//                 );
//             }, ms);
//             pending.push({
//                 resolve: res,
//                 reject: rej
//             });
//         });
// };

// export default debouncePromise;

// export default function debounceAsync < T, Callback extends(
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     ...args: any[]) => Promise < T >>(
//     callback: Callback,
//     wait: number,
// ): (...args: Parameters < Callback >) => Promise < T > {
//     let timeoutId: NodeJS.Timeout;

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     return (...args: any[]) => {
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }

//         return new Promise < T >((resolve) => {
//             // eslint-disable-next-line @typescript-eslint/no-shadow
//             const timeoutPromise = new Promise < void >((resolve) => {
//                 timeoutId = setTimeout(resolve, wait);
//             });
//             timeoutPromise.then(async () => {
//                 resolve(await callback(...args));
//             });
//         });
//     };
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// type AsyncFunction = (...args: []) => Promise<any>;

// export default function debounceAsync(fn: AsyncFunction, wait: number) {
//     let timeoutId: NodeJS.Timeout | undefined;

//     return function (...args: []) {
//         clearTimeout(timeoutId);

//         return new Promise((resolve, reject) => {
//             timeoutId = setTimeout(() => {
//                 fn(...args)
//                     .then(resolve)
//                     .catch(reject);
//             }, wait);
//         });
//     };
// }

export default function debounce(callee: () => void, timeoutMs: number) {
    // Как результат возвращаем другую функцию.
    // Это нужно, чтобы мы могли не менять другие части кода,
    // чуть позже мы увидим, как это помогает.
    let timeoutId: NodeJS.Timeout;

    return function perform(...args: []) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callee(...args), timeoutMs);
    };
}
