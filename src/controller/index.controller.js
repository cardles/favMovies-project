const getHome = (req, res) => {
    res.status(200).json({ message: "Seja bem-vindo à minha API!" })
};


module.exports = { getHome };