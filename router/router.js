const productsController = require('../controller/productsController')
const userController = require('../controller/userController')
const cartController = require('../controller/cartController')

module.exports = app => {
    app.get('/', productsController.home)
    app.get('/', userController.home)
    app.get('/', cartController.home)

    //api product
    app.get('/products', productsController.listProduct)
    app.get('/products/:id', productsController.detailProduct)
    app.post('/products/', productsController.tambahProduct)
    app.put('/products/:id', productsController.ubahProduct)
    app.delete('/products/:id', productsController.hapusProduct)

    //api user
    app.get('/users', userController.listUser)
    app.get('/users/:id', userController.detailUser)
    app.post('/users/', userController.tambahUser)
    app.put('/users/:id', userController.ubahUser)
    app.delete('/users/:id', userController.hapusUser)

    //api cart
    app.post('/cart/:id', cartController.addToCart)
    app.get('/cart/:id', cartController.showCart)
    app.put('/cart/:id', cartController.editCart)
    app.delete('/cart/:id', cartController.deleteCart)
    app.get('/cart/remove/:id', cartController.removeCart)

    //api checkout
    app.get('/cart/checkout/:id', cartController.checkOut)
}