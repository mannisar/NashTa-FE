import { React, Link } from '../../libraries';

export default class Navbar extends React.Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">NashTa</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/AddEvent">Add Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}