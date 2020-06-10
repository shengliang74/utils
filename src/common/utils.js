export function isEmptyJson(data) {
    return JSON.stringify(data) === '{}';
};
let util = {};
module.exports.util = util