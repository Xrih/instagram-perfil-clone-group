import '../../scss/modal/_CardModal.scss';
import photoProfile from '../../assets/img/perfil.jpeg'


const PostModal = ({children}) => {

    return (
        <>
            <div className="Modal-container">
                <div className="Modal">
                    {children}

                    <div className="content-Photo">
                        <img src={photoProfile} alt="Imagen de @Sleydavid_" />
                        
                        <div className="text">
                            <p>Sleydavid_</p>
                            <a href="">DESARROLLADOR DE SOFTWARE</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default PostModal