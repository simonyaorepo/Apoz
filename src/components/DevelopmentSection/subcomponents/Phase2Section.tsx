import React from "react";
import { useTranslation } from 'react-i18next';
import OverviewSection from "./OverviewSection";
import SummaryBlock from "./SummaryBlock";
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

const Phase2Section: React.FC = () => {
  const { t } = useTranslation('development');
  
  return (
    <>
      <OverviewSection
        title={t('phase2.title')}
        backgroundImage="https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbLabel={t('phase2.breadcrumb', 'Phase 2')}
      />
      
      <PhaseSection>
        <SummaryBlock
          content={[t('phase2.overview1'), t('phase2.overview2')]}
          imageSrc="/assets/images/development/phase2/1.jpg"
          imageAlt="Phase 2 Overview"
          reverse={true}
        />

        <GoldDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920" 
              alt="Development Objectives"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>{t('phase2.developmentObjectives')}</PhaseTitle>
            <PhaseParagraph>{t('phase2.objective1')}</PhaseParagraph>
            <PhaseParagraph>{t('phase2.objective2')}</PhaseParagraph>
            <PhaseParagraph>{t('phase2.objective3')}</PhaseParagraph>
            <PhaseParagraph>{t('phase2.objective4')}</PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80" 
              alt="Project Scope"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>{t('phase2.projectScope')}</PhaseTitle>
            <PhaseParagraph>
              <strong>{t('phase2.totalUnitsLabel')}</strong> {t('phase2.scope_totalUnits')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('phase2.unitTypesLabel')}</strong> {t('phase2.scope_unitType1')}, {t('phase2.scope_unitType2')}, {t('phase2.scope_unitType3')}.
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('phase2.communityFeaturesLabel')}</strong> {t('phase2.scope_communityFeature1')}, {t('phase2.scope_communityFeature2')}, {t('phase2.scope_communityFeature3')}.
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('phase2.landUseLabel')}</strong> {t('phase2.scope_landUse')}
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
              alt="Financing Structure"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>{t('phase2.financingStructure')}</PhaseTitle>
            <PhaseParagraph>
              <strong>{t('phase2.estimatedCostLabel')}</strong> {t('phase2.financing_estimatedCost')}
            </PhaseParagraph>
            <PhaseParagraph style={{ marginTop: '1rem' }}>
              <strong>{t('phase2.capitalSourcesLabel')}</strong>
            </PhaseParagraph>
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('phase2.financing_source1') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('phase2.financing_source2') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('phase2.financing_source3') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('phase2.financing_source4') }} />
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
              alt="Development Timeline"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>{t('phase2.developmentTimeline')}</PhaseTitle>
            <PhaseParagraph>
              <strong>{t('phase2.timeline1_milestone')} ({t('phase2.timeline1_targetDate')}):</strong> {t('phase2.timeline1_keyActions')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('phase2.timeline2_milestone')} ({t('phase2.timeline2_targetDate')}):</strong> {t('phase2.timeline2_keyActions')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('phase2.timeline3_milestone')} ({t('phase2.timeline3_targetDate')}):</strong> {t('phase2.timeline3_keyActions')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('phase2.timeline4_milestone')} ({t('phase2.timeline4_targetDate')}):</strong> {t('phase2.timeline4_keyActions')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('phase2.timeline5_milestone')} ({t('phase2.timeline5_targetDate')}):</strong> {t('phase2.timeline5_keyActions')}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>{t('phase2.timeline6_milestone')} ({t('phase2.timeline6_targetDate')}):</strong> {t('phase2.timeline6_keyActions')}
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
              alt="Phase 1 & 2 Synergy"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>{t('phase2.phaseSynergies')}</PhaseTitle>
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('phase2.synergy1') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('phase2.synergy2') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('phase2.synergy3') }} />
            <PhaseParagraph dangerouslySetInnerHTML={{ __html: t('phase2.synergy4') }} />
          </PhaseTextContent>
        </PhaseContentBlock>
      </PhaseSection>
    </>
  );
};

export default Phase2Section;
