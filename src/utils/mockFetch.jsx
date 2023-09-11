export const products =  [
    {id: 1, name: 'Producto1',category: 'gorras', price:1000, stock:500, description:'Loren ipsum', imageUrl:'https://img.kwcdn.com/product/1d14c6c0aea/fa0db9f6-bd24-41c0-b9b1-c356cc27c104_800x800.jpeg?imageView2/2/w/800/q/70/format/webp' },
    {id: 2, name: 'Producto2',category: 'remeras', price:1200, stock:700, description:'Loren ipsum', imageUrl:'https://d2r9epyceweg5n.cloudfront.net/stores/001/328/585/products/back-to-the-future-04-negro1-188ad2d8b3bb08248116282562217507-1024-1024.jpg' },
    {id: 3, name: 'Producto3',category: 'gorras', price:1300, stock:5500, description:'Loren ipsum', imageUrl:'https://img.kwcdn.com/product/1d14c6c0aea/fa0db9f6-bd24-41c0-b9b1-c356cc27c104_800x800.jpeg?imageView2/2/w/800/q/70/format/webp' },
    {id: 4, name: 'Producto4',category: 'remeras', price:1400, stock:800, description:'Loren ipsum', imageUrl:'https://d2r9epyceweg5n.cloudfront.net/stores/001/328/585/products/back-to-the-future-04-negro1-188ad2d8b3bb08248116282562217507-1024-1024.jpg' },
    {id: 5, name: 'Producto5',category: 'gorras', price:1500, stock:5250, description:'Loren ipsum', imageUrl:'https://img.kwcdn.com/product/1d14c6c0aea/fa0db9f6-bd24-41c0-b9b1-c356cc27c104_800x800.jpeg?imageView2/2/w/800/q/70/format/webp' },
    
]

export const mFetch = (pid) => new Promise((res, rej)=>{
   
        setTimeout(()=>{ 
            res(pid ? products.find(product => product.id === pid) : products)
         }, 1000)

    })