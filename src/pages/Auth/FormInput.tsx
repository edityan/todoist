import React from "react";

interface FormInputProps {
	title: string;
	children: React.ReactNode;
}

export default function FormInput({ title, children }: FormInputProps) {
	return (
		<div className="w-full">
			<div className="border-[1px] rounded-lg p-2 pb-1 overflow-clip">
				<span className="flex flex-row items-end justify-between">
					<label className="flex-grow cursor-text">
						<span className="font-medium cursor-default">{title}</span>
					</label>
				</span>
				<div className="flex flex-row items-center text-[14px]">{children}</div>
			</div>
		</div>
	);
}
