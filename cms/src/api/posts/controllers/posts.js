'use strict';

/**
 * posts controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::posts.posts');
