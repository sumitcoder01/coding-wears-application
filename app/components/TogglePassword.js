import { EyeCloseIcon } from "./icons/EyeCloseIcon";
import { EyeOpenIcon } from "./icons/EyeOpenIcon";


export const TogglePassword = ({ showPassword, setShowPassword }) => {
    const handleTogglePassword = () => setShowPassword(prev => !prev);

    return (
        <div className="absolute inset-y-1/3 right-2" onClick={handleTogglePassword}>
            {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
        </div>
    )
}