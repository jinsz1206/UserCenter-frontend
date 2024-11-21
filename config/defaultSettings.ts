import { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SYSTEM_LOGO } from '../constants';

const settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // 修改左上角的 logo
  logo: SYSTEM_LOGO,
  // 设置标题的 title
  title: 'Ant Design Pro',
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixSiderbar: true,
};

export default settings;
