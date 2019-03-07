import React from "react"

class UglyThing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            edit: true,
            title: props.uglything.title,
            description: props.uglything.description,
            image: props.uglything.image
        }
        console.log(this.state.image)
    }

    toggle = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleChange = (e) => {
        let {name,value} = e.tartget.value
        this.setState(({[name]: value}))
    }

    handleSubmit = (e, id) =>{
        e.preventDefault()
        let {title, description} = this.state
        const updatedUglyThing = {title, description}
        this.props.editUglyThing(id, updatedUglyThing)
    }

    render(){
        let {uglything, deleteUglyThing} = this.props;
        return (
            <div>
                {this.state.edit ?
                <>
                    <h1>{uglything.title}</h1>
                    <p>{uglything.description}</p>
                    <img src={this.state.image} alt="wtf"/>
                    <button onClick={() => deleteUglyThing(uglything._id)}>Delete</button>
                    <button onClick={this.toggle}>Edit</button>
                </>
                :
                <form onSubmit={(e)=> this.handleSubmit(e,uglything._id)}>
                    <input type="text"
                        placeholder="Ugly Thing's Name:"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        placeholder="Ugly Thing's Description:"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        placeholder="Ugly Thing's Image:"
                        name="image"
                        value={this.state.image}
                    />
                    <button>Save Changes</button>
                </form>
                }
            </div>
        )
    }
}

export default UglyThing