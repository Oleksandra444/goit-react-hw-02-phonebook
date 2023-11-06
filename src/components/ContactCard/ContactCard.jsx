

export const ContactCard = ({ name, number, onDelete, id }) => { return(
    <>
        <div>
            <p>{name} :{ number}</p>
        </div>
        <button onClick={()=>onDelete(id) }>Delete</button>
    </>)
}