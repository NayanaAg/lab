interface NavigationBarProps {
    cartCount: number;
}

export default ({ cartCount }: NavigationBarProps) => {
    return (
        <nav>
            <h1>e-commerce lab</h1>
            <div>
                <button>Products</button>
                <button>cart ({cartCount}) </button>
            </div>
        </nav>
    )
}