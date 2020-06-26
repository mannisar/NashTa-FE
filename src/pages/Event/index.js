import { React } from '../../libraries';
import { Header, Content } from '../../containers';

export default class Event extends React.Component {
    state = {
        route: "Event"
    }
    render() {
        return (
            <>
                <Header />
                <Content route={this.state.route} />
            </>
        )
    }
}