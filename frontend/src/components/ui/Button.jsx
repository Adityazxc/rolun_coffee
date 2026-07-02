export default function Button({
    children,
    variant = "primary",
  }) {
  
    const styles = {
      primary:
        "bg-[#6F4E37] text-white hover:bg-[#014443]",
  
      outline:
        "border border-[#BC905F] text-[#6F4E37] hover:bg-[#014443] hover:text-white hover:border-[#014443]",
    };
  
    return (
      <button
        className={`
          rounded-full
          px-5
          py-2.5
          font-medium
          transition-all
          duration-300
          ${styles[variant]}
        `}
      >
        {children}
      </button>
    );
  }