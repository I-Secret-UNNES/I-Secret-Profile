'use strict';

/**
 * posts router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::posts.posts');
