import React from 'react';
import {
  Button,
  Col, Form, Input, Row,
} from 'antd';
import style from './style.module.less';

const LoginPage: React.FC = () => (
    <div className={style.main}>
        <Row>
            <Col span={24}>
                <h1 className={style.title}>emailNotes</h1>
            </Col>
            <Col span={24}>
                <Form>
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
                        <Input />
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
);

export default LoginPage;
