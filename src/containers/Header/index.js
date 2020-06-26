import { React } from '../../libraries';
import { Navbar } from '../../components';


function Header() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-12 px-0">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Header;