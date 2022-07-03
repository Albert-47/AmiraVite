


const merch = [
    {
        name: 'Zapatos',
        items: [
            {name: 'Nike shoes', sizes: '38-42', price: '20$', img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png'},
            {name: 'Nike shoe', sizes: '38-42', price: '20$', img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png'},
            {name: 'Nike sho', sizes: '38-42', price: '20$', img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png'}
        ]
    },
    {
        name: 'Carteras',
        items: [
            {name: 'Beautiful cartera', img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DLMS5Z8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=carterasco-20&language=es_US'},
            {name: 'Beautiful carter', img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DLMS5Z8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=carterasco-20&language=es_US'},
            {name: 'Beautiful carte', img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DLMS5Z8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=carterasco-20&language=es_US'}
        ]
    },
    {
        name: 'Morrales',
        items: [
            {name: 'morral chido', img: 'https://http2.mlstatic.com/D_NQ_NP_633700-MLV47637622028_092021-W.jpg'},
            {name: 'morral chi', img: 'https://http2.mlstatic.com/D_NQ_NP_633700-MLV47637622028_092021-W.jpg'},
            {name: 'morral chio', img: 'https://http2.mlstatic.com/D_NQ_NP_633700-MLV47637622028_092021-W.jpg'}
        ]
    },
    {
        name: 'Aloas',
        items: [
            {name: 'aloas místicas', img: 'https://http2.mlstatic.com/D_NQ_NP_648115-MLV25153245460_112016-O.jpg'},
            {name: 'aloas mística', img: 'https://http2.mlstatic.com/D_NQ_NP_648115-MLV25153245460_112016-O.jpg'},
            {name: 'aloas místic', img: 'https://http2.mlstatic.com/D_NQ_NP_648115-MLV25153245460_112016-O.jpg'}
        ]
    },
    {
        name: 'Camisas',
        items: [
            {name: 'camisa tommy', img: 'https://i.pinimg.com/originals/2b/4e/6a/2b4e6a2339c0ebf62dc38a251c53121a.jpg'},
            {name: 'camisa tomm', img: 'https://i.pinimg.com/originals/2b/4e/6a/2b4e6a2339c0ebf62dc38a251c53121a.jpg'},
            {name: 'camisa tom', img: 'https://i.pinimg.com/originals/2b/4e/6a/2b4e6a2339c0ebf62dc38a251c53121a.jpg'}
        ]
    },
    {
        name: 'Pantalones',
        items: [
            {name: 'pantalones máximos', img: 'https://tommycolombia.vteximg.com.br/arquivos/ids/212899-500-667/DM0DM09595_RBL_2.jpg?v=637708783904770000'},
            {name: 'pantalones máximo', img: 'https://tommycolombia.vteximg.com.br/arquivos/ids/212899-500-667/DM0DM09595_RBL_2.jpg?v=637708783904770000'},
            {name: 'pantalones máxim', img: 'https://tommycolombia.vteximg.com.br/arquivos/ids/212899-500-667/DM0DM09595_RBL_2.jpg?v=637708783904770000'}
        ]
    }
]

export const getMerch = () => merch;

export const getCategoryData = ( category ) => {
   return merch.find( cat => cat.name === category );
}

