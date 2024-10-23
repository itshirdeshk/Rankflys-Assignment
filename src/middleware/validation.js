const handleQueryParams = (req, res, next) => {
    const { limit, sort } = req.body;
    req.queryParams = {
        take: limit,
        orderBy: { id: sort.toLowerCase() },
    };
    next();
};

module.exports = { handleQueryParams };
