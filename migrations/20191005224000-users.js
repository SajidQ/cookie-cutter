exports.up = db => {
  return db.createTable('users', {
    id: {
      type: 'uuid',
      defaultValue: new String('uuid_generate_v4()'),
      primaryKey: true
    },
    first_name: {
      type: 'string',
      notNull: true
    },
    last_name: {
      type: 'string',
    },
    user_name: {
    	type: 'string',
    	notNull: true
    },
    email: {
      type: 'string',
      notNull: true
    }});
};

exports.down = function(db) {
  return db.dropTable('users');
};

exports._meta = {
  "version": 1
};
