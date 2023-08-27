import Image from "next/image";

async function shoppingList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const ShoppingList = async () => {
  let products = await shoppingList();
  // console.log("Products list ==> ", products);
  return (
    <>
      <h2>Shopping List - Server side rendering</h2>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400">
          {products.map((product) => {
            return (
              <div
                class="max-w-sm rounded overflow-hidden shadow-lg w-1/2 bg-gray-400 h-12"
                key={product.id}
              >
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
