import "./LabelInput.css";

function Input({
    id, 
    value, 
    onChange, 
    ...props}) {
//"...props" for other properties maybe useful

    return (
        <input 
            id={id}
            value={value}
            onChange={onChange}
            {...props}
        />
    )
}

export default function LabelInput({
    label, 
    inputId,
    inputValue,
    inputOnChange, 
    ...props
}) {

    return (
        <div className="label-input">
            <label 
                htmlFor={inputId}>
                {label}
            </label>
            <Input 
                id={inputId}
                value={inputValue}
                onChange={inputOnChange}
                {...props}
            />
        </div>
    )
}