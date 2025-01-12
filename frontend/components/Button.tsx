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
            className="inline-block bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 text-white py-1 px-3 rounded-md text-center hover:from-pink-700 hover:via-red-600 hover:to-yellow-500 transition duration-300 mb-3 mt-1"
        >
            {text}
        </a>
    );
};

export default Button;
