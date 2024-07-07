import Image from "next/image";
import Link from "next/link";
import ronaldo from "../../../../public/ronaldo.jpg";

const getData = async (id) => {
  const request = await fetch(`https://dummyjson.com/products/` + id);

  const data = await request.json();

  return data;
};

async function Product({ params }) {
  const product = await getData(params.id);
  console.log(product);

  if (!product) {
    return (
      <div className="align-elements ml-48 mt-48">
        <span className="loading ml-96 pl-10 loading-dots w-32 loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="align-elements mt-16">
      <Link href={"/products"}>
        <button className="btn btn-primary mb-4">Product Page Back ✋</button>
      </Link>
      <div className="card lg:card-side bg-slate-700 text-slate-200  glass shadow-xl">
        <div  className="rounded-lg">
        <figure>
          <img src={product.thumbnail} alt={product.title} className="h-96 " />
        </figure>
        </div>
        <div className="card-body">
          <h2 className="mb-4 card-title">{product.title}</h2>
          <p className="mb-4 font-semibold">{product.description}</p>
          <p className="font-bold">Price : {product.price} $</p>
          <p className="font-semibold">Category : {product.category}</p>
          <p className="font-semibold">Brand : {product.brand}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Bag</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
