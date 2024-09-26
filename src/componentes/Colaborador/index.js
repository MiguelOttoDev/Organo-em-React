import { IoCloseCircle } from "react-icons/io5";
import { FaHeart, FaRegHeart  } from "react-icons/fa";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar(){
        aoFavoritar(colaborador.id)
    }

   
    return (<div className="colaborador">
        <IoCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <button className="favoritar">
                {colaborador.favorito ? <FaHeart onClick={favoritar} color="#FF0000" />  : <FaRegHeart onClick={favoritar}/>}
            </button>
        </div>
    </div>)
}

export default Colaborador