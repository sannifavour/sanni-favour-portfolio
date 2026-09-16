export const Button = ({ className="", size="default", children, ...props }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/23";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
    return (
        <button className={classes} {...props}
            onClick={(e) => {
                if(props.onClick) {
                    props.onClick(e);
                }
            }}
        >
            <span>{children}</span>
        </button>
    );
}