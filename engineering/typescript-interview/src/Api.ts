import { AxiosInstance } from 'axios';

export interface ProductParams {
  gender?: 'male' | 'female';
  page?: Number;
  page_size?: Number;
  sort?: 'popularity' | 'price';
}

export interface Product {
  name: string;
  sku: string;
  video_count: number;
  price: number;
  [name: string]: any;
}

export interface VideoPreview {
  videos_url: {
    url: string;
    [name: string]: any;
  }[];
}

const defaultVideoPreview: VideoPreview = {
  videos_url: [],
};

export default class ProductApi {
  constructor(private readonly client: AxiosInstance) {}

  public async getProducts(params: ProductParams): Promise<Product[]> {
    const products = await this.client.get('/catalog/products', { params });
    return JSON.parse(JSON.stringify(products.data?._embedded?.product || {}));
  }

  public async getVideoPreviewForProduct(product: Product): Promise<VideoPreview> {
    try {
      const videoPreview = await this.client.get(`/catalog/products/${product.sku}/videos`);
      return JSON.parse(JSON.stringify(videoPreview.data?._embedded || defaultVideoPreview));
    } catch (error) {
      return defaultVideoPreview;
    }
  }
}
