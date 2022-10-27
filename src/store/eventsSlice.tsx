import { createSlice } from "@reduxjs/toolkit";
import { EVENTS } from "../utils/events";

export const slice = createSlice({
  name: "events",
  initialState: {
    arr: EVENTS,
  },
  reducers: {
    newEvent(state, { payload }) {
      payload.id = Math.floor(Date.now() * Math.random()).toString(36);
      return {
        ...state,
        arr: state.arr.concat(payload),
      };
    },
    updateEvent(state, { payload }) {
      return {
        // I'ts not ready
        arr: state.arr.filter((item: any) => {}),
      };
    },
    removeEvent(state, { payload }) {
      return {
        arr: state.arr.filter((item: any) => item.id !== payload),
      };
    },
  },
});

export const { newEvent, removeEvent } = slice.actions;

export const selectEvents = (state: any) => state.events;

export default slice.reducer;
