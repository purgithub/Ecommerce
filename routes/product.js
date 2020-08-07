const express = require("express");
const router = express.Router();

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo,
    listSearch,
} = require("../controllers/product");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");


router.get("/product/:productId", read)
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create,);

router.delete("/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove,
)

// to update the product
router.put("/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update,
)

router.get("/products", list)
router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRelated)
router.get("/products/categories", listCategories)
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo)




/** whenever userId or Product id is in url, UserById and ProductById 
 * methods would run and give desired result..
 */
router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
