import { atom } from "recoil";

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
