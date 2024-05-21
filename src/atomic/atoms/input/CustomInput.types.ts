export interface ICustomInputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	placeholder: string;
	type?: string;
}
