import {Base} from "../api/types";
import {FC} from "react";

export interface ListElementProps<T extends Base> {
    data: T
}

export type ListElement<T extends Base> = FC<ListElementProps<T>>

