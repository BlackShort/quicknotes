const NavListItem = ({ notes, readNote }) => {
    return (
        <>
            {
                notes ? (notes?.map((item) => (
                    <li key={item._id} id={item._id} onClick={() => readNote(item._id)}>
                        <h4>{(item.title).length > 25 ? (item.title).slice(0, 25) + "..." : item.title}</h4>
                        <p>{(item.description).length > 35 ? (item.description).slice(0, 35) + "..." : item.description}</p>
                    </li>
                ))) : <li><h4>No Notes</h4></li>
            }
        </>
    );
};

export default NavListItem;
