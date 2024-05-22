export interface ICustomInputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	value: string;
	placeholder: string;
	type?: string;
	disabled?: boolean;
}
