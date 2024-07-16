import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


function useVideoModal() {
    const { state, dispatch,} = useContext(GlobalContext);



    const abrirModal = (video) => {
        dispatch({ type: 'SET_VIDEO_SELECCIONADO', payload: video })
    }


    const cerrarModal = () => {
        dispatch({ type: 'SET_VIDEO_SELECCIONADO', payload: null })
    }

    const videoSeleccionado = state.videoSeleccionado;

    const estaAbiertoModal = state.modalAbierto;

    return { videoSeleccionado, estaAbiertoModal, abrirModal, cerrarModal }
}

export default useVideoModal;