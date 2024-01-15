function ButtonPlayer({
  children,
  main = false,
  onClick,
  ref,
  disabled,
  isActive = false,
}) {
  let className = `relative flex items-center justify-center rounded-full text-2xl`;

  const primary = className + " bg-white size-[2em] hover:scale-110";

  const secondary =
    className +
    ` size-[1.7em] ${
      isActive ? "text-green-500" : "text-gray-500 hover:text-white"
    } `;

  return (
    <button
      className={main ? primary : secondary}
      onClick={onClick}
      ref={ref}
      disabled={disabled}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 size-1 rounded-full bg-green-500"></span>
      )}
    </button>
  );
}

export default ButtonPlayer;
