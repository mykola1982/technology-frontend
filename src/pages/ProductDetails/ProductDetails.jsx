import { getMetalConsumption } from "../../utils/getMetalConsumption";

import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import * as API from "../../services/products-API";

const ProductDetails = () => {
  const location = useLocation();
  const { productId } = useParams();

  const [detailsProduct, setDetailsProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await API.fetchProductAPI(productId);
        setDetailsProduct(response.data);
      } catch (error) {}
    }
    getProduct();
  }, [productId]);

  const backLinkHref = location.state?.from ?? "/";

  // подумати над деструктиризацією
  return (
    <>
      {detailsProduct && (
        <>
          <Link to={backLinkHref}> Назад</Link>
          <div>
            Тут буде дельний опис про деталь
            <h2>
              Опис деталі - {detailsProduct.name} {detailsProduct.number}
            </h2>
            <p>Найменування - {detailsProduct.name}</p>
            <p>Децимальний номер - {detailsProduct.number}</p>
            <p>Дільниця виготовлення -{detailsProduct.workshop}</p>
            <p>Матеріал -{detailsProduct.material.sheet} </p>
            <p>
              Норма витрати-{" "}
              {getMetalConsumption(
                detailsProduct.quantity,
                detailsProduct.material.sheet,
                detailsProduct.material.thickness
              )}
            </p>
            <p>Товщина металу-{detailsProduct.material.thickness} мм.</p>
            <p>Кількість деталей листа-{detailsProduct.quantity} шт.</p>
            <p> Вага деталі-{detailsProduct.weight}кг.</p>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
