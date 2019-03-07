import React from "react"
import UglyThing from "./UglyThing"
import axios from "axios"

class UglyThingList extends React.Component{
    constructor(){
        super()
        this.state={
            inputs:{
                title:"",
                description:'',
                image:""
            },
            uglythings:[]
        }
    }

    async componentDidMount(){
        const res = await axios.get('https://api.vschool.io/theseuglythings/todo')
        this.setState ({
            uglythings: res.data
        })
    }

    handleChange = (e) =>{
        let {name,value} = e.target
        this.setState(prevState=>({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    handleSubmit = e =>{
        e.preventDefault()
        axios.post('https://api.vschool.io/theseuglythings/todo', this.state.inputs).then(res=>{
            this.setState(prevState=>({
                uglythings: [...prevState.uglythings,res.data],
                inputs:{
                    title:"",
                    description:"",
                    image:""
                }
            }))
        })
    }

    editUglyThing = (id,updatedUglyThing)=>{
        axios.put(`https://api.vschool.io/theseuglythings/todo/${id}`).then(res=>{
            this.setState(prevState=>({
                uglythings: prevState.uglythings.map(uglything => uglything._id === id ? uglything = updatedUglyThing : uglything)
            }))
        })
    }

    deleteUglyThing = (id) =>{
        axios.delete(`https://api.vschool.io/theseuglythings/todo/${id}`).then(res =>{
            this.setState(prevState=>({
                uglythings: prevState.uglythings.filter(uglything => uglything._id !== id)
            }))
        })
    }

    render(){
        const mappedUglyThings = this.state.uglythings.map(uglything => <UglyThing key={uglything._id} uglything={uglything} deleteUglyThing={this.deleteUglyThing} editUglyThing={this.editUglyThing}/>)
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Ugly Thing's Title"
                        name="title"
                        value={this.state.inputs.title}
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        placeholder="Ugly Thing's description"
                        name="description"
                        value={this.state.inputs.description}
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        placeholder="Ugly Thing's Image"
                        name="image"
                        value={this.state.inputs.image}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                <>
                    {mappedUglyThings}
                </>
            </>
        )
    }
}

export default UglyThingList