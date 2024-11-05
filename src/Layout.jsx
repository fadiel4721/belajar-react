import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav style={{ paddingBottom: "1rem" }}>
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cases">Study Cases</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;