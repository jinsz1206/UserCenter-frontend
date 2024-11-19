import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'author by jsz';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'school',
          title: '吉林财经大学',
          href: 'https://www.jlufe.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'academy',
          title: '管理科学与信息工程学院',
          href: 'https://gx.jlufe.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 圣舟</>,
          href: 'https://github.com/jinsz1206',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
