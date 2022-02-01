import React, {useState,useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action';

export default function Product() {

    const {id} = useParams();
    const [product, setProduct]= useState([]);
    const [loading, setLoading]= useState(false);

    const dispatch = useDispatch();

    const addproduct = (product) =>{
        dispatch(addItem(product));
    };

    useEffect(() =>{
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products/"+id);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();

    },[]);

    const Loading = () =>{
        return (
            <>
               <div className="col-md-6">
                   <Skeleton height={400}/>
               </div>
               <div className="col-md-6">
                   <Skeleton height={50} width={300}/>
                   <Skeleton height={75}/>
                   <Skeleton height={25} width={100}/>
                   <Skeleton height={50} />
                   <Skeleton height={150}/>
                   <Skeleton height={50} width={100}/>
                   <Skeleton height={50} width={100}/>
               </div>
            </>
        );
    }

    const ShowProduct= () =>{
        return(
            <>
                <div className="col-md-6" key={product.id}>
                    <img src={product.image} alt={product.title} height={400} width={400}/>
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-border'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bolder'>
                        $ {product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addproduct(product)}>
                        Add to cart
                    </button>
                    <NavLink to={'/cart'} className='btn btn-dark ms-2 px-3 py-2'>
                        Go to cart
                    </NavLink>
                </div>
            </>
        );
    }
  return (
    <div className='container py-2'>
        <div className="row py-4">
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
    </div>

  );
}
