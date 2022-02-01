import React, {useState,useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';


export default function Products() {

    const [data, setData]= useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let mounted = true;

    useEffect(()=>{
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(mounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () =>{
                mounted = false;
            }
        }
        getProduct();
    },[])

    const Loading = () =>{
        return (
            <>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
            </>
        );
    }
    const filterProducts = (cat) =>{
            const updListe = data.filter((x)=>x.category===cat);
            setFilter(updListe);
    }
    const ShowProducts = () =>{
        return(
            <>
                <div className='buttons d-flex justify-content-center mb-5 pd-5'>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProducts("men's clothing")}>Men's Clothings</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProducts("women's clothing")}>Women's Clothings</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProducts("electronics")}>Electronic</button>                  </div>
                {filter.map((products)=>{
                    return(
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4">
                                    <img src={products.image} className="card-img-top" alt={products.title} height={250}/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{products.title.substring(0,12)}</h5>
                                        <p className="card-text lead fw-bolder">
                                            $ {products.price}
                                        </p>
                                        <NavLink to={'/products/'+products.id} className="btn btn-outline-dark">
                                            Buy Now
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
  return (
    <div className='container my-5 py-5'>
        <div className="row">
            <div className="col-12 mb-5">
                <h1 className='display-6 fw-bolder text-center '>Latest Product</h1>
                <hr/>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/>:<ShowProducts/>}
            </div>
        </div>
    </div>
  );
}
