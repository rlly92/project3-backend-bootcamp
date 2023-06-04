/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('product_variations', {
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: Sequelize.INTEGER
			},
			sku_number: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			quantity: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			colour: {
				allowNull: false,
				type: Sequelize.STRING
			},
			type: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			weight: {
				allowNull: false,
				type: Sequelize.STRING
			},
			size: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			listing_Id: {
				allowNull: false,
				type: Sequelize.STRING,
				references: {
					model: 'listings',
					key: 'id'
				}
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			update_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('product_variations');
	}
};