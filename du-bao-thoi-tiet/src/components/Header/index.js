import { Affix, Button } from "antd";
import React, { Component, useState } from "react";

const HeaderLayout = () => {
  const [top, setTop] = useState(10);
  return (
    <>
      <Affix>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <p>a</p>
    </>
  );
};

export default HeaderLayout;
