import LoginComponent from "../components/LoginComponent";
import { Tabs, Divider, Card } from "antd";

const LoginSignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/*<div className="flex flex-col gap-2">*/}
      {/*  <div className="flex gap-4 items-center text-center w-full">*/}
      {/*    <img src="/assets/logo.png" alt="mera-lahore-logo" className="w-[250px] h-[200px] bg-black" />*/}
      {/*  </div>*/}
      {/*  <p className="text-t1 text-sm mt-4">Let your voice be heard</p>*/}
      {/*  <Tabs defaultActiveKey="1" className="m-0">*/}
      {/*    <Tabs.TabPane tab="Login" key="1">*/}
      {/*      <Divider />*/}
      {/*      <LoginComponent />*/}
      {/*    </Tabs.TabPane>*/}
      {/*  </Tabs>*/}
      {/*</div>*/}
      <Card
        className="w-[400px]"
        // title="Login"
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
