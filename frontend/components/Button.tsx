interface ButtonProps {
    href: string;
    text: string;
}

const Button = ({ href, text }: ButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 text-white py-1 px-3 rounded-md text-center hover:from-yellow-500 hover:via-red-600 hover:to-pink-700 transition duration-300 mb-3 mt-1"
        >
            {text}
        </a>
    );
};

export default Button;
