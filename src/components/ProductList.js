export function ProductList (props){

    return (
        <>
        <h2>Product List</h2>
        <div style={{ display: "flex", gap: "16px"}}>{props.children}</div>
        </>
    )
}