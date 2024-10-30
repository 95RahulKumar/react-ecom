import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { IoIosSend } from "react-icons/io";
const SubmitButton = ({ form, children }) => {
    const [submittable, setSubmittable] = useState(false);
  
    // Watch all values
    const values = Form.useWatch([], form);
  
    useEffect(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);
  
    return (
      <Button type="primary" htmlType="submit" icon={<IoIosSend/>} disabled={!submittable}>
        {children}
      </Button>
    );
  };

  export default SubmitButton