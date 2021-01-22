const router = require('express').Router();

// Import our controllers
const activityRoutes = require('./activitiesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const restaurantRoutes = require('./restaurantController');

// Hook up to the router
router.use('/api/activities', activityRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/restaurants', restaurantRoutes);

// Export the router
module.exports = router;
