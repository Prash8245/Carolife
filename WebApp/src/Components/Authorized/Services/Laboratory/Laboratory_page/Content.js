import React from 'react'
import data from './laboratory.json' ;
import labimage from './images/labimage.jpg';
import {Link} from 'react-router-dom';

export default function Content() {
  return (
    <div>
        <img className="object-cover max-h-52 w-screen" alt="hero" src={labimage}/>
        <br/>
        <section className="text-gray-600 body-font">
       <h2 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><b>Laboratory</b></h2>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Precision Insight: "Journey Through the Medical Laboratory"</h1>
                    {/* <div className="h-1 w-20 bg-indigo-500 rounded"></div> */}
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">"In the quiet precision of a medical laboratory, every test becomes a beacon of knowledge, illuminating the path to diagnosis and healing."</p>
                </div>
                <div className="flex flex-wrap -m-4">
                {
                    data.map((elements)=>{
                        return(
                            < Link to="/lab-info" state={elements} className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-50 object-cover object-center mb-6" style={{width : "250px"} } src={elements.thumbnail} alt="content"/>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{elements.name}</h3>
                                <p className="leading-relaxed text-base">{elements.address.slice(0,50)}...</p> 
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">&#9733; {elements.rating}</h2>
                                {/* <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
                            </div>
                            </Link>
                        )
                    })
                }
                </div>
            </div>
    </section>
        </div>
  )
}
