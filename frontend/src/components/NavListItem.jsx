const NavListItem = ({ notes, readNote }) => {
    return (
        <>
            {notes.map((item) => (
                <li key={item._id} id={item._id} onClick={() => readNote(item._id)}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </li>
            ))}
        </>
    );
};

export default NavListItem;
