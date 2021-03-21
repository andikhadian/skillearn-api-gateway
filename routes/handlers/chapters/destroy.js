
const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_COURSE
} = process.env

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const { id } = req.params
        const chapter = await api.delete(`/api/chapters/${id}`);
        return res.status(200).json(chapter.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service chapter unavalaible' })
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}