import Typography from "src/components/Typography";

const Card = ({ children }) => {
  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        background: "rgba(255, 255, 255, 0.69)",
        border: "0.0625rem solid #E9E9E9",
        boxSizing: "border-box",
        boxShadow: "0rem 0.4375rem 1rem rgb(13 73 59 / 4%)",
        borderRadius: "1.5rem",
      }}
    >
      <h3 style={{ textAlign: "center", lineHeight: "3rem" }}>
        <Typography variant="h1">Sign In</Typography>
      </h3>
      {children}
    </div>
  );
};

export default Card;
