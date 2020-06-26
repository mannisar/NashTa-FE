import { React } from '../../libraries';
import { Search } from '../../components';

function Header() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 col-lg-12">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Header;