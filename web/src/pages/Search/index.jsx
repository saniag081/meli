import Layout from "../../components/Layout";
import { getSearchProduct } from '../../slices/productsSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import CardProduct from "../../components/CardProduct";
import './Search.scss';

function Search() {
  const products = useSelector((state) => state.products);
  const [ searchParams ] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = searchParams.get('q');
    if (getProduct != '')
      dispatch(getSearchProduct(getProduct));
  }, [searchParams]);

  return (
    <>
      <Layout>
        <section className="products container">
          <ol className="products__list">
            {products.search.items?.map((product) => (
              <CardProduct
                key={ product.id }
                product={ product }
              />
            ))}
          </ol>
        </section>
      </Layout>
    </>
  )
}
  
  export default Search;