import Image from "next/image";
import Link from "next/link";
import ronaldo from '../../../../public/ronaldo.jpg';

const getData = async (id) => {
  const request = await fetch(`https://dummyjson.com/products/` + id);

  const data = await request.json();

  return data;
};

async function Product({ params }) {
  const product = await getData(params.id);
  
  return (
    <div className="align-elements mt-16">
        <Link href={'/products'}>Product Page Back</Link>
      <div className="card lg:card-side bg-slate-700 text-slate-200  glass shadow-xl">
        <figure>
        <Image
        className="rounded-lg"
            src={product.images}
            alt={product.title} 
            width={1000} 
            height={1000}
          />
        </figure>
        <div className="card-body">
          <h2 className="mb-4 card-title">{product.title}</h2>
          <p className = 'mb-4 font-semibold'>{product.description}</p>
          <p className="font-bold">Price : {product.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Bag</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
