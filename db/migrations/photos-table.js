/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('photos', {
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: Sequelize.INTEGER
			},
			url_link: {
				allowNull: false,
				type: Sequelize.STRING
			},
			photo_order: {
				allowNull: false,
				type: Sequelize.STRING
			},
			listing_id: {
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
		await queryInterface.dropTable('photos');
	}
};