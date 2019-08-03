const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const saltRounds = 10

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.pre('save', function(next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
      // Saving reference to this because of changing scopes
      const document = this;
      bcrypt.hash(document.password, saltRounds,
        function(err, hashedPassword) {
        if (err) {
          return next(err);
        } else {
          document.password = hashedPassword;
          next();
        }
      })
    } else {
      next()
    }
  })

UserSchema.methods.isCorrectPassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, same) {
        if (err) {
            cb(err)
        } else {
            cb(err, same)
        }
    })
}

module.exports = mongoose.model('User', UserSchema);