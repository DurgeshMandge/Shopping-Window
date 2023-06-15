import { useState } from "react";
import {shopItemsData} from "../constants.js";



const ClothCard = ({name,color,price,desc,img}) =>{
    return (
        <div className="card cloth-card">
            <img src= {img} />
            <h4>{name}</h4>
            <h5>{price}</h5>
            <h6>{desc}</h6>
            <h6>{color}</h6>
        </div>
    );
}


        //1. Hooks
        //2. Onchange Functionality (update searchText -> e.target.value)
        //3. Onclick functionality  (update restList -> filter data)
        //4. Mapping Functionality
        //5. Filtering Functionality
        //6. Handle Exception
        //7. Shimmer Effect
        //8. Conditional Rendering -> Shimmer effect
        
const Body = () =>{


    // useEffect(()=>{
    //     getRestaurents();         //API call
    // },[]);

    // async function getRestaurents(){
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5602455&lng=73.8338196&page_type=DESKTOP_WEB_LISTING");
    //     const jsonD = await data.json();
    //     jsonD.setAttribute('crossOrigin', '');        
    //     console.log(jsonD);
    // }




    //---->     Filtering Functionality

    function filterClothData(shopData,searchText){
        return (shopData.filter((shop)=>shop.desc.includes(searchText)));
    }



    //---->     Hooks

    const [searchText,setSearchText]=useState("");
    const [option1,setOption1]=useState("Option1");

    const [shopData,setShopData]=useState(shopItemsData);
    const [filteredShopData,setFilteredShopData]=useState(shopData);


    return (
    <div className="container">
        <div className="search">
            <input 
                type="text"
            placeholder="search"
            value={searchText}

            //---->   Onchange Functionality

            onChange={(e)=>{
                setSearchText(e.target.value);
                }}
            />

            <button type="submit"

                //---->      Onclick functionality

                onClick={
                    ()=>{
                        setFilteredShopData(filterClothData(shopData,searchText));
                }}
            >Search</button>
        </div>

        {/* <div>
            <select id="dropdown">
                <option value={option1}>Option 1</option>
                
                <option value={filterD}>Option 2</option>
                <option value={filterD}>Option 3</option>
                <option value={filterD}>Option 4</option>
            </select>
            <button
                onClick={console.log(value)}
            >Apply</button>
        </div> */}

        <div className="cardList ">

            {/*  //----> Mapping Functionality                                  */}
            {   
                filteredShopData.map((item)=>{
                    return (<ClothCard key={item.id} {...item} />);
                })
           }

        </div>
    
    </div>
    );
}

export default Body;
