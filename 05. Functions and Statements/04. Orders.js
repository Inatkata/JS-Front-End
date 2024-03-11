function solve(product, quantity) {
    const price = getProductPrice(product)
    const result = quantity * price

    console.log(result.toFixed(2))

    function getProductPrice(product) {
        switch (product) {
            case 'water':
                return 1
            case 'coffee':
                return 1.50
            case 'coke':
                return 1.4
            case 'snacks':
                return 2
        }
    }

}
