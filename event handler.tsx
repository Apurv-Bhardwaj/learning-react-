import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New york", "New jersey", "New delhi", "London"];

  // this is an eventhandler because its job is to handle an event and to handle what happens when the user clicks on a specified piece of text
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1> This is a List of cities </h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="List-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
