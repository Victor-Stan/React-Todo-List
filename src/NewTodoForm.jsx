import { useState } from "react"

export function NewTodoForm(props){
    props.onSubmit
    const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

   props.onSubmit(newItem)

  }
return (
    <form onSubmit={handleSubmit} className="new-item-form" action="">
   
    <div className="form-row">
      <label htmlFor="item">New Task</label>
      <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)}
      type="text"
       id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
)
}