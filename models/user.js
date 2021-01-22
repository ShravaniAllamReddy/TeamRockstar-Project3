const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            trim: true,
            required: 'Enter an email',
            index: { unique: true }
        },
        password: {
            type: String,
            trim: true,
            required: 'Enter a password'
        },
        votes: [
            { type: Schema.Types.ObjectId, ref: 'Vote' }
        ],
        activities: [
            { type: Schema.Types.ObjectId, ref: 'Activity' }
        ]
    }
);

userSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        return next();
    }

    user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
    );

    next();
});

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
