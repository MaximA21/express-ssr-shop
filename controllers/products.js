const Product = require("../models/product")

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"))
    res.render("admin/add-product", {
        pageTitle: "Add product",
        path: "/admin/add-product",
        productCSS: true,
        formCSS: true,
        activeProduct: true,
    })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect("/")
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/product-list", {
            prods: products,
            pageTitle: "Shop",
            path: "/",
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
        })
    })
    // console.log('shop.js', adminData.products);
//    res.sendFile(path.join(rootDir, 'views', 'shop.html'));

}