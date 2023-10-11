import { useState } from "react";
import PostModal from "./PostModal";

const PostModal = ({id, link}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <>
            <div className="grid-item">
                <img onClick={openModal} src={link} alt="Imagen" />
            </div>

            {/* {modalIsOpen &&
                <PostModal>
                    <img src={link} alt="Imagen" />
                    <button onClick={closeModal}>X</button>
                </PostModal>
            } */}
        </>
    )
}

export default PostModal