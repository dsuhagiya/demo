import React, { Fragment } from "react";
var item = [
  {
    id: "1",
    name: "Cup",
    description: "This is a cup.",
  },
  {
    id: "2",
    name: "Glass",
    description: "This is a glass.",
  },
  {
    id: "3",
    name: "Pan",
    description: "This is a pan.",
  },
];
function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.name}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
