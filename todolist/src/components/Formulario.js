 function Formulario (props) {


    const {tarea, handleSubmit, handleChange} = props


    return(


<from onSubmit={handleSubmit}>

<input 
type="text"
placeHolder="write your spell
"
onChange={handleChange}
value={tarea} />

<input 
type="submit"
className="btn"
value="Launch
" 
onClick={handleSubmit} />

</from>

);

}

export default Formulario