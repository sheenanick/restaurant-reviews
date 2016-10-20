import { Review } from './review.model';

export class Restaurant {
  public reviews: Review[] = [];
  public avgRating: number = 0;
  public avgWaitTime: number = 0;
  constructor(public name: string, public specialty: string, public address: string, public phone: string, public price: string){ }
}
