import { React, connect } from '../../libraries';
import { readEvent } from '../../redux/actions';

class Table extends React.Component {
    state = {
        currentPage: [],
        page: 0,
        limit: 5
    }

    async componentDidMount() {
        const data = {}
        const localPage = []
        await this.props.dispatch(readEvent(data))
        await this.arrPage()
    }

    async arrPage() {
        const { events } = this.props;
        console.log(Math.ceil(events.length % 2))
        if (Math.ceil(events.length % 2) === 0) {
            let paginatesId = []
            const bool = true;
            for (let i = 1; i < Math.ceil(events.length / 2); i++) {
                paginatesId[i] = i
            }
            this.setState({
                currentPage: paginatesId
            })
        } else if (Math.ceil(events.length % 2) === 1) {
            let paginatesId = []
            const bool = true;
            for (let i = 1; i < Math.ceil(events.length / 2); i++) {
                paginatesId[i] = i
            }
            this.setState({
                currentPage: paginatesId
            })
        }
    }

    onId = e => {
        this.setState({
            page: e.target.id
        })
        const data = {
            page: parseInt(this.state.page)
        }
        this.props.dispatch(readEvent(data))
    }

    render() {
        const { events } = this.props;
        return (
            <>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Location</th>
                            <th scope="col">Date</th>
                            <th scope="col">Participant</th>
                            <th scope="col">Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.location}</td>
                                <td>{item.date}</td>
                                <td>{item.participant}</td>
                                <td className="d-inline-block text-truncate" style={{ maxWidth: '150px' }}>{item.note}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <span style={{ display: 'inline-block' }}>
                    <ul className="pagination m-0" style={{ backgroundColor: "#a6e3e9" }}>
                        <li className="fa fa-chevron-left" onClick={this.onPrevious}></li>
                        {this.state && this.state.currentPage.map((pagination) => (
                            <li className="page-item" key={pagination}>
                                <span className="page-link" style={{ cursor: "pointer", color: "#4f3961", fontWeight: 'bold', fontSize: 18 }} onClick={this.onId} id={pagination}>{pagination}</span>
                            </li>
                        ))}
                        <li className="fa fa-chevron-right" onClick={this.onNext}></li>
                    </ul>
                </span>
            </>
        )
    }
}

const mapStateToProps = state => ({
    events: state.events.events,
    paginates: state.events.paginates
})

export default connect(mapStateToProps)(Table);