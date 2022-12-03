import React from "react";

export default function ThirdPartyLogin({ title, icon }) {
	return (
		<button className="flex flex-row justify-center items-center gap-4 px-4 py-3 w-full border rounded-lg cursor-pointer transform duration-200 hover:bg-gray-200">
			{icon}
			<div className="font-bold text-xl">{title}</div>
		</button>
	);
}
