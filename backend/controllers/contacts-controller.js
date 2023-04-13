const getContacts = (req, res) => {
    res.json({ message: "Hello from server 'getContacts" });
};

module.exports = {
    getContacts,
};