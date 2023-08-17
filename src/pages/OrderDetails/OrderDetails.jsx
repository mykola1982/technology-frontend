import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import { toast } from "react-toastify";

import { Container, Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import * as ordersAPI from "services/orders-API";

import { Loader } from "components/Loader";

const OrderDetails = () => {
  const { orderId } = useParams();

  const location = useLocation();
  const componentRef = useRef();

  const [detailsOrder, setDetailsOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getOrder() {
      try {
        setIsLoading(true);
        const response = await ordersAPI.fetchOrderAPI(orderId);
        setDetailsOrder(response.data);
      } catch (error) {
        toast.error(`Щось пішло не так. Спробуй знову...`);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    getOrder();
  }, [orderId]);

  const backLinkHref = location.state?.from ?? "/";
  // console.log(orderId);
  console.log(detailsOrder);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Замовлення на метал ",
    onAfterPrint: () => alert("друк успішний "),
  });

  return (
    <>
      {isLoading && <Loader />}
      <Container maxWidth="xl" sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            width: "100%",
            borderRadius: 4,

            mt: 10,
            mb: 2,
            p: 2,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          <Button
            component={Link}
            to={backLinkHref}
            variant="contained"
            size="small"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4 }}
          >
            Назад
          </Button>
          {detailsOrder ? (
            <div>
              <div ref={componentRef}>
                <Typography
                  variant="h5"
                  align={"center"}
                  sx={{ fontWeight: 700 }}
                >
                  Замовлення на метал
                </Typography>
                <Typography variant="p" align={"left"} sx={{ fontWeight: 700 }}>
                  Користувач: {detailsOrder.user}
                </Typography>
                <Typography variant="p" align={"left"} sx={{ fontWeight: 700 }}>
                  Дата створення замовлення: {detailsOrder.createdAt}
                </Typography>
              </div>

              <Button onClick={handlePrint}>друкувати</Button>
            </div>
          ) : (
            <Typography variant="h5" component="p" sx={{ fontWeight: 700 }}>
              Дані на замовлення не знайдено...
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default OrderDetails;
