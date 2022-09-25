export default function Login() {
  return (
    <div className="flex-center">
      <form
        action="/api/login"
        method="post"
        className="login-form flex-center column"
      >
        <div>
          <label style={{ letterSpacing: 3 }}>Username:</label>
          <input type="text" name="username" />
        </div>
        <div style={{ marginTop: 20 }}>
          <label style={{ letterSpacing: 3 }}>Password:</label>
          <input type="password" name="password" />
        </div>
        <div style={{ margin: 50, border: "none" }}>
          <input type="submit" value="LOG IN" className="yellow-button" />
        </div>
      </form>
    </div>
  );
}
