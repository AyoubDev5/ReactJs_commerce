import { createStore } from "redux";
import rootCombin from "./reduce";

const Store = createStore(rootCombin);

export {Store}