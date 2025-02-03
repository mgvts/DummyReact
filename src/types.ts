import {InputHTMLAttributes} from "react";


export type Nullable<T> = T | null | undefined

export type InputProps<T> = T & Omit<InputHTMLAttributes<HTMLInputElement>, keyof T>
export type ButtonProps<T> = T & Omit<InputHTMLAttributes<HTMLButtonElement>, keyof T>
