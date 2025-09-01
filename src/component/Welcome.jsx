function WelcomeMessage({ name }) {
  return (
    <div
      style={{
        border: "2px solid white",
        padding: "1rem",
        margin: "1rem",
        borderRadius: "10px",
      }}
    >
      <h2>Hello, {name}! 👋</h2>
      <p>Welcome to your React journey!</p>
    </div>
  );
}

export default WelcomeMessage;
