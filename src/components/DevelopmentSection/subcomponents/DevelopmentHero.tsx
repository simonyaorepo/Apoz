import { useTranslation } from 'react-i18next';
import PageHero from "../../PageHero";

const DevelopmentHero: React.FC = () => {
  const { t } = useTranslation('development');
  
  return (
    <PageHero
      backgroundImage="https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      title={t('hero.title', 'Our Development')}
      breadcrumbs={[{ label: t('nav.home', 'Home'), href: "/" }, { label: t('hero.title', 'Development') }]}
    />
  );
};

export default DevelopmentHero;
