import React, {useState, useEffect} from 'react';
import Product from './Product';

const  Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log('mounted')
    },[])

    return (
        <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8">
          <div className="grid grid-cols-5 my-8 gap-24">
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
          </div>
        </h1>
      </div>
    )
}

export default Products;
