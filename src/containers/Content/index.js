import { React } from '../../libraries';
import { Table, Form, Card } from '../../components';

export default class Content extends React.Component {
    render() {
        const GetComponents = () => {
            if (this.props.route === "Dashboard") {
                return (
                    <>
                        <div className="row mt-3">
                            <div className="col-12 col-lg-12">
                                <Table />
                            </div>
                        </div>
                    </>
                )
            } else if (this.props.route === "AddEvent") {
                return (
                    <>
                        <div className="row mt-5">
                            <div className="col-12 col-lg-12">
                                <Form />
                            </div>
                        </div>
                    </>
                )
            } else if (this.props.route === "Event") {
                return (
                    <>
                        <div className="row mt-5">
                            <div className="col-12 col-lg-12">
                                <Card />
                            </div>
                        </div>
                    </>
                )
            }
        }
        return (
            <div className="container" >
                <GetComponents />
            </div>
        )
    }
}