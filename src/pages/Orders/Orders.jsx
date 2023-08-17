import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

import { Box } from "@mui/material";

import { MyContainer } from "../../components/MyContainer";

import * as orderAPI from "../../services/orders-API";
import { OrderList } from "../../components/OrderList";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllOrders() {
      try {
        setIsLoading(true);
        const { data } = await orderAPI.fetchAllOrdersAPI();
        setOrders(data);
      } catch (error) {
        toast.error(`Щось пішло не так. Спробуй знову...`);
      } finally {
        setIsLoading(false);
      }
    }

    getAllOrders();
  }, []);

  return (
    <MyContainer>
      <Box
        sx={{
          width: "100%",
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          mt: 10,
          mb: 2,
          p: 1,
          backgroundColor: "#f5f5f5",
          boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
        }}
      >
        <OrderList orders={orders} location={location} />
      </Box>
    </MyContainer>
  );
};

export default Orders;
