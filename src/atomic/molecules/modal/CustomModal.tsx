import CustomButton from "../../atoms/button/CustomButton";
import { IModalProps } from "./Modal.types";
import "./CustomModal.css";

const CustomModal = ({ isOpen, onClose, children }: IModalProps) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				{children}
				<div className="close-button">
					<CustomButton label="Close" onClick={onClose} />
				</div>
			</div>
		</div>
	);
};

export default CustomModal;
