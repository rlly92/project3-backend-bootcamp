/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('cart', {
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: Sequelize.INTEGER
			},
			listing_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'listings',
					key: 'id'
				}
			},
			price: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			quantity: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			shipping_cost: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			total_price: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
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
		await queryInterface.dropTable('cart');
	}
};