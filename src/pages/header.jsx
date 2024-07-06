import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{
            display: "flex",
            gap: 50,
            justifyContent: "space-between",
            padding: 10
        }}>
            <h1><Link to={"/"}>Игротека</Link></h1>
            <div style={{
                display: "flex",
                gap: 10,
                justifyContent: "space-between"
            }}>
                <button><Link to={"catalog"}>Каталог</Link></button>
                <button>РПГ</button>
                <button>Приключения</button>
                <button>Стратегии</button>
                <button>Головоломки</button>
            </div>
        </div>
    );
}

export default Header;