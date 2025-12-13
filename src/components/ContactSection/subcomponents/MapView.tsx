
import React from "react";
import styled, { useTheme } from "styled-components";
import { MapPin as LucideMapPin } from "lucide-react";

const MapSection = styled.section`
  height: ${({ theme }) => theme.spacing.xxxl};
  background: ${({ theme }) => theme.colors.mutedForeground}1A;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MapContent = styled.div`
  text-align: center;
`;

const MapLabel = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const MapPin = styled(LucideMapPin)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;


const MapView: React.FC = () => {
  const theme = useTheme();
  return (
    <MapSection>
      <MapContent>
        <MapPin size={64} color={theme.colors.goldAccent} />
        <MapLabel>Map View</MapLabel>
      </MapContent>
    </MapSection>
  );
};

export default MapView;
