import { useState, userId } from "react";
let id = 0;

const AddArticle = (props) =>{
    
    const [formData, setFromData]= useState({
        'id': '',
        'title': '',
        'description': ''

    })

    const handleChange = (event)=>{
        setFromData(
        {
            ...formData,
            [event.target.name]:event.target.value


        }
        )
    }

    const submitHandle = (event) =>{
        event.preventDefault();
        id = id + 1;
        console.log(id)
        formData.id = id;
        props.onSave({...formData})
    }



    return(
        <form className="form" onSubmit={submitHandle}>
            <div className="form-group">
                <input  type="text" name="title" placeholder="Najienos pavadinimas" className=" m-1 form-control" onChange={handleChange} value={formData.title}/>
            </div>
            <div className="form-group">
                <textarea name="description" placeholder="Najienos tekstas" className=" m-1 form-control" onChange={handleChange} value={formData.description}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Saugoti</button>
            </div>

        </form>
    )
}

export default AddArticle;