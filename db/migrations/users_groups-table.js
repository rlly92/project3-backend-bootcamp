/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users_groups', {
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: Sequelize.INTEGER
			},
			admin_status: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
			},
			group_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'interest_groups',
					key: 'id'
				}
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				},
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
		await queryInterface.dropTable('users_groups');
	}
};