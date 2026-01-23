import React from "react";
import { useTranslation } from 'react-i18next';
import OverviewSection from "./OverviewSection";
import SummaryBlock from "./SummaryBlock";
import QuoteSection from "./QuoteSection";
import GoldDivider from "../../ui/GoldDivider";
import GreyDivider from "../../ui/GreyDivider";
import {
  PhaseSection,
  PhaseContentBlock,
  PhaseImageWrapper,
  PhaseImage,
  PhaseTextContent,
  PhaseTitle,
  PhaseParagraph
} from "./SharedStyles";

const Phase3Section: React.FC = () => {
  const { t } = useTranslation('development');
  
  return (
    <>
      <OverviewSection
        title={t('phase3.title', 'Phase 3')}
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbLabel={t('phase3.breadcrumb', 'Phase 3')}
      />
      
      <PhaseSection>
        <SummaryBlock
          content={[
            t('development:phase3.summary1'),
            t('development:phase3.summary2'),
            t('development:phase3.summary3')
          ]}
          imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
          imageAlt="Phase 3 Overview"
          reverse={true}
        />

        <GoldDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
              alt="Smart Innovation Hub" 
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>{t('development:phaseTitles.smartInnovationHub')}</PhaseTitle>
            <PhaseParagraph>
              {t('development:phase3.hub1')}
            </PhaseParagraph>
            <PhaseParagraph>
              {t('development:phase3.hub2')}
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
              alt="Advanced Manufacturing"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>{t('development:phaseTitles.advancedManufacturing')}</PhaseTitle>
            <PhaseParagraph>
              {t('development:phase3.manufacturing1')}
            </PhaseParagraph>
            <PhaseParagraph>
              {t('development:phase3.manufacturing2')}
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" 
              alt="Sustainable Development"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>{t('development:phaseTitles.sustainableEnergy')}</PhaseTitle>
            <PhaseParagraph>
              {t('development:phase3.energy1')}
            </PhaseParagraph>
            <PhaseParagraph>
              {t('development:phase3.energy2')}
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>
      </PhaseSection>
      
      <GoldDivider />
      
      <QuoteSection quote={t('development:phase3.quote')} />
    </>
  );
};

export default Phase3Section;
