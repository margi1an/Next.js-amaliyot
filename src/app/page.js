
import Link from "next/link";

const getData = async () => {
  const request = await fetch("https://dummyjson.com/products?limit=3");

  const data = await request.json();

  return data;
};
async function Home() {
  const { products } = await getData();

  return (
    <div className="align-elements flex ">
      {products.map((product) => {
        return (
          <Link href={`singleProduct/${product.id}`}>
            <div className=" w-96 flex gap-10 mb-4 mt-9 " key={product.id}>
              <div className="ml-10 card w-96 flex gap-10  bg-slate-600 text-slate-300 glass w-86">
                <figure>
                  <img src={product.thumbnail} alt="car!" className="h-56" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">More</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
