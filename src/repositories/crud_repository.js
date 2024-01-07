const { LoggerConfig } = require("../config");


class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async create(data) {
            const response = await this.model.create(data)
            return response;
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            })
            return response;
        }
        catch (error) {
            LoggerConfig.error("Something went wrong in the crud Repo : delete")
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data)
            return response
        }
        catch (error) {
            LoggerConfig.error("Something went wrong in the crud Repo : get")
        }
    }

    async getAll(data) {
        try {
            const response = await this.model.findAll();
            return response;
        }
        catch (error) {
            LoggerConfig.error("Something went wrong in the crud Repo : get all")
        }
    }

    async update(data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: data
                }
            })
            return response;
        }
        catch (error) {
            LoggerConfig.error("Something went wrong in the crud Repo : delete")
        }
    }
}

module.exports = CrudRepository