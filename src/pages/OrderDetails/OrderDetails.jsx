import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import { toast } from "react-toastify";

import { Box, Button, Typography, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PrintIcon from "@mui/icons-material/Print";

import * as ordersAPI from "services/orders-API";
import { formatDate } from "utils/formatDate";
import { formatTime } from "utils/formatTime";

import { MyContainer } from "../../components/MyContainer";
import { Loader } from "components/Loader";
import { TableProducts } from "components/TableProducts";
import { TableMaterials } from "components/TableMaterials";

const OrderDetails = () => {
  const { orderId } = useParams();

  const location = useLocation();
  const componentRef = useRef();

  const [detailsOrder, setDetailsOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const date = new Date();

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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Замовлення на метал від ${formatDate(date)} ${formatTime(
      date
    )} `,
  });

  return (
    <>
      {isLoading && <Loader />}
      <MyContainer>
        <Box
          sx={{
            width: "100%",
            borderRadius: 4,
            mt: 10,
            mb: 6,
            p: 2,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
            overflowX: "auto",
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
            <Box
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                gap: 1,
              }}
            >
              <Button
                type="button"
                variant="contained"
                size="large"
                startIcon={<PrintIcon />}
                onClick={handlePrint}
                sx={{
                  maxWidth: "250px",
                  ml: 4,
                  mt: 4,
                }}
              >
                Друкувати
              </Button>
              <Box
                ref={componentRef}
                sx={{
                  width: "100%",
                  height: "window:innerHeight",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  gap: 1,
                  p: 4,
                }}
              >
                <Typography variant="h5" align="left" sx={{ fontWeight: 700 }}>
                  Замовлення на метал
                </Typography>
                <Box>
                  <Typography variant="p" sx={{ fontWeight: 700 }}>
                    Користувач що створив замовлення:
                  </Typography>{" "}
                  <Typography variant="p">{detailsOrder.user}</Typography>
                </Box>
                <Box>
                  <Typography variant="p" sx={{ fontWeight: 700 }}>
                    Дата створення замовлення:
                  </Typography>{" "}
                  <Typography variant="p">
                    {formatDate(detailsOrder.createdAt)}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="p" sx={{ fontWeight: 700 }}>
                    Час створення замовлення:
                  </Typography>{" "}
                  <Typography variant="p">
                    {formatTime(detailsOrder.createdAt)}
                  </Typography>
                </Box>
                <Typography variant="p" sx={{ fontWeight: 700 }}>
                  Деталі на які замовляється метал:
                </Typography>{" "}
                <TableProducts data={detailsOrder.products} />
                <Typography variant="p" sx={{ fontWeight: 700 }}>
                  Метаріали що потрібен для виготовлення даних деталей:
                </Typography>{" "}
                <TableMaterials data={detailsOrder.materials} />
              </Box>
            </Box>
          ) : (
            <Typography variant="h5" component="p" sx={{ fontWeight: 700 }}>
              Дані на замовлення не знайдено...
            </Typography>
          )}
        </Box>
      </MyContainer>
    </>
  );
};

export default OrderDetails;
