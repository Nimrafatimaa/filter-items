import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import './App.css'

const Gallery = () => {
    const [item, setitem] = useState(Data);
    const [searchTerm, setSearchTerm] = useState("");
    const filterItem = (categ) => {
        const updated = Data.filter((curElm) => {
            return curElm.category === categ
        });
        setitem(updated);
    }
    return (
        <>
              
                <div className="mt-5 text-center main-heading">
                    <input className='box px-5 py-2 rounded' type="text" placeholder='Search here..' onChange={(event) => { setSearchTerm(event.target.value) }} />
                </div>
             
    
            <h1 className="mt-3 text-center main-heading">Order your favourite dish</h1>
            <hr />
            <div className="menu-tabs container mt-4">
                <div className='menu-tab d-flex justify-content-around'>
                    <button className='btn btn-warning' onClick={() => filterItem('Burger')}>Burger</button>
                    <button className='btn btn-warning' onClick={() => filterItem('Pizza')}>Pizza</button>
                    <button className='btn btn-warning' onClick={() => filterItem('Sandwiches')}>Sandwiches</button>
                    <button className='btn btn-warning' onClick={() => filterItem('Pasta')}>Pasta</button>
                    <button className='btn btn-warning' onClick={() => setitem(Data)}>All</button>
                </div>
            </div>
            <div className="menu-items container-fluid">
                <div className="row">
                    <div className='col-11 mx-auto'>
                        <div className="row my-5">

                            {
                               
                                item.filter((elem)=>{
                                    if(searchTerm == ""){
                                        return elem;
                                    }else if(elem.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return elem;
                                    }
                                })
                               

                                .map((elem) => {
                                    const { id, title, price, img, desc } = elem;
                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <div className="row Item-inside">
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={elem.img} alt="menuPic" className='img-fluid w-100 h-75' />
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{elem.title}</h1>
                                                        <p>{elem.desc}</p>
                                                    </div>
                                                    <div className="menu-price-book ">
                                                        <div className="price-book-divide d-flex justify-content-between">
                                                            <h2>{elem.price}</h2>
                                                            <a href="#"><button className='btn btn-primary'>Order now</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;