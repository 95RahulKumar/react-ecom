import { Flex, Spin } from 'antd';

const FullScreenLoader = ({ content }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.147)', // Optional background
    zIndex: 9999 // Ensures it appears above other content
  }}>

    <Flex gap="middle" vertical>
    <Spin size="large" style={{ color: 'green' }}>
        </Spin>
      {content}
    </Flex>
  </div>
);

export default FullScreenLoader;
