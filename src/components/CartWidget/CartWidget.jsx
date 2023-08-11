const CartWidget = () => {
    return (
        <div>
            <button className="btn-outline btn btn-secondary position-relative">
                <i className="bi bi-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button>

        </div>
    )
}
export default CartWidget;