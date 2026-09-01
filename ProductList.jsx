import React, { useState } from "react";
import { Link } from "react-router-dom";

const plants = [
  {id:1,name:"Snake Plant",price:299,category:"Air Purifying"},
  {id:2,name:"Peace Lily",price:399,category:"Air Purifying"},
  {id:3,name:"Spider Plant",price:249,category:"Air Purifying"},
  {id:4,name:"ZZ Plant",price:499,category:"Air Purifying"},
  {id:5,name:"Aloe Vera",price:199,category:"Air Purifying"},
  {id:6,name:"Rubber Plant",price:599,category:"Air Purifying"},

  {id:7,name:"Cactus",price:199,category:"Succulents"},
  {id:8,name:"Jade Plant",price:249,category:"Succulents"},
  {id:9,name:"Echeveria",price:299,category:"Succulents"},
  {id:10,name:"Haworthia",price:349,category:"Succulents"},
  {id:11,name:"Sedum",price:219,category:"Succulents"},
  {id:12,name:"Burro Tail",price:379,category:"Succulents"},

  {id:13,name:"Monstera",price:699,category:"Tropical"},
  {id:14,name:"Pothos",price:299,category:"Tropical"},
  {id:15,name:"Areca Palm",price:899,category:"Tropical"},
  {id:16,name:"Fiddle Leaf Fig",price:999,category:"Tropical"},
  {id:17,name:"Bird of Paradise",price:1099,category:"Tropical"},
  {id:18,name:"Philodendron",price:549,category:"Tropical"},
];

export default function ProductList() {

const [added,setAdded]=useState({});
const [count,setCount]=useState(0);

const categories=["Air Purifying","Succulents","Tropical"];

const add=id=>{
setAdded({...added,[id]:true});
setCount(count+1);
};

return(
<div>

<nav style={{display:"flex",justifyContent:"space-between",padding:20,background:"#2e8b57",color:"white"}}>
<div>Paradise Nursery</div>

<div style={{display:"flex",gap:20}}>
<Link to="/" style={{color:"white"}}>Home</Link>
<Link to="/plants" style={{color:"white"}}>Plants</Link>
<Link to="/cart" style={{color:"white"}}>Cart ({count})</Link>
</div>

</nav>

<div style={{padding:30}}>

{categories.map(cat=>(

<div key={cat} style={{marginBottom:40}}>

<h2>{cat}</h2>

<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>

{plants.filter(p=>p.category===cat).map(plant=>(

<div key={plant.id} style={{border:"1px solid #ddd",padding:15,textAlign:"center"}}>

<img
src="https://images.unsplash.com/photo-1463320726281-696a485928c7"
alt={plant.name}
style={{width:"100%",height:180,objectFit:"cover"}}
/>

<h3>{plant.name}</h3>

<p>₹{plant.price}</p>

<button
disabled={added[plant.id]}
onClick={()=>add(plant.id)}
style={{padding:"10px 20px"}}
>

{added[plant.id]?"Added":"Add to Cart"}

</button>

</div>

))}

</div>

</div>

))}

</div>

</div>
);

}
