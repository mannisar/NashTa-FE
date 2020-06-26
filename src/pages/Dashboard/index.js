import { React } from '../../libraries';
import { Header, Navigation, Content } from '../../containers';

export default class Dashboard extends React.Component {
    state = {
        route: "Dashboard"
    }
    render() {
        return (
            <>
                <Header />
                <Navigation />
                <Content route={this.state.route} />
            </>
        )
    }
}