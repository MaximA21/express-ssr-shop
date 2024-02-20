const Product = require("../models/product");
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
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price)
    product.save()
    res.redirect("/")
}

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render("admin/products", {
            prods: products,
            pageTitle: "Admin Products",
            path: "/admin/products"
        })
    })
}