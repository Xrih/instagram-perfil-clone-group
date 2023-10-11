import { useState } from "react"
import PostModal from "./Modal/PostModal"

import '../scss/modal/_CardModal.scss'


const CardImage = ({id, link}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <>
            <div className="Card">
                <div className="grid-item">
                    <img onClick={openModal} src={link} alt="Card-Image" />
                </div>
            </div>

            {modalIsOpen &&
                <PostModal>
                    <img src={link} alt="Imagen" />
                    <button onClick={closeModal}>X</button>
                </PostModal>
            }
        </>
    )
}

export default CardImage