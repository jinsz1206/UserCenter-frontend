import Footer from '@/components/Footer';
import { register } from '@/services/ant-design-pro/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import {history, Link} from 'umi';
import styles from './index.less';
import { SYSTEM_LOGO } from '../../../../constants';

const Register: React.FC = () => {
  const [type, setType] = useState<string>('a ccount');
  const handleSubmit = async (values: API.RegisterParams) => {
    // @ts-ignore
    const {userAccount, userPassword, checkPassword } = values;
    //校验
    if (userPassword !== checkPassword) {
      message.error('两次密码输入不一致');
      return;
    }
    try {
      // 注册
      const id = await register(values);
      if (id > 0) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        /** 此方法会跳转到 redirect 参数所在的位置 */
        /** 即登陆页面 */
        if (!history) return;
        const { query } = history.location;

        history.push({
          pathname: '/user/login',
          query,
        });
        return;
      } else {
        throw new Error(`register error id = ${id}`);
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig:{
              submitText: '注册'

          }
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO} />}
          title="The final piece"
          subTitle={'众里寻他千百度，蓦然回首，那人却在，灯火阑珊处'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'账户密码注册'} />
          </Tabs>

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入用户名'}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                  {
                    min: 6,
                    max: 12,
                    type: 'string',
                    message: '账号长度为6-12位',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'清输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 6,
                    max: 15,
                    type: 'string',
                    message: '密码长度为6-15位',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'清确认密码'}
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                  {
                    min: 6,
                    max: 15,
                    type: 'string',
                    message: '密码长度为6-15位',
                  },
                ]}
              />
            </>
          )}

          <div
            style={{
              display: 'flex',
              marginBottom: 24,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            已有账户?
            <Link to="/user/login">立即登录</Link>
          </div>
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};
export default Register;
