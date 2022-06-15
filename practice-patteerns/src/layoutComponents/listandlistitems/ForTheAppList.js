import React from "react";
import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { NumberedList } from "./NumberList";
import { SmallproductListItem } from "./products/SmallproductListItem";
import { Modal } from "../modal/Modal";
import { LargeProductListItem } from "./products/LargeProductListItem";
const people = [
  {
    name: "Mate",
    age: "25",
    hairColor: "brown",
    hobbies: ["dance", "video game"],
  },
  {
    name: "Brenda",
    age: "35",
    hairColor: "black",
    hobbies: ["golf", "math"],
  },
  {
    name: "Casd",
    age: "21",
    hairColor: "Blonde",
    hobbies: ["medic", "gym"],
  },
];
const products = [
  {
    name: "Product 1",
    price: "$100",
    description: "This is product 1",
    rating: 4.0,
  },
  {
    name: "Product 2",
    price: "$200",
    description: "This is product 2",
    rating: 3.0,
  },
  {
    name: "Product 3",
    price: "$300",
    description: "This is product 3",
    rating: 2.0,
  },
];

export const ForTheAppList = () => {
  return (
    // <>
    //   <RegularList
    //     items={people}
    //     resourceName="person" // this is the prop in the smallPersonList
    //     itemComponent={SmallPersonListItem}
    //   />
    //   <NumberedList
    //     items={people}
    //     resourceName="person"
    //     itemComponent={LargePersonListItem}
    //   />
    //   <RegularList
    //     items={products}
    //     resourceName="product"
    //     itemComponent={SmallproductListItem}
    //   />
    // </>
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
};
