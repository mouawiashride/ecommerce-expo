export interface LineItem  {
    id: string;
    product_id: string;
    name: string;
    product_name: string;
    sku: string | null;
    permalink: string;
    quantity: number;
    price: {
      raw: number;
      formatted: string;
      formatted_with_symbol: string;
      formatted_with_code: string;
    };
    line_total: {
      raw: number;
      formatted: string;
      formatted_with_symbol: string;
      formatted_with_code: string;
    };
    is_valid: boolean;
    product_meta: any[]; // Replace `any` with the appropriate type for product_meta if possible
    selected_options: any[]; // Replace `any` with the appropriate type for selected_options if possible
    variant: string | null; // Replace `string` with the appropriate type for variant if possible
    image: string | null; // Replace `string` with the appropriate type for image if possible
  };