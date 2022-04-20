import auraIcon from '../assets/svg/aura-logo-header-icon.svg'
import ReplaceThisIconLater from '../assets/svg/Vendor.svg'
import "./Header.css"

export default function Header (){
    return (
        <div className="header">
            <div className="header-left">
                <img src = {auraIcon} className="header__icon"/>
            </div>
            {/* <ReplaceThisIconLater/> */}
            <div className="header-center">
                <input className="header__input"/>
            </div>
            <div className="header-right">
                <img src = {ReplaceThisIconLater} className="header__icon"/>
                <img src = {ReplaceThisIconLater} className="header__icon"/>
                <img src = {ReplaceThisIconLater} className="header__icon"/>
            </div>
        </div>
    )
}