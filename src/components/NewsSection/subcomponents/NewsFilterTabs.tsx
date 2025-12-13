import styled from "styled-components";

interface NewsFilterTabsProps {
  filters: string[];
  filter: string;
  setFilter: (f: string) => void;
}

const TabsWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayBorder};
`;
const TabsInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;
const TabsRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
`;
const TabButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ $active, theme }) => $active ? theme.colors.goldAccent : theme.colors.white};
  color: ${({ $active, theme }) => $active ? theme.colors.darkBlueAlt : theme.colors.grayAccent};
  border: ${({ $active, theme }) => $active ? "none" : `1px solid ${theme.colors.grayBorder}`};
  transition: ${({ theme }) => theme.transition.button};
`;

const NewsFilterTabs = ({ filters, filter, setFilter }: NewsFilterTabsProps) => (
  <TabsWrapper>
    <TabsInner>
      <TabsRow>
        {filters.map(f => (
          <TabButton key={f} $active={filter === f} onClick={() => setFilter(f)}>
            {f}
          </TabButton>
        ))}
      </TabsRow>
    </TabsInner>
  </TabsWrapper>
);

export default NewsFilterTabs;
