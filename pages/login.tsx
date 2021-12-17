import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Login</h1>
          <p>This is the login page</p>
          <p>
            {/* error  HTML entities must be escaped  react/no-unescaped-entities */}
            Once you&apos;re logged in, you will be routed back to the{" "}
            <Link href="/">
              <a>Home Page</a>
            </Link>
            .
          </p>
          <p>
            If this is your first time here, this page should instead be the
            signup page.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Login;
