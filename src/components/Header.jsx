import "../index.css";
const Header = ({headerText}) => {
    return (
        <header className="Header">
            <h1 className="Header-text">{headerText}</h1>
        </header>
    )
}

export default Header
