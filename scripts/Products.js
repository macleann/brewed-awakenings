import { getProducts } from "./database.js"

const products = getProducts()

addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("product")) {
            
            const [,productId] = itemClicked.id.split("--")
            
            let matchingProduct = null

            for (const product of products) {
                if (product.id === parseInt(productId))
                    matchingProduct = product
            }

            window.alert(`${matchingProduct.name} costs $${matchingProduct.price.toFixed(2)}`)
        }
    })

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

