import { React, connect, withRouter } from '../../libraries';
import { createEvent } from '../../redux/actions';

class Form extends React.Component {
    state = {
        title: "",
        location: "",
        participant: "",
        date: "",
        note: "",
        photo: "",
        noteInfo: "invalid-feedback d-none"
    }

    onChangeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // onChangePhoto = e => {
    //     this.setState({
    //         [e.target.name]: e.target.files[0]
    //     })
    // }

    onChangePhoto = (e) => {
        var file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            this.setState({
                photo: reader.result
            })
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }
    }

    onSubmit = async e => {
        e.preventDefault();
        if (this.state.note.length <= 50) {
            this.setState({
                noteInfo: "invalid-feedback"
            })
        } else {
            const data = {
                title: this.state.title,
                location: this.state.location,
                participant: this.state.participant,
                date: this.state.date,
                note: this.state.note,
                photo: this.state.photo
            }
            await this.props.dispatch(createEvent(data))
            await this.props.history.push("/")
        }
    }

    render() {
        return (
            <div className="row d-block">
                <div className="d-flex flex-wrap">
                    <div className="col-6 col-lg-6">
                        <form className="was-validated bg-dark text-light p-4" onSubmit={this.onSubmit} encType="multipart/form-data">
                            <div className="form-row">
                                <div className="form-group col-lg-6">
                                    <input className="form-control is-invalid" type="text" placeholder="title" name="title" onChange={this.onChangeValue} required />
                                </div>
                                <div className="form-group col-lg-6">
                                    <input className="form-control is-invalid" type="text" placeholder="location" name="location" onChange={this.onChangeValue} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-6">
                                    <input className="form-control is-invalid" type="text" placeholder="participant" name="participant" onChange={this.onChangeValue} required />
                                </div>
                                <div className="form-group col-lg-6">
                                    <input className="form-control is-invalid" type="datetime-local" placeholder="date" name="date" onChange={this.onChangeValue} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control is-invalid" rows="5" name="note" placeholder="note" onChange={this.onChangeValue} required />
                                <div className={this.state.noteInfo}>
                                    Please Input Up to 50 Characters!
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-file">
                                    <label className="custom-file-label">Choose file...</label>
                                    <input type="file" className="custom-file-input is-invalid" name="photo" onChange={this.onChangePhoto} required />
                                </div>
                            </div>
                            <div className="form-group mb-0">
                                <button type="submit" className="btn btn-light w-100">SAVE</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-6 col-lg-6 p-4">
                        <img className="img-fluid" src={this.state.photo} alt={this.state.photo} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(Form));