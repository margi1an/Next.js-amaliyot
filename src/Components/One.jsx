import Link from "next/link";
import "./One.css";
const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");

  const data = await request.json();

  return data;
};
async function One() {
  const { products } = await getData();

  return (
    <div className="align-elements">
      {products.map((product) => {
        return (
          <Link href={`singleProduct/${product.id}`}>
            <div className="mt-9 ml-26" key={product.id}>
              <div className=" ml-28 bg-slate-700 text-slate-300 d-flex card glass w-96">
                <figure>
                  <img src={product.thumbnail} alt="car!" className="h-56" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
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

export default One;
