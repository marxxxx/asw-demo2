module.exports = async function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: [{id: 1, title: 'do something' }]
    };
};