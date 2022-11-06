// Require Worker and Enum type Functions..
const {
    postWorker,
} = require('../model/worker');
const {
    getEnumType
} = require('../model/enumtype');

// Receive Task From POST Request..
function httpPostWorker(req, res) {
    const slackUsername = 'Abeeujah';
    const result = postWorker(req);
    const operation_type = getEnumType(req.body.operation_type);
    if (!operation_type) {
        return (res.status(400).json({
            slackUsername,
            error: ['addition', 'add', 'sum', 'plus', 'summation',
                'subtract', 'difference', 'minus', 'subtraction',
                'multiply', 'product', 'times', 'multiplication',],
        }));
    }
    if (!result) {
        return (res.status(400).json({
            slackUsername,
            error: 'Input Specified Should Be An Integer',
        }));
    }
    return (res.status(200).json({
        slackUsername,
        result,
        operation_type,
    }));
}

// Export HTTP Post worker..
module.exports = httpPostWorker;