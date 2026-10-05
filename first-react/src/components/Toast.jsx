export default function Toast({ message, status, onClose }) {

    return (
        <div className={`toast ${status}`}>

            <span className="toast-message">
                {message}
            </span>

            <button
                className="toast-close"
                onClick={onClose}
            >
                ×
            </button>

        </div>
    )
}