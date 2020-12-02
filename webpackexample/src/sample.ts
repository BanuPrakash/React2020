
export function doTask(name:string, value:number) : void {
    console.log(name , value);
}

export interface Product {
    id: number;
    name: string;
    quantity?: number
}

export function addProduct(product:Product) : void {
    console.log(product);
}

