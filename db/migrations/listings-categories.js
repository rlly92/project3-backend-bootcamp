/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('listings_categories', {
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: Sequelize.INTEGER
			},
			category_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'categories',
					key: 'id'
				}
			},
			listing_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'listings',
					key: 'id'
				}
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('listings_categories');
	}
};