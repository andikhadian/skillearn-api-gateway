const jwt = require('jsonwebtoken');
const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_USER,
    JWT_SECRET,
    JWT_SECRET_REFRESH_TOKEN,
    JWT_ACCESS_TOKEN_EXPIRED,
    JWT_REFRESH_TOKEN_EXPIRED,
} = process.env

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
    try {
        const { id } = req.user.data
        const user = await api.put(`/users/${id}`, req.body);
        return res.status(200).json({
            status: 'success',
            data: user.data
        })

    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavalaible' })
        }
        console.log(error);
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}