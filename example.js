// Iniatialize Sequelize
const {
    Sequelize
} = require ('sequelize');

const sequelize = new Sequelize('expense_tracker', 'root', 'root123', {
    host: 'localhost',
    dialect: 'mysql'
});


// Check Connection with sequalize
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;

// const {
  //   Datatypes 
// } = require ('sequelize');

// const sequelize = require('./example');

// Define user model

const User = sequelize.define('User', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
}, {
  timestamps: false,
  tableName: 'Users',
});

module.exports = User;


// define category model

const Category = sequelize.define('Category', {
    category_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    category_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  }, {
    timestamps: false,
    tableName: 'Categories',
  });
  
  module.exports = Category;


  // expense model

const Expense = sequelize.define('Expense', {
    expense_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    category_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Category,
        key: 'category_id',
      },
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  }, {
    timestamps: false,
    tableName: 'Expenses',
  });
  
  module.exports = Expense;

  // Payment model

  const PaymentMethod = sequelize.define('PaymentMethod', {
    payment_method_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    payment_method_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  }, {
    timestamps: false,
    tableName: 'PaymentMethods',
  });
  
  module.exports = PaymentMethod;

  // Budgets model
const Budget = sequelize.define('Budget', {
    budget_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    category_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Category,
        key: 'category_id',
      },
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    }, {
      timestamps: false,
      tableName: 'Budgets',
    });
    
    module.exports = Budget;

/*
const User = require('./models/user');
const Category = require('./models/category');
const Expense = require('./models/expense');
const PaymentMethod = require('./models/paymentMethod');
const Budget = require('./models/budget');

*/

// Define associations
User.hasMany(Category, { foreignKey: 'user_id' });
User.hasMany(Expense, { foreignKey: 'user_id' });
User.hasMany(PaymentMethod, { foreignKey: 'user_id' });
User.hasMany(Budget, { foreignKey: 'user_id' });

Category.belongsTo(User, { foreignKey: 'user_id' });
Expense.belongsTo(User, { foreignKey: 'user_id' });
Expense.belongsTo(Category, { foreignKey: 'category_id' });
PaymentMethod.belongsTo(User, { foreignKey: 'user_id' });
Budget.belongsTo(User, { foreignKey: 'user_id' });
Budget.belongsTo(Category, { foreignKey: 'category_id' });

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

