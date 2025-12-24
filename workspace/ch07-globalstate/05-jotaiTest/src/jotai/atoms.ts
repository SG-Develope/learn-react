// import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils';
export const countState = atomWithStorage("countState", 1);