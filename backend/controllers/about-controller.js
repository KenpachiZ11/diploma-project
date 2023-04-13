const getAbout = (req, res) => {
    res.json({ message: "Hello from server 'getAbout" });
};

module.exports = {
    getAbout,
};