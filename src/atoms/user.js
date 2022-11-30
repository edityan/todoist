import { atom, selector } from "recoil";

export const atomUser = atom({
	key: "atomUser",
	default: {},
});

export const atomLoginInput = atom({
	key: "atomLoginInput",
	default: {
		email: "",
		password: "",
	},
});

export const emailInput = selector({
	key: "emailInput",
	get: ({ get }) => {
		return get(atomLoginInput).email;
	},
});
