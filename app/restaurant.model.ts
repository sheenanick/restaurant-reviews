import { Review } from './review.model';

export class Restaurant {
  public reviews: Review[] = [];
  constructor(public name: string, public specialty: string, public address: string, public phone: string, public price: string){ }
}
