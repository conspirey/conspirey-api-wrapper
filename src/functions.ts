export function getError(error: string): errorReturn  {
    let array = error.split("_")
    let num = Number(array[array.length - 1])
    array.pop()
    return {
        msg: array.join("_"),
        number: num
    }
}
interface errorReturn {
    msg: string
    number: number
}