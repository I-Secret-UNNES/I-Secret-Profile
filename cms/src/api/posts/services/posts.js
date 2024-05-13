'use strict';

/**
 * posts service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::posts.posts');
