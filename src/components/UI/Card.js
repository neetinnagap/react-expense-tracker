function Card({ children, className }) {
  const classes = "rounded-sm bg-white shadow-lg " + className;
  return <div className={classes}>{children}</div>;
}

export default Card;
