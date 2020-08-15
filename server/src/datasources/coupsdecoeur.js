const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class CoupDeCoeursAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.airtable.com/v0/appIGKwcj6gU4Aslg";
  }
  willSendRequest(request) {
    request.headers.set("Authorization", `Bearer ${process.env.AIRTABLE_API}`);
  }

  async getAll() {
    const { records } = await this.get("/coupsdecoeur");
    return records.map((record) => this.coupDeCoeurReducer(record));
  }

  async getById(id) {
    const record = await this.get(`/coupsdecoeur/${id}`);
    return this.coupDeCoeurReducer(record);
  }

  coupDeCoeurReducer(coupDeCoeur) {
    return {
      id: coupDeCoeur.id,
      content: coupDeCoeur.fields.content,
      rating: coupDeCoeur.fields.rating,
      createdAt: coupDeCoeur.createdTime,
    };
  }

  async createCoupDeCoeur(args) {
    const { content, rating } = args;
    const data = { records: [{ fields: { content, rating } }] };
    const { records } = await this.post("/coupsdecoeur", data);
    return this.coupDeCoeurReducer(records[0]);
  }
}

module.exports = CoupDeCoeursAPI;
