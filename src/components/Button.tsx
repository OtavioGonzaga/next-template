import React from 'react';
import Loading from './Loading';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ loading, children, ...props }) => {
	return (
		<button
			{...props}
			className={`${props.className ?? ''} bg-primary rounded px-4 py-2 text-white disabled:opacity-50 ${
				!props.disabled && !loading
					? 'hover:bg-secondary cursor-pointer'
					: ''
			}`}
			disabled={loading || props.disabled}
		>
			{loading ? (
				<span className="flex items-center">
					<Loading size={24} />
				</span>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
