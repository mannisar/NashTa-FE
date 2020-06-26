import { React, connect, GoLocation, RiUserFollowLine } from '../../libraries';
import { readEvent } from '../../redux/actions';
import { convertDate } from '../../utils';

class Card extends React.Component {
    state = {}

    componentDidMount() {
        const data = {
            limit: 1000
        }
        this.props.dispatch(readEvent(data))
    }

    render() {
        const { events } = this.props;
        return (
            <div className="row d-block">
                <div className="d-flex flex-wrap">
                    {events.map((item) =>
                        <div className="col-4 col-lg-4 mb-4" key={item.id}>
                            <div className="card h-100" style={{ cursor: 'pointer' }}>
                                <div className="card-header bg-transparent border-transparent p-3 m-0">
                                    <h5 className="p-0 m-0">{item.title}</h5>
                                </div>
                                <img src={item.photo} className="card-img-top w-100" alt={item.photo} style={{ height: '250px' }} />
                                <div className="card-body text-left p-3">
                                    <div className="d-flex flex-wrap">
                                        <span><GoLocation size="20" color="red" /></span>
                                        <p className="card-text text-uppercase font-weight-bold mx-2">{item.location}</p>
                                    </div>
                                    <div className="d-flex flex-wrap mb-3 mt-1">
                                        <span><RiUserFollowLine size="20" color="black" /></span>
                                        <p className="card-text mx-2">{item.participant}</p>
                                    </div>
                                    <p className="card-text text-lowercase text-truncate">{item.note}</p>
                                </div>
                                <div className="card-footer text-center">
                                    {convertDate(item.date)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.events.events
})

export default connect(mapStateToProps)(Card);