const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class CoupDeCoeursAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.airtable.com/v0/appIGKwcj6gU4Aslg/coupsdecoeur";
  }
  willSendRequest(request) {
    request.headers.set("Authorization", `Bearer ${process.env.AIRTABLE_API}`);
  }

  async getAll() {
    const { records } = await this.get("?view=all");
    return records.map((record) => this.coupDeCoeurReducer(record));
  }

  async getById(id) {
    const record = await this.get(`/${id}`);
    return this.coupDeCoeurReducer(record);
  }

  async getAllFavorites() {
    const { records } = await this.get("?view=favorites");
    return records.map((record) => this.coupDeCoeurReducer(record));
  }

  async addToFavorites(id) {
    const data = { records: [{ id, fields: { isFavorite: true } }] };
    const { records } = await this.patch(``, data);
    return this.coupDeCoeurReducer(records[0]);
  }

  coupDeCoeurReducer(coupDeCoeur) {
    return {
      id: coupDeCoeur.id,
      content: coupDeCoeur.fields.content,
      rating: coupDeCoeur.fields.rating,
      createdAt: coupDeCoeur.createdTime,
      isFavorite: coupDeCoeur.fields.isFavorite,
    };
  }

  async createCoupDeCoeur(args) {
    const { content, rating } = args;
    const data = { records: [{ fields: { content, rating } }] };
    const { records } = await this.post("", data);
    return this.coupDeCoeurReducer(records[0]);
  }
}

module.exports = CoupDeCoeursAPI;
