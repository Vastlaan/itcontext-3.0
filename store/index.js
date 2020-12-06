import React from "react";
import { data } from "../lib/diensten";

export const initialState = {
    diensten: data || [],
};

export function reducer(store, action) {
    switch (action.type) {
        case "test": // this action doesn't require payload as its based on previous value of the state
            return { ...store, ...action.payload };
        default:
            return { ...store };
    }
}

export const Context = React.createContext();
