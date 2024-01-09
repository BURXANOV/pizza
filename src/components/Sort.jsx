import React from "react";

function Sort() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const List = ["популярности", "цене", "алфавиту"];
  const onClickListItem = (i) => {
    setSelected(i);
    setOpen(false);
  };
  const sortName = List[selected];
  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG Path */}
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sortName}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {List.map((name, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(i)}
                className={selected === i ? "active" : ""}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
