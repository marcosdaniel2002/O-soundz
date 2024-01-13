function ButtonPlayer({ children, main = false, onClick, ref, disabled }) {
  let className = "flex items-center justify-center rounded-full text-2xl";

  const primary = className + " bg-white size-[2em] hover:scale-110";

  const secondary = className + " text-gray-500 size-[1.7em] hover:text-white";

  return (
    <button
      className={main ? primary : secondary}
      onClick={onClick}
      ref={ref}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonPlayer;
