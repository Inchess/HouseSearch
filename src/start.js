let baseData = require('./baseData')
let utils = require('./utils');

// opn('https://onet.pl', {app: 'firefox'})
let client;
let page;
console.log('======================')
console.log(baseData[0].name);
// console.log(baseData[0].urls);
// console.log(baseData[0].urls.mieszkania);
init = async () => {
    [client, page] = await utils.initClient();
    await page.goto(baseData[0].urls.mieszkania, {
        timeout: 20000,
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    })
    const flats = await getAllElements(page, '#body-container .rel.listHandler .wrap .offer-wrapper table');
    console.log(flats);
}
init();

async function getAllElements(page, elementsSelector) {
    return page.evaluate(selector => Array.from(
        document.querySelectorAll(selector), el => el,
    ), elementsSelector);
}


// getElements = async (elementsSelector) => {
//     console.log('INSIDE');
//     const flats = await page.evaluate(async function(selector) {
//         console.log(selector)
//         const aaa = await document.querySelector(selector)
//         console.log('aaa', aaa)
//         return aaa;
//     }, elementsSelector)
//     return flats;
// }

