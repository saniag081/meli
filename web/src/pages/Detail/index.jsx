import { useParams } from "react-router";
import Layout from "../../components/Layout";
import { getDetailProduct } from "../../slices/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import './Detail.scss';

function Detail() {
  const detail = useSelector((state) => state.products.detail);
  const dispatch = useDispatch()
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [id]);

  return (
    <>
      <Layout>
        <section className="container">
          <div className="detail">
            <div className="detail__container">
              <figure className="detail__image">
                <img
                  src={ detail.item?.picture }
                  alt={ detail.item?.title }
                />
              </figure>
              <div className="detail__content">
                <p className="detail__content-condition">
                  { detail.item?.condition } ° {detail.item?.sold_quantity} vendidos
                </p>
                <h3>
                  { detail.item?.title }
                </h3>
                <p className="detail__content-price">
                  $ { detail.item?.price.amount }
                </p>
                <Button
                  label='Comprar'
                />
              </div>
            </div>
            <div className="detail__product">
              <h4>Descripción del producto</h4>
              <p>{ detail.item?.description }</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Detail;