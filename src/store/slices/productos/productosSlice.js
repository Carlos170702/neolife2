import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: [],
  carrito: [],
  modalProducto: null,
  enlaces: [],
};

export const productosSlice = createSlice({
  name: "productosSlice",
  initialState,
  reducers: {
    productosAll: (state, { payload }) => {
      state.productos = payload;
    },
    addProductoModal: (state, { payload }) => {
      state.modalProducto = payload;
    },
    addCarrito: (state, { payload }) => {
      const producto = state.carrito.find(
        (item) => item.nombre === payload.nombre
      );

      state.carrito = producto
        ? state.carrito.map((item) =>
            item.nombre === payload.nombre ? { ...item, ...payload } : item
          )
        : (state.carrito = [...state.carrito, payload]);
    },
    deleteCarrito: (state, { payload }) => {
      const producto = state.carrito.find(
        (item) => item.nombre === payload.nombre
      );

      const productoEliminar = state.carrito.filter(
        (item) => item.nombre !== payload.nombre
      );

      state.carrito =
        producto && productoEliminar.length > 0 ? productoEliminar : [];
    },
    addContactos: (state, { payload }) => {
      state.enlaces = payload;
    },
    restoreState: (state, { payload }) =>{
      state.carrito = [],
      state.productos=[],
      state.modalProducto = null,
      state.enlaces = {}
    }
  },
});

export const {
  productosAll,
  addProductoModal,
  addCarrito,
  deleteCarrito,
  addContactos,
  restoreState
} = productosSlice.actions;
