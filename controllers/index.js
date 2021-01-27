const router = require('express').Router();

// Import our controllers
const activityRoutes = require('./activitiesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const restaurantRoutes = require('./restaurantController');
const movieRoutes = require('./movieController');
const voteRoutes = require('./voteController');
// const restaurantOptionsRoutes = require('./restaurantOptionsController');
// const movieOptionsRoutes = require('./movieOptionsController');

// Hook up to the router
router.use('/api/activities', activityRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/restaurants', restaurantRoutes);
router.use('/api/movies', movieRoutes);
router.use('/api/votes', voteRoutes);
// router.use('/api/restaurantoptions', restaurantOptionsRoutes);
// router.use('/api/movieoptions', movieOptionsRoutes);
// Export the router
module.exports = router;
