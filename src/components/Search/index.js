import { React, connect } from '../../libraries';
import { searchEvent } from '../../redux/actions';

class Search extends React.Component {
    state = {
        search: ""
    }

    onChangeText = e => {
        if (e.target.value.length === 0) {
            this.setState({
                search: ""
            })
            const data = this.state.search
            this.props.dispatch(searchEvent(data))
        } else {
            this.setState({
                search: e.target.value
            })
            const data = this.state.search
            this.props.dispatch(searchEvent(data))
        }
    }

    render() {
        return (
            <form className="form-inline">
                <input className="form-control bg-dark text-light w-25" type="search" placeholder="Search" value={this.state.search} onChange={this.onChangeText} />
            </form>
        );
    }
}

export default connect()(Search);