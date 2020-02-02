module.exports = [
    {
        name: 'OLX',
        urls: {
            mieszkania: 'https://www.olx.pl/nieruchomosci/mieszkania/gliwice/?search%5Bfilter_float_price%3Afrom%5D=100000&search%5Bfilter_float_price%3Ato%5D=530000&search%5Bfilter_float_m%3Afrom%5D=65',
            domy: 'https://www.olx.pl/nieruchomosci/domy/gliwice/?search%5Bfilter_float_price%3Afrom%5D=100000&search%5Bfilter_float_price%3Ato%5D=530000&search%5Bfilter_float_m%3Afrom%5D=65',
        },
        flatsSelector: '#body-container .rel.listHandler .wrap .offer-wrapper table',
        idAttribute: 'data-id',
        // idSelector & priceSelector & urlSelector are steps down from flatsSelector
        idSelector: '',
        priceSelector: '.price>strong',
        urlSelector: '.lheight22.margintop5>a',
        urlAttribute: 'href',
        priceLimit: '',
    },
    // {
    //     name: 'Gratka',
    //     urls: {
    //         mieszkania: 'https://gratka.pl/nieruchomosci/mieszkania/gliwice/sprzedaz?cena-calkowita:min=100000&rynek=wtorny&powierzchnia-w-m2:min=65&cena-calkowita:max=530000',
    //         domy: 'https://gratka.pl/nieruchomosci/domy/gliwice/sprzedaz?cena-calkowita:min=100000&rynek=wtorny&powierzchnia-w-m2:min=65&cena-calkowita:max=530000',
    //     },
    //     flatsSelector: '.content__listing>article',
    //     idAttribute: 'id',
    //     // idSelector & priceSelector & urlSelector are steps down from flatsSelector
    //     idSelector: '',
    //     priceSelector: '.teaser__price',
    //     urlSelector: '',
    //     urlAttribute: 'data-href',
    //     priceLimit: '',
    // },
    // {
    //     name: 'OtoDom',
    //     urls: {
    //         mieszkania: 'https://www.otodom.pl/sprzedaz/mieszkanie/gliwice/?search%5Bfilter_float_price%3Afrom%5D=100000&search%5Bfilter_float_price%3Ato%5D=530000&search%5Bfilter_float_m%3Afrom%5D=65&search%5Bfilter_enum_market%5D%5B0%5D=secondary&search%5Bdescription%5D=1&search%5Bdist%5D=0&search%5Bsubregion_id%5D=447&search%5Bcity_id%5D=175&search%5Border%5D=created_at_first%3Adesc',
    //         domy: 'https://www.otodom.pl/sprzedaz/dom/gliwice/?search%5Bfilter_float_price%3Afrom%5D=100000&search%5Bfilter_float_price%3Ato%5D=530000&search%5Bfilter_float_m%3Afrom%5D=65&search%5Bfilter_enum_market%5D%5B0%5D=secondary&search%5Bdescription%5D=1&search%5Bdist%5D=0&search%5Bsubregion_id%5D=447&search%5Bcity_id%5D=175&search%5Border%5D=created_at_first%3Adesc',
    //     },
    //     flatsSelector: '.col-md-content>article',
    //     idAttribute: 'data-item-id',
    //     // idSelector & priceSelector & urlSelector are steps down from flatsSelector
    //     idSelector: '',
    //     priceSelector: '.offer-item-price',
    //     urlSelector: '',
    //     urlAttribute: 'data-url',
    //     priceLimit: '',
    // },
]
