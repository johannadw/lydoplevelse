import { Link } from "react-router-dom"

const QueueToaster = ({ onShowToaster, showPlayer }) => {
  return (
    <div className={`queue-toaster ${ showPlayer ? "move-toaster" : "" }`} >
        <img src={require("../../assets/icons/toaster.svg").default} className="toaster-illustration" alt="" />
        <div className="toaster-content">
          <div className="toaster-close">
            <p>Lyd tilføjet til lyttekø</p>
            <img src={ require("../../assets/icons/close_black.svg").default } className="toaster-close-icon icon" alt="" onClick={ onShowToaster } />
          </div>
          <div className="toaster-content-cta">
            <p onClick={ onShowToaster } >Fortryd</p>
            <p className="divider">I</p>
            <Link to="ko" onClick={ onShowToaster}><p>Gå til lyttekø</p></Link>
          </div>
        </div>
    </div>
  )
}

export default QueueToaster