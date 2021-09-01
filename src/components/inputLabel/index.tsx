import { InputHTMLAttributes } from "react";
import styles from './styles.module.scss';
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    isValid?: boolean
}

export default function InputLabel({ isValid, children, ...props }: InputProps) {
    return (
        <div className={styles.InputLabelContainer}>
            <input
                className={`${isValid ? styles.valid : ''}`}
                {...props} />
            <label
                htmlFor={props.name}>
                {children}{props.required && '*'}
            </label>
        </div>
    )
};