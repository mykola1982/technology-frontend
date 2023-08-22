import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

import { Box } from "@mui/material";

import * as orderAPI from "services/orders-API";

import { MyContainer } from "components/MyContainer";
import { OrderList } from "components/OrderList";
import { ModalSmall } from "components/ModalSmall";
import { ContentModalDelete } from "components/ContentModalDelete";
import { Loader } from "components/Loader";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idOrdersToDelete, setIdOrdersToDelete] = useState(null);

  const location = useLocation();

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

  const openModalDelete = (id) => {
    setShowModalDelete(true);
    setIdOrdersToDelete(id);
  };

  const closeModalDelete = () => {
    setShowModalDelete(false);
  };

  const deleteOrder = async (id) => {
    try {
      setIsLoading(true);
      await orderAPI.removeOrderAPI(id);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
      toast.success(`Замовлення успішно видалене`);
    } catch (error) {
      toast.error(`Щось пішло не так. Спробуй знову...`);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handelDelete = async (id) => {
    await deleteOrder(idOrdersToDelete);
    setIdOrdersToDelete(null);
    closeModalDelete();
  };

  return (
    <>
      {isLoading && <Loader />}
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
            mb: 6,
            p: 1,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          <OrderList
            orders={orders}
            location={location}
            openModal={openModalDelete}
            onDelete={handelDelete}
          />
        </Box>
      </MyContainer>
      <ModalSmall open={showModalDelete} onClose={closeModalDelete}>
        <ContentModalDelete
          title={"Бажаєте видалити замовлення?"}
          onDelete={handelDelete}
          onClose={closeModalDelete}
        />
      </ModalSmall>
    </>
  );
};

export default Orders;
