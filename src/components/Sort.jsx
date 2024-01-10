import React from "react";

function Sort({ value, onChangeCategory }) {
  const [open, setOpen] = React.useState(false);
  const List = [
    { name: "популярности(DESC)", sort: "rating" },
    { name: "популярности(ASC)", sort: "-rating" },
    { name: "цене(DESC)", sort: "price" },
    { name: "цене(ASC)", sort: "-price" },
    { name: "алфавиту(DESC)", sort: "title" },
    { name: "алфавиту(ASC)", sort: "-title" },
  ];
  const onClickListItem = (i) => {
    onChangeCategory(i);
    setOpen(false);
  };

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
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {List.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={value.sort === obj.sort ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
