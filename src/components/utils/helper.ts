// /* eslint-disable class-methods-use-this */
// class Helper {
//     // debounce(fn: () => void, time: number) {
//     //     let timer: ReturnType<typeof setTimeout>;
//     //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     //     return (...args: any[]) => {
//     //         clearTimeout(timer);
//     //         timer = setTimeout(() => fn.apply(this, args), time);
//     //     };
//     // }
//     // debounce(fn: () => void, ms = 300): Promise<void> {
//     //     let timeoutId: ReturnType<typeof setTimeout>;
//     //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     //     return (...args: []): Promise<void> => {
//     //         clearTimeout(timeoutId);
//     //         timeoutId = setTimeout(() => fn.apply(this, args), ms);
//     //     };
//     // }

//     // eslint-disable-next-line class-methods-use-this
//     // debounce<U>(
//     //     callback: (...args: []) => PromiseLike<U> | U,
//     //     wait: number,
//     // ) {
//     //     let timer: ReturnType<typeof setTimeout>;

//     //     return (...args: []): Promise<U> => {
//     //         clearTimeout(timer);
//     //         return new Promise((resolve) => {
//     //             timer = setTimeout(() => resolve(callback(...args)), wait);
//     //         });
//     //     };
//     // }

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //     debounce<T extends (...args: any[]) => any>(
// //         ms: number,
// //         callback: T,
// //     ): (...args: Parameters<T>) => Promise<ReturnType<T>> {
// //         let timer: NodeJS.Timeout | undefined;

// //         return (...args: Parameters<T>) => {
// //           if (timer) {
// //             clearTimeout(timer);
// //           }
// //           return new Promise<ReturnType<T>>((resolve) => {
// //             timer = setTimeout(() => {
// //               const returnValue = callback(...args) as ReturnType<T>;
// //               resolve(returnValue);
// //             }, ms);
// //           })
// //         };
// //       }
// // }

// // export default Helper;

// class Debounce {
//     callback: () => void;

//     threshold: number;

//     constructor(callback: () => void, threshold: number) {
//         this.callback = callback;
//         this.threshold = threshold;

//         // eslint-disable-next-line no-constructor-return
//         return this.run.bind(this);
//     }

//     private lastTrigger = 0;

//     run() {
//         const now = Date.now();
//         const diff = now - this.lastTrigger;

//         if (diff > this.threshold) {
//             this.lastTrigger = now;
//             this.callback();
//         }
//     }
// }

// export default Debounce;
