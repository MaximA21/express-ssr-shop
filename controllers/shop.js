const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/product-list", {
            prods: products,
            pageTitle: "All Products",
            path: "/products",
        })
    })
    // console.log('shop.js', adminData.products);
//    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

exports.getIndex = (req, res) => {
    Product.fetchAll(products => {
        res.render("shop/index", {
            prods: products,
            pageTitle: "Shop",
            path: "/"
        })
    })
}

exports.getCart = (req, res) => {
    res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart"
    })
}

exports.getCheckout = (req, res) => {
    res.render("shop/checkout"), {
        path: "/checkout",
        pageTitle: "Checkout"
    }
}
exports.getOrders = (req, res) => {
    res.render("shop/orders"), {
        path: "/orders",
        pageTitle: "Orders"
    }
}