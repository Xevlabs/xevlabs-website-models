import { BadgeColumn } from './BadgeColumn';
import { SectionCustomProperties } from './SectionCustomProperties';

export interface SectionWithBadges {
    id: number;
    sectionCustomProps: SectionCustomProperties;
    badgeColumns: BadgeColumn[];
}
