const puppeteer = require('puppeteer');

const create = () => puppeteer.launch({
    headless: false,
});

module.exports = { create };