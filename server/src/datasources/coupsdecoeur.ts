import { CoupDeCoeur } from "../types/CoupDeCoeur.type";
const { RESTDataSource } = require("apollo-datasource-rest");

export class CoupDeCoeursAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.airtable.com/v0/appIGKwcj6gU4Aslg";
  }
  willSendRequest(request: any) {
    request.headers.set("Authorization", "Bearer keyAOCtPMQ3gzQcWT");
  }

  async getAll() {
    const { records } = await this.get("/coupsdecoeur");
    return records.map((record: any) => this.coupDeCoeurReducer(record));
  }

  coupDeCoeurReducer(coupDeCoeur: any): CoupDeCoeur {
    return {
      id: coupDeCoeur.id,
      content: coupDeCoeur.fields.content,
      rating: coupDeCoeur.fields.rating,
      createdAt: coupDeCoeur.createdTime,
    };
  }

  async createCoupDeCoeur(args: any) {
    const { content, rating } = args;
    const data = { records: [{ fields: { content, rating } }] };
    const { records } = await this.post("/coupsdecoeur", data);
    return this.coupDeCoeurReducer(records[0]);
  }
}
