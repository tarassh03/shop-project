const products = [
    {
        id:1,
        name:"Iphone X",
        description:"This is Iphone X",
        type:"phone",
        capacity:64,
        price:500,
        image:"images/image-iphone.png",
    },
    {
        id:2,
        name:"Iphone XS",
        // description:"This is Iphone XS",
        type:"phone",
        capacity:256,
        price:1500,
        image:"images/image-ipad.png",
    },
    {
        id:3,
        name:"Iphone 12",
        description:"This is Iphone X",
        type:"phone",
        capacity:64,
        price:2000,
        image:"images/image-iphone.png",
    },
    {
        id:4,
        name:"Iphone 8",
        description:"This is Iphone 8",
        type:"phone",
        capacity:64,
        price:1000,
        // image:"images/icon(15).png",
    },
    

]

export const getProductsObject = array => {
    return array.reduce((obj,product) =>({
        ...obj,
        [product.id]:product
    }),{})
}


export default products