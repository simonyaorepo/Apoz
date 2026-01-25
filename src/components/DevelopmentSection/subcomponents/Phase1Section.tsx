import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
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

const Phase1Section: React.FC = () => {
  const { t } = useTranslation(['development', 'common']);
  
  return (
    <>
      <TextHero
        title={t('development:phase1.title')}
        backgroundImage="/assets/images/development/phase1/hero.jpg"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.development'), href: "/development" },
          { label: t('common:breadcrumbs.phase1') }
        ]}
      />
      
      <PhaseSection>
        <SummaryBlock
          content={[t('development:phase1.intro1'), t('development:phase1.intro2')]}
          imageSrc="/assets/images/development/phase1/1.jpg"
          imageAlt="Phase 1 Overview"
          reverse={true}
        />

        <GoldDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="/assets/images/development/phase1/2.png" 
              alt="Strategic Positioning"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>{t('development:phaseTitles.strategicPositioning')}</PhaseTitle>
            <PhaseParagraph>{t('development:phase1.positioning1')}</PhaseParagraph>
            <PhaseParagraph>{t('development:phase1.positioning2')}</PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="/assets/images/development/phase1/3.png" 
              alt="Key Objectives"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>{t('development:phaseTitles.keyObjectivesPhase1')}</PhaseTitle>
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('development:phase1.objective1') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('development:phase1.objective2') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('development:phase1.objective3') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('development:phase1.objective4') }} />
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="/assets/images/development/phase1/4.jpg" 
              alt="Investment Timeline"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>{t('development:phaseTitles.phase1InvestmentTimeline')}</PhaseTitle>
            <PhaseParagraph>
              <strong>{t('development:phase1.timeline1_milestone')}</strong> ({t('development:phase1.timeline1_targetDate')}): {t('development:phase1.timeline1_keyActions')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('development:phase1.timeline2_milestone')}</strong> ({t('development:phase1.timeline2_targetDate')}): {t('development:phase1.timeline2_keyActions')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('development:phase1.timeline3_milestone')}</strong> ({t('development:phase1.timeline3_targetDate')}): {t('development:phase1.timeline3_keyActions')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('development:phase1.timeline4_milestone')}</strong> ({t('development:phase1.timeline4_targetDate')}): {t('development:phase1.timeline4_keyActions')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('development:phase1.timeline5_milestone')}</strong> ({t('development:phase1.timeline5_targetDate')}): {t('development:phase1.timeline5_keyActions')}
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920" 
              alt="Financing Structure"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>{t('development:phaseTitles.phase1FinancingStructure')}</PhaseTitle>
            <PhaseParagraph>
              <strong>{t('development:phase1.financing_targetRaiseLabel')}</strong> {t('development:phase1.financing_targetRaise')}
            </PhaseParagraph>
            <PhaseParagraph style={{ marginTop: '1rem' }}>
              <strong>{t('development:phase1.financing_capitalSourcesLabel')}</strong>
            </PhaseParagraph>
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('development:phase1.financing_source1') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('development:phase1.financing_source2') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('development:phase1.financing_source3') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('development:phase1.financing_source4') }} />
            <PhaseParagraph style={{ marginTop: '1.5rem' }}>
              {t('development:phase1.financing_returnsSummary')}
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>
      </PhaseSection>
      
      <GoldDivider />
      
      <QuoteSection quote={t('development:phase1.quote')} />
    </>
  );
};

export default Phase1Section;
