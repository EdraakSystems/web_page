
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Forent() {
//   const initialProduct = {
//     name: '',
//     pagetitle: '',
//     category: '',
//     productidentifier: '',
//     productDescription: '',
//     publish_date: '',
//     publish_time: '',
//     image: ''
//   };
//   const [product, setProduct] = useState(initialProduct);
//   const [mode, setMode] = useState('add');
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('http://localhost:3000/products');
//         setProducts(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (mode === 'add') {
//       try {
//         const response = await axios.post('http://localhost:3000/products', product);
//         setProducts([...products, response.data]);
//         setProduct(initialProduct);
//       } catch (err) {
//         console.error(err);
//       }

//     } else if (mode === 'edit') {
//       try {
//         const res = await axios.put(`http://localhost:3000/products/${product._id}`, product);
//         const updatedProducts = products.map(p => p._id === product._id ? res.data : p);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     } else if (mode === 'delete') {
//       try {
//         const res = await axios.delete(`http://localhost:3000/products/${product._id}`);
//         const updatedProducts = products.filter(p => p._id !== product._id);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const handleEdit = (p) => {
//     setProduct(p);
//     setMode('edit');
//   };

//   const handleDelete = (p) => {
//     setProduct(p);
//     setMode('delete');
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setProduct({ ...product, [name]: value });
//   };


//   return (
//     <div>
//       <nav>
//         <h1>Create Product</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" required value={product.name} onChange={handleChange} />

//           <label htmlFor="pagetitle">Page Title:</label>
//           <input type="text" name="pagetitle" required value={product.pagetitle} onChange={handleChange} />

//           <label htmlFor="category">Category:</label>
//           <select name="category" required value={product.category} onChange={handleChange}>
//             <option value="">--Please choose an option--</option>
//             <option value="toys">Toys</option>
//             <option value="watches">Watches</option>
//             <option value="laptop">Laptop</option>
//             <option value="clothes">Clothes</option>
//             <option value="cosmetics">Cosmetics</option>
//           </select>











//           <label htmlFor="productidentifier">Product Identifier URL:</label>

//           <input type="text" name="productidentifier" onChange={handleChange} />

//           <label htmlFor="productDescription">Product Description:</label>
//           <textarea name="productDescription" required onChange={handleChange}></textarea>

//           <label htmlFor="publish_date">Publish Date:</label>
//           <input type="date" name="publish_date" required onChange={handleChange} />

//           <label htmlFor="publish_time">Publish Time:</label>
//           <input type="time" name="publish_time" required onChange={handleChange} />

//           <label htmlFor="image">Image URL:</label>
//           <input type="text" name="image" required onChange={handleChange} />

//           <button type="submit">{mode === 'add' ? 'Create' : mode === 'edit' ? 'Save' : 'Delete'}</button>
//           {mode === 'edit' || mode === 'delete' ? (
//             <button type="button" onClick={() => {
//               setMode('add');
//               setProduct(initialProduct);
//             }}>Cancel</button>
//           ) : null}
//           {mode === 'add' ? (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Page Title</th>
//                   <th>Category</th>
//                   <th>Product Identifier URL</th>
//                   <th>Product Description</th>
//                   <th>Publish Date</th>
//                   <th>Publish Time</th>
//                   <th>Image URL</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map(p => (
//                   <tr key={p._id}>
//                     <td>{p.name}</td>
//                     <td>{p.pagetitle}</td>
//                     <td>{p.category}</td>
//                     <td>{p.productidentifier}</td>
//                     <td>{p.productDescription}</td>
//                     <td>{p.publish_date}</td>
//                     <td>{p.publish_time}</td>
//                     <td>{p.image}</td>
//                     <td>
//                       <button type="button" onClick={() => handleEdit(p)}>Edit</button>
//                       <button type="button" onClick={() => handleDelete(p)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : null}
//         </form>
//       </nav>
//     </div>
//   )}

    








































//no

  
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Forent() {
//   const initialProduct = {
//     name: '',
//     pagetitle: '',
//     category: '',
//     productidentifier: '',
//     productDescription: '',
//     publish_date: '',
//     publish_time: '',
//     image: ''
//   };
//   const [product, setProduct] = useState(initialProduct);
//   const [mode, setMode] = useState('add');
//   const [products, setProducts] = useState([]);
//   const [customCategory, setCustomCategory] = useState('');
 
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('http://localhost:3000/products');
//         setProducts(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (mode === 'add') {
//       try {
//         const response = await axios.post('http://localhost:3000/products', {
//           ...product,
//           category: product.category === 'custom' ? customCategory : product.category
          
          
//         });
//         setProducts([...products, response.data]);
//         setProduct(initialProduct);
//         setCustomCategory('');
//       } catch (err) {
//         console.error(err);
//       }

//     } else if (mode === 'edit') {
//       try {
//         const res = await axios.put(`http://localhost:3000/products/${product._id}`, product);
//         const updatedProducts = products.map(p => p._id === product._id ? res.data : p);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     } else if (mode === 'delete') {
//       try {
//         const res = await axios.delete(`http://localhost:3000/products/${product._id}`);
//         const updatedProducts = products.filter(p => p._id !== product._id);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const handleEdit = (p) => {
//     setProduct(p);
//     setMode('edit');
//   };

//   const handleDelete = (p) => {
//     setProduct(p);
//     setMode('delete');
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'category') {
//       if (value === 'custom') {
//         setProduct({ ...product, category: value });
//       } else {
//         setProduct({ ...product, category: value, category_value: '' });
//       }
//     } else if (name === 'category_value') {
//       setCustomCategory(value);
//     } else {
//       setProduct({ ...product, [name]: value });
//     }
//   };



//   return (
//     <div>
//       <nav>
//         <h1>Create Product</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" required value={product.name} onChange={handleChange} />

//           <label htmlFor="pagetitle">Page Title:</label>
//           <input type="text" name="pagetitle" required value={product.pagetitle} onChange={handleChange} />

//           <label htmlFor="category">Category:</label>
// <select name="category" required value={product.category} onChange={handleChange}>
//   <option value="">--Please choose an option--</option>
//   <option value="toys">Toys</option>
//   <option value="watches">Watches</option>
//   <option value="laptop">Laptop</option>
//   <option value="clothes">Clothes</option>
//   <option value="cosmetics">Cosmetics</option>
//   <option value="custom">Custom</option> // add a custom option
// </select>    
// {product.category === 'custom' && ( // show the input field only if the custom option is selected
//   <div>
//     <label htmlFor="category_value">Custom Category:</label>
//     <input type="text" name="category_value" onChange={handleChange} />
//   </div>
// )}







//           <label htmlFor="productidentifier">Product Identifier URL:</label>

//           <input type="text" name="productidentifier" onChange={handleChange} />

//           <label htmlFor="productDescription">Product Description:</label>
//           <textarea name="productDescription" required onChange={handleChange}></textarea>

//           <label htmlFor="publish_date">Publish Date:</label>
//           <input type="date" name="publish_date" required onChange={handleChange} />

//           <label htmlFor="publish_time">Publish Time:</label>
//           <input type="time" name="publish_time" required onChange={handleChange} />

//           <label htmlFor="image">Image URL:</label>
//           <input type="text" name="image" required onChange={handleChange} />

//           <button type="submit">{mode === 'add' ? 'Create' : mode === 'edit' ? 'Save' : 'Delete'}</button>
//           {mode === 'edit' || mode === 'delete' ? (
//             <button type="button" onClick={() => {
//               setMode('add');
//               setProduct(initialProduct);
//             }}>Cancel</button>
//           ) : null}
//           {mode === 'add' ? (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Page Title</th>
//                   <th>Category</th>
//                   <th>Product Identifier URL</th>
//                   <th>Product Description</th>
//                   <th>Publish Date</th>
//                   <th>Publish Time</th>
//                   <th>Image URL</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map(p => (
//                   <tr key={p._id}>
//                     <td>{p.name}</td>
//                     <td>{p.pagetitle}</td>
//                     <td>{p.category}</td>
//                     <td>{p.productidentifier}</td>
//                     <td>{p.productDescription}</td>
//                     <td>{p.publish_date}</td>
//                     <td>{p.publish_time}</td>
//                     <td>{p.image}</td>
//                     <td>
//                       <button type="button" onClick={() => handleEdit(p)}>Edit</button>
//                       <button type="button" onClick={() => handleDelete(p)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : null}
//         </form>
//       </nav>
//     </div>
//   )}





















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Forent() {

//     const productsss={
//         name: '',
//         price: '',
//         product: '',
//         category_id: 'category._id',
//       };
//       productsss.save();
   


//   const initialProduct = {
//     name: '',
//     pagetitle: '',
//     category: '',
//     productidentifier: '',
//     productDescription: '',
//     publish_date: '',
//     publish_time: '',
//     image: ''
//   };
//   const [product, setProduct] = useState(initialProduct);
//   const [mode, setMode] = useState('add');
//   const [products, setProducts] = useState([]);
//   const [customCategory, setCustomCategory] = useState('');
//   const[productss, setProductss] =useState(Productsss); 
//   useEffect(() => {



   
//     async function fetchData() {
//       try {
//         const response = await axios.get('http://localhost:3000/products');
//         setProducts(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (mode === 'add') {
//       try {
//         const response = await axios.post('http://localhost:3000/products', {
//           ...product,
//           category: product.category === 'custom' ? customCategory : product.category,
         
          
//         });
//         setProductsso([...setproductsso.response.data]);
//         setProductss(productsss)
//         setProducts([...products, response.data]);
//         setProduct(initialProduct);
//         setCustomCategory('');
//       } catch (err) {
//         console.error(err);
//       }

//     } else if (mode === 'edit') {
//       try {
//         const res = await axios.put(`http://localhost:3000/products/${product._id}`, product);
//         const updatedProducts = products.map(p => p._id === product._id ? res.data : p);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     } else if (mode === 'delete') {
//       try {
//         const res = await axios.delete(`http://localhost:3000/products/${product._id}`);
//         const updatedProducts = products.filter(p => p._id !== product._id);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const handleEdit = (p) => {
//     setProduct(p);
//     setMode('edit');
//   };

//   const handleDelete = (p) => {
//     setProduct(p);
//     setMode('delete');
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'category') {
//       if (value === 'custom') {
//         setProduct({ ...product, category: value });
//       } else {
//         setProduct({ ...product, category: value, category_value: '' });
//       }
//     } else if (name === 'category_value') {
//       setCustomCategory(value);
//     } else {
//       setProduct({ ...product, [name]: value });
//     }
//   };

//   const handleChanging  = (event) => {
//     const { name,price,productid,value } = event.target;
//      if (category === 'productsso'){
//      if (value === 'productss'){
     
//      setProductss({...productss, category: value }); 
//      }else {
//         setProductss({...productss, category: value, category_value: '' });

//      }}
   

//   };

//   return (
//     <div>
//       <nav>
//         <h1>Create Product</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" required value={product.name} onChange={handleChange} />

//           <label htmlFor="pagetitle">Page Title:</label>
//           <input type="text" name="pagetitle" required value={product.pagetitle} onChange={handleChange} />

//           <label htmlFor="category">Category:</label>
// <select name="category" required value={product.category} onChange={handleChange}>
//   <option value="">--Please choose an option--</option>
//   <option value="toys">Toys</option>
//   <option value="watches">Watches</option>
//   <option value="laptop">Laptop</option>
//   <option value="clothes">Clothes</option>
//   <option value="cosmetics">Cosmetics</option>
//   <option value="custom">Custom</option> // add a custom option
// </select>    
// {product.category === 'custom' && ( // show the input field only if the custom option is selected
//   <div>
//     <label htmlFor="category_value">Custom product:</label>
//     <input type="text" name="category_value" onChange={handleChange} />
//   </div>
// )}
// {productss.category === 'toys' && ( // show the input field only if the custom option is selected
//   <div>
//     <label htmlFor="category_value">toys product:</label>
//     <input name="text" price="number" productid="number" type="" name="category_value" onChange={handleChange} />
//   </div>
// )}
// {productss.category === 'watches' && ( // show the input field only if the custom option is selected
//   <div>
//     <label htmlFor="category_value">watches product:</label>
//     <input name="text" price="number" productid="number" type="" name="category_value" onChange={handleChange} />
//   </div>
// )}






//           <label htmlFor="productidentifier">Product Identifier URL:</label>

//           <input type="text" name="productidentifier" onChange={handleChange} />

//           <label htmlFor="productDescription">Product Description:</label>
//           <textarea name="productDescription" required onChange={handleChange}></textarea>

//           <label htmlFor="publish_date">Publish Date:</label>
//           <input type="date" name="publish_date" required onChange={handleChange} />

//           <label htmlFor="publish_time">Publish Time:</label>
//           <input type="time" name="publish_time" required onChange={handleChange} />

//           <label htmlFor="image">Image URL:</label>
//           <input type="text" name="image" required onChange={handleChange} />

//           <button type="submit">{mode === 'add' ? 'Create' : mode === 'edit' ? 'Save' : 'Delete'}</button>
//           {mode === 'edit' || mode === 'delete' ? (
//             <button type="button" onClick={() => {
//               setMode('add');
//               setProduct(initialProduct);
//             }}>Cancel</button>
//           ) : null}
//           {mode === 'add' ? (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Page Title</th>
//                   <th>Category</th>
//                   <th>Product Identifier URL</th>
//                   <th>Product Description</th>
//                   <th>Publish Date</th>
//                   <th>Publish Time</th>
//                   <th>Image URL</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map(p => (
//                   <tr key={p._id}>
//                     <td>{p.name}</td>
//                     <td>{p.pagetitle}</td>
//                     <td>{p.category}</td>
//                     <td>{p.productidentifier}</td>
//                     <td>{p.productDescription}</td>
//                     <td>{p.publish_date}</td>
//                     <td>{p.publish_time}</td>
//                     <td>{p.image}</td>
//                     <td>
//                       <button type="button" onClick={() => handleEdit(p)}>Edit</button>
//                       <button type="button" onClick={() => handleDelete(p)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : null}
//         </form>
//       </nav>
//     </div>
//   )}



































  
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Forent() {
  const initialProduct = {
    name: '',
    pagetitle: '',
    category: '',
    productidentifier: '',
    productDescription: '',
    publish_date: '',
    publish_time: '',
    image: '',
    product: 'id', 
  };
  const [product, setProduct] = useState(initialProduct);
  const [mode, setMode] = useState('add');
  const [products, setProducts] = useState([]);
  const [customCategory, setCustomCategory] = useState('');
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === 'add') {
      try {

        const createPost = async(toys,watches,laptop,clothes, cosmatics,newproductId)=>{
            try{
       const response = await axios.post('/posts', {

        toys,
        watches,
        laptop,
        clothes, 
        cosmatics,
        newproduct: newproductId,

       });
       return response.data;
     } catch(error){

         console.error(error);
       } 

            }

        

        const response = await axios.post('http://localhost:3000/products', {
          ...product,
          category: product.category === 'custom' ? customCategory : product.category
          
          
        });
        setProducts([...products, response.data]);
        setProduct(initialProduct);
        setCustomCategory('');
      } catch (err) {
        console.error(err);
      }

    } else if (mode === 'edit') {
      try {
        const res = await axios.put(`http://localhost:3000/products/${product._id}`, product);
        const updatedProducts = products.map(p => p._id === product._id ? res.data : p);
        setProducts(updatedProducts);
        setMode('add');
        setProduct(initialProduct);
      } catch (err) {
        console.log(err);
      }
    } else if (mode === 'delete') {
      try {
        const res = await axios.delete(`http://localhost:3000/products/${product._id}`);
        const updatedProducts = products.filter(p => p._id !== product._id);
        setProducts(updatedProducts);
        setMode('add');
        setProduct(initialProduct);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEdit = (p) => {
    setProduct(p);
    setMode('edit');
  };

  const handleDelete = (p) => {
    setProduct(p);
    setMode('delete');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'category') {
      if (value === 'custom') {
        setProduct({ ...product, category: value });
      } else {
        setProduct({ ...product, category: value, category_value: '' });
      }
    } else if (name === 'category_value') {
      setCustomCategory(value);
    } else {
      setProduct({ ...product, [name]: value });
    }
  };



  return (
    <div>
      <nav>
        <h1>Create Product</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required value={product.name} onChange={handleChange} />

          <label htmlFor="pagetitle">Page Title:</label>
          <input type="text" name="pagetitle" required value={product.pagetitle} onChange={handleChange} />

          <label htmlFor="category">Category:</label>
<select name="category" required value={product.category} onChange={handleChange}>
  <option value="">--Please choose an option--</option>
  <option value="toys">Toys</option>
  <option value="watches">Watches</option>
  <option value="laptop">Laptop</option>
  <option value="clothes">Clothes</option>
  <option value="cosmetics">Cosmetics</option>
  <option value="custom">Custom</option> // add a custom option
</select>    
{product.category === 'custom' && ( // show the input field only if the custom option is selected
  <div>
    <label htmlFor="category_value">Custom Category:</label>
    <input type="text" name="category_value" onChange={handleChange} />
  </div>
)}







          <label htmlFor="productidentifier">Product Identifier URL:</label>

          <input type="text" name="productidentifier" onChange={handleChange} />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea name="productDescription" required onChange={handleChange}></textarea>

          <label htmlFor="publish_date">Publish Date:</label>
          <input type="date" name="publish_date" required onChange={handleChange} />

          <label htmlFor="publish_time">Publish Time:</label>
          <input type="time" name="publish_time" required onChange={handleChange} />

          <label htmlFor="image">Image URL:</label>
          <input type="text" name="image" required onChange={handleChange} />

          <button type="submit">{mode === 'add' ? 'Create' : mode === 'edit' ? 'Save' : 'Delete'}</button>
          {mode === 'edit' || mode === 'delete' ? (
            <button type="button" onClick={() => {
              setMode('add');
              setProduct(initialProduct);
            }}>Cancel</button>
          ) : null}
          {mode === 'add' ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Page Title</th>
                  <th>Category</th>
                  <th>Product Identifier URL</th>
                  <th>Product Description</th>
                  <th>Publish Date</th>
                  <th>Publish Time</th>
                  <th>Image URL</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.pagetitle}</td>
                    <td>{p.category}</td>
                    <td>{p.productidentifier}</td>
                    <td>{p.productDescription}</td>
                    <td>{p.publish_date}</td>
                    <td>{p.publish_time}</td>
                    <td>{p.image}</td>
                    <td>
                      <button type="button" onClick={() => handleEdit(p)}>Edit</button>
                      <button type="button" onClick={() => handleDelete(p)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </form>
      </nav>
    </div>
  )}



























  









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Forent() {
//   const initialProduct = {
//     name: '',
//     pagetitle: '',
//     category: '',
//     productidentifier: '',
//     productDescription: '',
//     publish_date: '',
//     publish_time: '',
//     image: ''
//   };
//   const [product, setProduct] = useState(initialProduct);
//   const [mode, setMode] = useState('add');
//   const [products, setProducts] = useState([]);
//   const [customCategory, setCustomCategory] = useState('');
 
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('http://localhost:3000/products');
//         setProducts(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (mode === 'add') {
//       try {
//         const response = await axios.post('http://localhost:3000/products', {
//           ...product,
//           category: product.category === 'custom' ? customCategory : product.category
          
          
//         });
//         setProducts([...products, response.data]);
//         setProduct(initialProduct);
//         setCustomCategory('');
//       } catch (err) {
//         console.error(err);
//       }

//     } else if (mode === 'edit') {
//       try {
//         const res = await axios.put(`http://localhost:3000/products/${product._id}`, product);
//         const updatedProducts = products.map(p => p._id === product._id ? res.data : p);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     } else if (mode === 'delete') {
//       try {
//         const res = await axios.delete(`http://localhost:3000/products/${product._id}`);
//         const updatedProducts = products.filter(p => p._id !== product._id);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const handleEdit = (p) => {
//     setProduct(p);
//     setMode('edit');
//   };

//   const handleDelete = (p) => {
//     setProduct(p);
//     setMode('delete');
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'category') {
//       if (value === 'custom') {
//         setProduct({ ...product, category: value });
//       } else {
//         setProduct({ ...product, category: value, category_value: '' });
//       }
//     } else if (name === 'category_value') {
//       setCustomCategory(value);
//     } else {
//       setProduct({ ...product, [name]: value });
//     }
//   };



//   return (
//     <div>
//       <nav>
//         <h1>Create Product</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" required value={product.name} onChange={handleChange} />

//           <label htmlFor="pagetitle">Page Title:</label>
//           <input type="text" name="pagetitle" required value={product.pagetitle} onChange={handleChange} />

//           <label htmlFor="category">Category:</label>
// <select name="category" required value={product.category} onChange={handleChange}>
//   <option value="">--Please choose an option--</option>
//   <option value="toys">Toys</option>
//   <option value="watches">Watches</option>
//   <option value="laptop">Laptop</option>
//   <option value="clothes">Clothes</option>
//   <option value="cosmetics">Cosmetics</option>
//   <option value="custom">Custom</option> // add a custom option
// </select>    
// {product.category === 'custom' && ( // show the input field only if the custom option is selected
//   <div>
//     <label htmlFor="category_value">Custom Category:</label>
//     <input type="text" name="category_value" onChange={handleChange} />
//   </div>
// )}







//           <label htmlFor="productidentifier">Product Identifier URL:</label>

//           <input type="text" name="productidentifier" onChange={handleChange} />

//           <label htmlFor="productDescription">Product Description:</label>
//           <textarea name="productDescription" required onChange={handleChange}></textarea>

//           <label htmlFor="publish_date">Publish Date:</label>
//           <input type="date" name="publish_date" required onChange={handleChange} />

//           <label htmlFor="publish_time">Publish Time:</label>
//           <input type="time" name="publish_time" required onChange={handleChange} />

//           <label htmlFor="image">Image URL:</label>
//           <input type="text" name="image" required onChange={handleChange} />

//           <button type="submit">{mode === 'add' ? 'Create' : mode === 'edit' ? 'Save' : 'Delete'}</button>
//           {mode === 'edit' || mode === 'delete' ? (
//             <button type="button" onClick={() => {
//               setMode('add');
//               setProduct(initialProduct);
//             }}>Cancel</button>
//           ) : null}
//           {mode === 'add' ? (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Page Title</th>
//                   <th>Category</th>
//                   <th>Product Identifier URL</th>
//                   <th>Product Description</th>
//                   <th>Publish Date</th>
//                   <th>Publish Time</th>
//                   <th>Image URL</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map(p => (
//                   <tr key={p._id}>
//                     <td>{p.name}</td>
//                     <td>{p.pagetitle}</td>
//                     <td>{p.category}</td>
//                     <td>{p.productidentifier}</td>
//                     <td>{p.productDescription}</td>
//                     <td>{p.publish_date}</td>
//                     <td>{p.publish_time}</td>
//                     <td>{p.image}</td>
//                     <td>
//                       <button type="button" onClick={() => handleEdit(p)}>Edit</button>
//                       <button type="button" onClick={() => handleDelete(p)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : null}
//         </form>
//       </nav>
//     </div>
//   )}














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Forent() {
//   const initialProduct = {
//     name: '',
//     pagetitle: '',
//     category: '',
//     productidentifier: '',
//     productDescription: '',
//     publish_date: '',
//     publish_time: '',
//     image: ''
//   };
//   const [product, setProduct] = useState(initialProduct);
//   const [mode, setMode] = useState('add');
//   const [products, setProducts] = useState([]);
//   const [customCategory, setCustomCategory] = useState('');
//   const [category, setCategory] = useState('');
//   const [toysCategory, setToysCategory] = useState('');
  
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('http://localhost:3000/products');
//         setProducts(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (mode === 'add') {
//       try {
//         const response = await axios.post('http://localhost:3000/products', {
//           ...product,
//           category: category === 'custom' ? customCategory : category
//         });
//         setProducts([...products, response.data]);
//         setProduct(initialProduct);
//         setCustomCategory('');
//       } catch (err) {
//         console.error(err);
//       }
//     } else if (mode === 'edit') {
//       try {
//         const res = await axios.put(`http://localhost:3000/products/${product._id}`, product);
//         const updatedProducts = products.map(p => p._id === product._id ? res.data : p);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     } else if (mode === 'delete') {
//       try {
//         const res = await axios.delete(`http://localhost:3000/products/${product._id}`);
//         const updatedProducts = products.filter(p => p._id !== product._id);
//         setProducts(updatedProducts);
//         setMode('add');
//         setProduct(initialProduct);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const handleEdit = (p) => {
//     setProduct(p);
//     setMode('edit');
//   };

//   const handleDelete = (p) => {
//     setProduct(p);
//     setMode('delete');
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'category') {
//       setCategory(value);
//       if (toysCategory === value) {
//         setProduct({ ...product, category: value, category_value: '' });
//       } else if (category === 'custom') {
//         setCustomCategory(value);
//       } else {
//         setProduct({ ...product, category: value });
//       }
//     } else if (name === 'category_value') {
//       setCustomCategory(value);
//     } else {
//       setProduct({ ...product, [name]: value });
//     }
//   };

//   return (
//     <div>
//       <nav>
//         <h1>Create Product</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" required value={product.name} onChange={handleChange} />

//           <label htmlFor="pagetitle">Page Title:</label>
//           <input type="text" name="pagetitle" required value={product.pagetitle} onChange={handleChange}/>



//           <label htmlFor="category">Category:</label>
// <select name="category" required value={product.category} onChange={handleChange}>
//   <option value="">--Please choose an option--</option>
//   <option value="toys">Toys</option>
//   <option value="watches">Watches</option>
//   <option value="laptop">Laptop</option>
//   <option value="clothes">Clothes</option>
//   <option value="cosmetics">Cosmetics</option>
//   <option value="custom">Custom</option> // add a custom option
// </select>    
// {product.category === 'custom' && ( // show the input field only if the custom option is selected
//   <div>
//     <label htmlFor="category_value">Custom Category:</label>
//     <input type="text" name="category_value" onChange={handleChange} />
//   </div>
// )}

// {product.category === 'toys' && ( // show the input field only if the custom option is selected
//   <div>
//     <label htmlFor="category_value">Toys Category:</label>
//     <input type="text" name="category_value" onChange={handleChange} />
//   </div>
// )}





//           <label htmlFor="productidentifier">Product Identifier URL:</label>

//           <input type="text" name="productidentifier" onChange={handleChange} />

//           <label htmlFor="productDescription">Product Description:</label>
//           <textarea name="productDescription" required onChange={handleChange}></textarea>

//           <label htmlFor="publish_date">Publish Date:</label>
//           <input type="date" name="publish_date" required onChange={handleChange} />

//           <label htmlFor="publish_time">Publish Time:</label>
//           <input type="time" name="publish_time" required onChange={handleChange} />

//           <label htmlFor="image">Image URL:</label>
//           <input type="text" name="image" required onChange={handleChange} />

//           <button type="submit">{mode === 'add' ? 'Create' : mode === 'edit' ? 'Save' : 'Delete'}</button>
//           {mode === 'edit' || mode === 'delete' ? (
//             <button type="button" onClick={() => {
//               setMode('add');
//               setProduct(initialProduct);
//             }}>Cancel</button>
//           ) : null}
//           {mode === 'add' ? (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Page Title</th>
//                   <th>Category</th>
//                   <th>Product Identifier URL</th>
//                   <th>Product Description</th>
//                   <th>Publish Date</th>
//                   <th>Publish Time</th>
//                   <th>Image URL</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map(p => (
//                   <tr key={p._id}>
//                     <td>{p.name}</td>
//                     <td>{p.pagetitle}</td>
//                     <td>{p.category}</td>
//                     <td>{p.productidentifier}</td>
//                     <td>{p.productDescription}</td>
//                     <td>{p.publish_date}</td>
//                     <td>{p.publish_time}</td>
//                     <td>{p.image}</td>
//                     <td>
//                       <button type="button" onClick={() => handleEdit(p)}>Edit</button>
//                       <button type="button" onClick={() => handleDelete(p)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : null}
//         </form>
//       </nav>
//     </div>
//   )}

