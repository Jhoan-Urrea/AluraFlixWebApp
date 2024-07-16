import { createContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext();

const initialState = {
  consulta: "",
  videos: [],
  videoSeleccionado: null,
  modalAbierto: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONSULTA":
      return { ...state, consulta: action.payload };
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };
    case "GUARDAR_VIDEO":
        return {...state,
        videos: [...state.videos, action.payload]};
    case "SET_VIDEO_SELECCIONADO":
      return {
        ...state,
        videoSeleccionado: action.payload,
        modalAbierto: action.payload != null ? true : false,
      };
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3001/videos");
      const data = await res.json();
      dispatch({ type: "SET_VIDEOS", payload: data });
      
    };

    setTimeout(() => getData(), 2000);
  }, []);
  
  const guardarVideo = (video) => {
    dispatch({ type: 'GUARDAR_VIDEO', payload: video });
};

  return (
    <GlobalContext.Provider value={{ state, dispatch,guardarVideo,}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
