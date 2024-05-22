import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { IEditor } from "./Editor.types";

export default function CustomEditor(props: IEditor) {
	const editorRef = useRef<any>(null);
	const { onChange, initialText = "" } = props;

	const handleChange = () => {
		onChange(editorRef.current.getContent());
	};

	return (
		<>
			<Editor
				apiKey="swlm7nlhg6cgoujeu7eop2vrdznz67kievjb491wz7spy0uu"
				onInit={(evt, editor) => {
					editorRef.current = editor;
					editorRef.current.directionality = "ltr";
				}}
				value={initialText}
				onEditorChange={handleChange}
				init={{
					height: 500,
					placeholder: "Type something...",
					menubar: false,
					language: "en",
					plugins: [
						"advlist autolink lists link image print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table paste code help wordcount",
					],
					toolbar:
						"undo redo | formatselect | " +
						"bold italic backcolor | alignleft aligncenter " +
						"alignright alignjustify |  outdent indent | " +
						"bullist numlist | removeformat",
					content_style:
						"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
		</>
	);
}
