const Button = ({
    children,
    className
}) => {
    return (

        <button className={`text-green font-bold  leading-normal
         shadow-md ${className}
        `}>
            {children}
        </button>
    )
};
export default Button;