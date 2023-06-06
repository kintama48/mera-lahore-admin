import LoginComponent from "../components/LoginComponent";
import { Card } from "antd";

const LoginSignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card
        className="w-[400px] shadow-xl"
        cover={
          <img
            src="/assets/logo.png"
            alt="mera-lahore-logo"
            className="w-[250px] h-[250px] bg-blue-500"
          />
        }
      >
        <LoginComponent />
      </Card>
    </div>
  );
};

export default LoginSignUp;
