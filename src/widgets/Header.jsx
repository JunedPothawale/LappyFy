import MiddleHeader from "./Navbar/MiddleHeader"
import Navbar from "./Navbar/BottonNavbar"
import Topbar from "./Navbar/Topbar"

const Header = () => {




    return (
        <>

            <header className="header navbar-area">

                <Topbar />

                <MiddleHeader />

                <Navbar />
            </header>

        </>
    )
}

export default Header
