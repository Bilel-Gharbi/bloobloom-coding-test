interface CostBreakdown {
  id: number;
  materials: number;
  labour: number;
  transport: number;
  taxes: number;
  bloobloom_price: number;
  retail_price: number;
}

export interface Glasses {
  id: number;
  name: string;
  configuration_name: string;
  default_collection_name?: any;
  cost_breakdown: CostBreakdown;
  glass_variants: any;
}
