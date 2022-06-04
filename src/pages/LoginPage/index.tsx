import React, { useEffect, useState } from 'react';
import {
  Button, Col, Form, Input, message, Row, Spin,
} from 'antd';
import { sleep } from '@wuchuhengtools/helper';
import { useNavigate } from 'react-router-dom';
import style from './style.module.less';
import WebkitAppRegion from '../../components/WebkitAppRegion';
import SubTitleRender from './SubTitleRender';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [account, setAccount] = useState<AccountType>({
    password: 'owtdtjnltfnndegh',
    username: '2831473954@qq.com',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleFinished = async (newAccount: AccountType) => {
    setLoading(true);
    try {
      await window.login(newAccount);
      message.info('登录成功!');
      await sleep(1000);
      navigate('/');
    } catch (e) {
      message.error(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
  }, []);

  return (
        <Spin spinning={loading}>
            <div className={style.main}>
                <WebkitAppRegion />
                <div className={style.containerWrapper}>
                    <Row className={style.container}>
                        <Col span={24}>
                            <h1 className={style.title}>emailNotes</h1>
                            <SubTitleRender />
                        </Col>

                        <Col span={24}>
                            <Form
                                initialValues={account}
                                name='basic'
                                form={form}
                                onFinish={handleFinished}
                            >
                                <Form.Item
                                    label='账号'
                                    rules={[{ required: true, message: '账号不能为空' }]}
                                    name='username'
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label='密码'
                                    rules={[{ required: true, message: '密码不能为空' }]}
                                    name='password'
                                >
                                    <Input type='password'/>
                                </Form.Item>
                                <Form.Item>
                                    <Row justify="center">
                                        <Col span={12}>
                                            <Button
                                                htmlType='submit'
                                                type='primary'
                                                className={style.loginButton}
                                            >登录</Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </Spin>
  );
};

export default LoginPage;
