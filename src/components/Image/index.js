import { React, connect } from '../../libraries';

class Image extends React.Component {
    state = {

    }
    render() {
        const { events } = this.props;
        return (
            <>
                <img src={} />
            </>
        )
    }
}

const mapStateToProps = state = ({
    events: state.events.events
})

export default connect(mapStateToProps)(Image)