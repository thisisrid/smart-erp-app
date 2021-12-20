import { child, push, ref, set } from "@firebase/database";
import { db } from "../firebase";

const SetOutwards = (product) => {
  const newPostKey = push(child(ref(db), "inventory/out-orders/")).key;
  set(ref(db, "inventory/out-orders/" + newPostKey.slice(1, 10)), {
    ...product,
    deliveryDate: product.deliveryDate.toString(),
    shippingDate: product.shippingDate.toString(),
    key: newPostKey.slice(1, 10),
  })
    .then((res) => {
      return true;
    })
    .catch((error) => console.log("🚀~error", error));
};

export default SetOutwards;
