// src/types/common.ts

// Diese Definition muss "export" haben!
export interface ImageCredit {
  photographer: string;
  sourceUrl?: string; 
  license: 'CC BY 3.0' | 'CC BY-SA 3.0' | 'CC BY 4.0' | 'CC BY-SA 4.0' | 'Public Domain' | 'Copyright' | 'Unsplash' | 'CC BY 2.0';
  licenseUrl?: string;
}
