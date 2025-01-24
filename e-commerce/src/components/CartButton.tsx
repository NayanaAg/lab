interface CartButtonProps {
    onclick: () => void;
    label?: string;
}

export default ({ onclick, label = "Add to cart"}: CartButtonProps) => {
    return (
        <button onClick={onclick}>{label}</button>
    )
}