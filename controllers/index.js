const router = require('express').Router();

// Import our controllers
const activityRoutes = require('./activitiesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const restaurantRoutes = require('./restaurantController');
const movieRoutes = require('./movieController');
const voteRoutes = require('./voteController');
// Hook up to the router
router.use('/api/activities', activityRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/restaurants', restaurantRoutes);
router.use('/api/movies', movieRoutes);
router.use('/api/votes', voteRoutes);

// Export the router
module.exports = router;
