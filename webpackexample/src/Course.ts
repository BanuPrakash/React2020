
// decorator
export default function Course(config:any) {
    return function (target: any) { // student is a target
        Object.defineProperty(target.prototype, 'subject', {value : () =>  config.course})
    }
}
 