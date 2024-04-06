// Mimic Auto

const isAuthenticated = (req, res, next) => {
    const isLogin = true;   //'true' mean give authentication and 'false' mean Unauthentication
    if (isLogin) {
        next();
    } else {
        res.json({
            message: "Unauthorized",
        })
    }
}

module.exports = isAuthenticated;