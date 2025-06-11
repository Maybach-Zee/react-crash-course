import { Fragment } from 'react/jsx-runtime';
import { ProductList } from './components/ProductList'; 
import './App.css';
import ProductCard from './components/ProductCard';

function App() {

   const product = [
    
    {
        name: "Iphone 16 Pro",
        price: 23000,
        imageSrc: "images/phonee.jpg",
        specifications: ["6.1-inch Super Retina XDR display",
            "A17 Pro chip with 6-core CPU and 6-core GPU",
            "Triple-camera system with 48MP main camera",
            "Up to 1TB storage option"
        ],

      },

    {

        name: "Samsung Galaxy S23 Ultra",
        price: 22000,
        imageSrc: "images/SAMSUNG S23 Ultra.jpg",
        specifications: ["6.8-inch Dynamic AMOLED 2X display",
            "Snapdragon 8 Gen 2 processor",
            "Quad-camera system with 200MP main camera",
            "Up to 1TB storage option"
        ],
    },  

    {

        name: "Google Pixel 8 Pro",
        price: 15000,
        imageSrc: "images/Google Pixel 8 Pro.jpg",
        specifications: ["6.7-inch LTPO OLED display",
            "Google Tensor G3 chip",
            "Triple-camera system with 50MP main camera",
            "Up to 512GB storage option"
        ]
    }];

    function handlePurchase(product) {
      alert(`You clicked on ${product.name} with price ${product.price}`);
    }

  return (
    <div className="App">
      <ProductList>

        {product.map((product) => (
          
          <ProductCard product={product} key={product.name} onPurchase={handlePurchase}/>

      ))}
      </ProductList>

      <h2>Products that cost up to R20000</h2>
  
        {product
        .filter(({price}) => price < 20000)
        .map(({name, price}) => (

        <Fragment key={name}>
        <hr style={{borderColor: "slategray"}}/>
        <p> 
          {name} cost R{price} 
        </p>
        </Fragment>
      ))}
          

    </div>
  );
}

export default App;
