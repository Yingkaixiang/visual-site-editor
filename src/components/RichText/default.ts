import shortid from "shortid";

import { IComponent } from "@/index.d";

const RichText: IComponent = {
  id: shortid.generate(),
  audit: {},
  item: [],
  sticks: ["ml", "mr"],
  aspectRatio: false,
  styles: {
    width: "190px",
    height: "50px",
    top: "0px",
    left: "0px",
  },
  type: "text",
  isDraggable: true,
  isResizable: true,
  version: "v1",
};

export default RichText;
