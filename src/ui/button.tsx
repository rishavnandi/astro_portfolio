import { BaseProps } from '@/types';

interface ButtonProps extends BaseProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button = ({
  children,
  type = "button",
  onClick,
  disabled,
  className,
  variant = 'primary'
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200";
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 dark:hover:bg-neutral-700",
    secondary: "bg-transparent border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
