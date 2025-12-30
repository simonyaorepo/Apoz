/**
 * Common TypeScript types and interfaces shared across the application
 */

/**
 * Base props for all styled components
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Navigation link item
 */
export interface NavigationLink {
  label: string;
  path: string;
}

/**
 * Navigation menu with optional submenu
 */
export interface NavigationMenu {
  label: string;
  path?: string;
  submenu?: NavigationLink[];
}

/**
 * Image props with optional fallback
 */
export interface ImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

/**
 * Content block with title and description
 */
export interface ContentBlock {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

/**
 * News article structure
 */
export interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string;
}

/**
 * Project phase information
 */
export interface ProjectPhase {
  id: number;
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  image?: string;
  details?: string[];
}

/**
 * KPI metric for dashboard
 */
export interface KpiMetric {
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
}

/**
 * Partner/Company information
 */
export interface PartnerInfo {
  category: string;
  name: string;
  contact?: string;
}

/**
 * Timeline event
 */
export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status?: 'past' | 'current' | 'future';
}

/**
 * Form field base props
 */
export interface FormFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

/**
 * Investment breakdown item
 */
export interface InvestmentItem {
  description: string;
  amount: number;
  category?: string;
}

/**
 * Feature tile/card
 */
export interface FeatureTile {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  link?: string;
}

/**
 * Leadership team member
 */
export interface LeadershipMember {
  name: string;
  title: string;
  bio?: string;
  image?: string;
  contact?: string;
}
