"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    try {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      console.log("List ==> ", data.products);
      setProductList(data.products);
    } catch (err) {
      console.log("Error ==> ", err);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);
  return (
    <>
      <div>
        <h2>Product list - Client Side Rendering</h2>
        <div class="flex mb-4">
          {productList.map((product) => {
            return (
              <>
                <div class="max-w-sm rounded overflow-hidden shadow-lg w-1/2 bg-gray-400 h-12">
                  <Image
                    class="w-full"
                    src={product.thumbnail}
                    alt="Sunset in the mountains"
                    width={200}
                    height={200}
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  {/* <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
