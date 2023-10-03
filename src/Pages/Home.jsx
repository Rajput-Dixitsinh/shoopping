import React, { useEffect, useState } from "react";
import { API_URl } from "../constant";
import Products from "../components/Products";
import Sppiner from "../components/Sppiner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allData, setallData] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URl);
      const data = await res.json();
      console.log(data);
      setallData(data);
    } catch (error) {
      console.log("error");
      setallData([]);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  
  if(allData.length===0){
    return <Sppiner />
  }
  return (



    <div className="">
      <div>
       { (allData.length > 0) ? (
        <div className=" lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-8 grid gap-10 max-w-6xl mx-auto p-5 min-h-[80vh]">
          {allData.map((post) => {
            return <Products key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div className="flex h-full justify-center items-center text-3xl text-green-600 font-bold mt-[15%]">
          Not found
        </div>
       )}
    
    </div>
     </div>
  );
};

export default Home;
