// Leadership team metadata - language-agnostic data
// Photo paths, IDs, and other non-translatable content

export interface LeadershipMetadata {
  id: string;
  photo: string;
}

export const LEADERSHIP_METADATA: Record<string, LeadershipMetadata> = {
  "david-champ": {
    id: "david-champ",
    photo: "/assets/images/profilePictures/David_Champ.png"
  },
  "eric-fang": {
    id: "eric-fang",
    photo: "/assets/images/profilePictures/Erif_Fang.png"
  },
  "bo-collins": {
    id: "bo-collins",
    photo: "/assets/images/profilePictures/James_Robert_Collins.png"
  },
  "trey-boring": {
    id: "trey-boring",
    photo: "/assets/images/profilePictures/Trey_W_Boring.jpg"
  },
  "kenar-liu": {
    id: "kenar-liu",
    photo: "/assets/images/profilePictures/Kenar_Lu.png"
  },
  "tina-wise": {
    id: "tina-wise",
    photo: "/assets/images/profilePictures/Tina_Pei_Wise.png"
  }
};

// Service partners metadata
export const SERVICE_PARTNERS = [
  {
    category: "Legal Counsel",
    firm: "JMS Law Group, PLLC",
    contact: "Jeffrey Stein, Esq.",
    location: "Plainview, NY",
    specialty: "SEC Security Law"
  },
  {
    category: "Accounting & Tax",
    firm: "Lakeland Accounting & Tax LLC",
    contact: "Philip Whiting, CPA",
    location: "Lakeland, FL",
    specialty: "Corporate Accounting & Tax"
  },
  {
    category: "Architectural Design",
    firm: "Maxx Designers",
    location: "Stafford, TX"
  },
  {
    category: "FTZ Consulting",
    firm: "IMS Worldwide",
    contact: "Trey W. Boring",
    location: "Webster, TX"
  },
  {
    category: "SEC Auditing",
    firm: "Beckles & Co.",
    location: "West Palm Beach, FL"
  },
  {
    category: "Stock Transfer",
    firm: "Transhare Corporation",
    location: "Clearwater, FL"
  },
  {
    category: "PR & Press Release",
    firm: "Access News Wire"
  }
];
