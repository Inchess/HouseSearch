const browser = require('./browser');

async function initClient() {
    const client = await browser.create();
    const page = await client.newPage();
    return [client, page, browser];
}

module.exports = {
    initClient,
}