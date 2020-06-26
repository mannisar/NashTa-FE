import { React } from '../../libraries';
import { Header, Content } from '../../containers';

export default class AddEvent extends React.Component {
    state = {
        route: "AddEvent"
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